import type {
  ExhibitorLocation,
  GalleryEntry,
  NewsEntry,
  PlatformModule,
  ProgramEntry,
} from "@/types/abtf-platform";

export const platformModules: readonly PlatformModule[] = [
  {
    id: "live",
    href: "/ABTF2026/live",
    title: "البث المباشر",
    eyebrow: "تغطية المعرض",
    description: "تابع التغطية المرئية والصوتية لفعاليات المعرض من منصة واحدة.",
    icon: "broadcast",
    status: "ready-to-connect",
    statusLabel: "تغطية مباشرة",
    capabilities: ["مصدر بث خارجي", "حالة البث", "معلومات البرنامج الجاري"],
    featured: true,
  },
  {
    id: "program",
    href: "/ABTF2026/program",
    title: "برنامج الفعاليات",
    eyebrow: "الجدول الرسمي",
    description: "مواعيد الندوات والأمسيات والأنشطة الثقافية طوال أيام المعرض.",
    icon: "calendar",
    status: "awaiting-content",
    statusLabel: "البرنامج اليومي",
    capabilities: ["أيام المعرض", "التوقيت والمكان", "حالة الفعالية"],
  },
  {
    id: "gallery",
    href: "/ABTF2026/gallery",
    title: "معرض الصور",
    eyebrow: "التوثيق البصري",
    description: "مشاهد وألبومات توثق الافتتاح والفعاليات وتجربة الزوار.",
    icon: "gallery",
    status: "configurable",
    statusLabel: "ألبومات المعرض",
    capabilities: ["ألبومات يومية", "صور عالية الجودة", "وصف وتاريخ"],
  },
  {
    id: "advertising",
    href: "/ABTF2026/advertising",
    title: "الإعلانات داخل المنصة",
    eyebrow: "المساحات الإعلانية",
    description: "مساحات إعلانية واضحة للشركاء والعلامات التجارية داخل المنصة.",
    icon: "megaphone",
    status: "configurable",
    statusLabel: "فرص إعلانية",
    capabilities: ["مواضع محددة", "جدولة الظهور", "قياس التفاعل"],
  },
  {
    id: "news",
    href: "/ABTF2026/news",
    title: "الأخبار",
    eyebrow: "المركز الإعلامي",
    description: "أخبار المعرض وإعلاناته وتغطيات فعالياته بترتيب زمني واضح.",
    icon: "news",
    status: "ready-to-publish",
    statusLabel: "آخر المستجدات",
    capabilities: ["أرشيف زمني", "خبر مفرد", "صور ومرفقات"],
  },
  {
    id: "exhibitors",
    href: "/ABTF2026/exhibitors",
    title: "دليل العارضين",
    eyebrow: "الجهات المشاركة",
    description:
      "ابحث عن دور النشر والشركات والجهات المشاركة حسب الاسم والنشاط.",
    icon: "exhibitors",
    status: "awaiting-content",
    statusLabel: "بحث وتصنيف",
    capabilities: ["بحث بالاسم", "تصنيف النشاط", "موقع الجناح"],
  },
  {
    id: "visitor-guide",
    href: "/ABTF2026/visitor-guide",
    title: "دليل الزائر",
    eyebrow: "الوصول داخل المعرض",
    description: "اعثر على الجهة والمبنى والجناح واستعرض مسار الوصول عبر GPS.",
    icon: "wayfinding",
    status: "ready-to-connect",
    statusLabel: "بحث ومسار",
    capabilities: ["أربع بنايات", "بحث موحد", "عرض المسار عبر GPS"],
  },
] as const;

export function getPlatformModule(id: string) {
  const platformModule = platformModules.find((item) => item.id === id);
  if (!platformModule) {
    throw new Error(`Unknown ABTF platform module: ${id}`);
  }
  return platformModule;
}

export const programEntries: readonly ProgramEntry[] = [
  {
    id: "daily-cultural-seminars",
    title: "الندوات الثقافية والمحاضرات",
    date: "2026-09-16",
    startsAt: "19:00",
    endsAt: "20:00",
    location: "يومياً",
    status: "scheduled",
  },
  {
    id: "daily-courtyard-program",
    title: "استراحة المساء وفعاليات الباحة الخارجية",
    date: "2026-09-16",
    startsAt: "20:00",
    endsAt: "21:00",
    location: "الباحة الخارجية · يومياً",
    status: "scheduled",
  },
  {
    id: "daily-poetry-and-art",
    title: "الأمسيات الشعرية والفنية",
    date: "2026-09-16",
    startsAt: "21:00",
    endsAt: "23:00",
    location: "يومياً",
    status: "scheduled",
  },
];
export const newsEntries: readonly NewsEntry[] = [];
export const exhibitorLocations: readonly ExhibitorLocation[] = [];

export const liveStreamConfig = {
  title: "قناة المعرض الرسمية",
  sourceUrl: null as string | null,
  sourceType: "hls" as "hls" | "video",
  poster: "/brand/abtf2026/anbar-night-panorama.webp",
} as const;

export const galleryEntries: readonly GalleryEntry[] = [
  {
    id: "platform-visual-anbar-night",
    title: "الأنبار ليلاً",
    image: "/brand/abtf2026/anbar-night-panorama.webp",
    alt: "مشهد بانورامي ليلي للأنبار ونهر الفرات",
  },
] as const;

export const exhibitionBuildings = [1, 2, 3, 4] as const;

export const advertisingPlacements = [
  {
    id: "platform-banner",
    title: "الشريط الرئيسي",
    ratio: "بانورامي",
    location: "بين مقدمة المنصة وأقسامها",
  },
  {
    id: "section-inline",
    title: "إعلان داخل القسم",
    ratio: "أفقي",
    location: "بين مجموعات المحتوى دون قطع مسار القراءة",
  },
  {
    id: "directory-card",
    title: "بطاقة راعٍ",
    ratio: "مربع",
    location: "ضمن المساحات المخصصة للرعاة فقط",
  },
] as const;
