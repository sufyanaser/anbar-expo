import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { basename, extname, resolve } from "node:path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN are required",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-08-09",
  useCdn: false,
});

const assetRoot = resolve("public/brand/abtf2026");
const contentTypes = {
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
};
const uploadedAssets = new Map();

async function uploadImage(filename) {
  if (uploadedAssets.has(filename)) return uploadedAssets.get(filename);
  const filePath = resolve(assetRoot, filename);
  const data = await readFile(filePath);
  const asset = await client.assets.upload("image", data, {
    filename: basename(filePath),
    contentType: contentTypes[extname(filePath).toLowerCase()],
  });
  const image = {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
  uploadedAssets.set(filename, image);
  return image;
}

function blocks(paragraphs) {
  return paragraphs.map((text, index) => ({
    _key: `paragraph-${index + 1}`,
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [
      {
        _key: `span-${index + 1}`,
        _type: "span",
        marks: [],
        text,
      },
    ],
  }));
}

const assets = {
  eventMark: await uploadImage("event-mark.svg"),
  hero: await uploadImage("anbar-night-panorama.webp"),
  governorate: await uploadImage("anbar-governorate.webp"),
  ministry: await uploadImage("partner-07.svg"),
  organizer: await uploadImage("organizer-mark.svg"),
  raneen: await uploadImage("al-raneen-mark.svg"),
  syria: await uploadImage("partner-03.svg"),
  bhtc: await uploadImage("partner-02.svg"),
  alfa: await uploadImage("partner-01.svg"),
};

const documents = [
  {
    _id: "eventSettings",
    _type: "eventSettings",
    shortName: "ABTF 2026",
    titleAr: "معرض الأنبار الدولي للكتاب والتكنولوجيا",
    titleEn: "Anbar Book & Technology Fair 2026",
    description:
      "بوابة المعرض الرقمية للأخبار والفعاليات والجهات المشاركة، مع خدمات متكاملة تساعد الزائر على استكشاف تجربة المعرض في مدينة الرمادي.",
    openingAt: "2026-09-16T15:00:00.000Z",
    closingAt: "2026-09-25T20:59:00.000Z",
    venue: "مدينة الرمادي · محافظة الأنبار",
    buildingCount: 4,
    heroImage: { ...assets.hero, alt: "مشهد ليلي لمدينة الأنبار ونهر الفرات" },
    eventMark: assets.eventMark,
  },
  {
    _id: "liveStream",
    _type: "liveStream",
    title: "قناة المعرض الرسمية",
    status: "offline",
    sourceType: "hls",
    sourceUrl: null,
    poster: assets.hero,
  },
  ...[
    {
      id: "patronage",
      role: "patronage",
      label: "برعاية",
      name: "المهندس عمر مشعان دبوس",
      detail: "محافظ الأنبار",
      logo: assets.governorate,
      order: 1,
    },
    {
      id: "supervision",
      role: "supervision",
      label: "إشراف",
      name: "وزارة الثقافة والسياحة والآثار",
      detail: "جمهورية العراق",
      logo: assets.ministry,
      order: 2,
    },
    {
      id: "organization",
      role: "organization",
      label: "تنظيم",
      name: "شركة الواصف الملكية",
      detail: "لتنظيم المؤتمرات والمعارض الدولية",
      link: "/ABTF2026/al-wasef",
      logo: assets.organizer,
      order: 3,
    },
    {
      id: "concurrent",
      role: "concurrent",
      label: "بالتزامن مع",
      name: "معرض صُنع في سوريا",
      detail: "",
      logo: assets.syria,
      order: 4,
    },
    {
      id: "media-sponsor",
      role: "mediaSponsor",
      label: "الراعي الإعلامي والوكيل الإعلاني",
      name: "الرنين للحلول الإعلامية والرقمية",
      detail: "التفاصيل والتواصل والإعلانات",
      link: "/ABTF2026/media-sponsor",
      logo: assets.raneen,
      order: 5,
    },
  ].map((entity) => ({
    _id: `officialEntity-${entity.id}`,
    _type: "officialEntity",
    role: entity.role,
    label: entity.label,
    name: entity.name,
    detail: entity.detail,
    link: entity.link,
    logo: { ...entity.logo, alt: `شعار ${entity.name}` },
    order: entity.order,
    enabled: true,
  })),
  ...[
    ["ministry", "وزارة الثقافة والسياحة والآثار", assets.ministry, null],
    ["governorate", "محافظة الأنبار", assets.governorate, null],
    [
      "organizer",
      "شركة الواصف الملكية",
      assets.organizer,
      "/ABTF2026/al-wasef",
    ],
    [
      "raneen",
      "الرنين للحلول الإعلامية والرقمية",
      assets.raneen,
      "/ABTF2026/media-sponsor",
    ],
    ["made-in-syria", "معرض صُنع في سوريا", assets.syria, null],
    ["bhtc", "شركة بيت الحكمة للتدريب والاستشارات", assets.bhtc, null],
    ["alfa", "ألفا للمعارض والمؤتمرات", assets.alfa, null],
  ].map(([id, name, logo, link], order) => ({
    _id: `partner-${id}`,
    _type: "partner",
    name,
    logo,
    link,
    order: order + 1,
    enabled: true,
  })),
  ...[
    [
      "live",
      "البث المباشر",
      "تغطية المعرض",
      "تابع التغطية المرئية والصوتية لفعاليات المعرض من منصة واحدة.",
      "ready-to-connect",
      "تغطية مباشرة",
      ["مصدر بث خارجي", "حالة البث", "معلومات البرنامج الجاري"],
      true,
    ],
    [
      "program",
      "برنامج الفعاليات",
      "الجدول الرسمي",
      "مواعيد الندوات والأمسيات والأنشطة الثقافية طوال أيام المعرض.",
      "awaiting-content",
      "البرنامج اليومي",
      ["أيام المعرض", "التوقيت والمكان", "حالة الفعالية"],
      false,
    ],
    [
      "gallery",
      "معرض الصور",
      "التوثيق البصري",
      "مشاهد وألبومات توثق الافتتاح والفعاليات وتجربة الزوار.",
      "configurable",
      "ألبومات المعرض",
      ["ألبومات يومية", "صور عالية الجودة", "وصف وتاريخ"],
      false,
    ],
    [
      "advertising",
      "الإعلانات داخل المنصة",
      "المساحات الإعلانية",
      "مساحات إعلانية واضحة للشركاء والعلامات التجارية داخل المنصة.",
      "configurable",
      "فرص إعلانية",
      ["مواضع محددة", "جدولة الظهور", "قياس التفاعل"],
      false,
    ],
    [
      "news",
      "الأخبار",
      "المركز الإعلامي",
      "أخبار المعرض وإعلاناته وتغطيات فعالياته بترتيب زمني واضح.",
      "ready-to-publish",
      "آخر المستجدات",
      ["أرشيف زمني", "خبر مفرد", "صور ومرفقات"],
      false,
    ],
    [
      "exhibitors",
      "دليل العارضين",
      "الجهات المشاركة",
      "ابحث عن دور النشر والشركات والجهات المشاركة حسب الاسم والنشاط.",
      "awaiting-content",
      "بحث وتصنيف",
      ["بحث بالاسم", "تصنيف النشاط", "موقع الجناح"],
      false,
    ],
    [
      "visitor-guide",
      "دليل الزائر",
      "الوصول داخل المعرض",
      "اعثر على الجهة والمبنى والجناح واستعرض مسار الوصول عبر GPS.",
      "ready-to-connect",
      "بحث ومسار",
      ["أربع بنايات", "بحث موحد", "عرض المسار عبر GPS"],
      false,
    ],
  ].map(
    (
      [
        key,
        title,
        eyebrow,
        description,
        status,
        statusLabel,
        capabilities,
        featured,
      ],
      order,
    ) => ({
      _id: `platformModule-${key}`,
      _type: "platformModule",
      key,
      title,
      eyebrow,
      description,
      status,
      statusLabel,
      capabilities,
      featured,
      enabled: true,
      order: order + 1,
    }),
  ),
  ...[
    [
      "daily-cultural-seminars",
      "الندوات الثقافية والمحاضرات",
      "2026-09-16T16:00:00.000Z",
      "2026-09-16T17:00:00.000Z",
      "يومياً",
    ],
    [
      "daily-courtyard-program",
      "استراحة المساء وفعاليات الباحة الخارجية",
      "2026-09-16T17:00:00.000Z",
      "2026-09-16T18:00:00.000Z",
      "الباحة الخارجية · يومياً",
    ],
    [
      "daily-poetry-and-art",
      "الأمسيات الشعرية والفنية",
      "2026-09-16T18:00:00.000Z",
      "2026-09-16T20:00:00.000Z",
      "يومياً",
    ],
  ].map(([id, title, startsAt, endsAt, location]) => ({
    _id: `programEntry-${id}`,
    _type: "programEntry",
    title,
    startsAt,
    endsAt,
    location,
    status: "scheduled",
    enabled: true,
  })),
  {
    _id: "galleryItem-anbar-night",
    _type: "galleryItem",
    title: "الأنبار ليلاً",
    image: assets.hero,
    alt: "مشهد بانورامي ليلي للأنبار ونهر الفرات",
    album: "واجهة المنصة",
    order: 1,
    enabled: true,
  },
  {
    _id: "managedPage-al-wasef",
    _type: "managedPage",
    title: "شركة الواصف الملكية",
    slug: { _type: "slug", current: "al-wasef" },
    intro:
      "شركة رائدة في إدارة وتصميم الفعاليات الاقتصادية والثقافية الكبرى في العراق والمنطقة.",
    logo: assets.organizer,
    body: blocks([
      "تعمل شركة الواصف الملكية لتنظيم المؤتمرات والمعارض الدولية والتجارة العامة وفق رؤية استراتيجية تستند إلى المعايير العالمية.",
      "تؤمن الشركة بأن المعارض منصات متكاملة لصناعة الفرص وتبادل المعرفة وتوطيد العلاقات الاستثمارية.",
    ]),
    contactEmail: "wasef.shouayki@gmail.com",
    contactPhone: "+964 770 812 5528",
    enabled: true,
  },
  {
    _id: "managedPage-media-sponsor",
    _type: "managedPage",
    title: "الرنين للحلول الإعلامية والرقمية",
    slug: { _type: "slug", current: "media-sponsor" },
    intro: "الراعي الإعلامي والوكيل الإعلاني للمنصة الرقمية للمعرض.",
    logo: assets.raneen,
    body: blocks([
      "تتولى الرنين إدارة وتشغيل المنصة الرقمية وخدمات التغطية الإعلامية والإعلانات المرتبطة بالمعرض.",
      "تُضاف آليات التواصل وباقات الإعلان والتفاصيل التشغيلية من لوحة الإدارة عند اعتمادها.",
    ]),
    enabled: true,
  },
];

const transaction = client.transaction();
for (const document of documents) transaction.createOrReplace(document);
await transaction.commit({ autoGenerateArrayKeys: true });

console.log(`Seeded ${documents.length} ABTF CMS documents.`);
