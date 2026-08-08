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
    description:
      "واجهة بث قابلة للربط بمصدر الفيديو أو الصوت الرسمي عند اعتماده.",
    icon: "broadcast",
    status: "ready-to-connect",
    statusLabel: "جاهز للربط",
    capabilities: ["مصدر بث خارجي", "حالة البث", "معلومات البرنامج الجاري"],
    featured: true,
  },
  {
    id: "program",
    href: "/ABTF2026/program",
    title: "برنامج الفعاليات",
    eyebrow: "الجدول الرسمي",
    description:
      "جدول يومي للجلسات والندوات والأنشطة مع قابلية التحديث المستمر.",
    icon: "calendar",
    status: "awaiting-content",
    statusLabel: "بانتظار الاعتماد",
    capabilities: ["أيام المعرض", "التوقيت والمكان", "حالة الفعالية"],
  },
  {
    id: "gallery",
    href: "/ABTF2026/gallery",
    title: "معرض الصور",
    eyebrow: "التوثيق البصري",
    description: "ألبومات قابلة للنشر الدوري مع حفظ وصف الصورة وتاريخ إضافتها.",
    icon: "gallery",
    status: "configurable",
    statusLabel: "قابل للتحديث",
    capabilities: ["ألبومات يومية", "صور عالية الجودة", "وصف وتاريخ"],
  },
  {
    id: "advertising",
    href: "/ABTF2026/advertising",
    title: "الإعلانات داخل المنصة",
    eyebrow: "المساحات الإعلانية",
    description:
      "نظام مواضع إعلانية منظم وقابل للجدولة دون التأثير في وضوح المحتوى.",
    icon: "megaphone",
    status: "configurable",
    statusLabel: "جاهز للتفعيل",
    capabilities: ["مواضع محددة", "جدولة الظهور", "قياس النقرات لاحقًا"],
  },
  {
    id: "news",
    href: "/ABTF2026/news",
    title: "الأخبار",
    eyebrow: "المركز الإعلامي",
    description: "مساحة نشر منظمة لأخبار المعرض والبيانات والتحديثات الرسمية.",
    icon: "news",
    status: "ready-to-publish",
    statusLabel: "جاهز للنشر",
    capabilities: ["أرشيف زمني", "خبر مفرد", "صور ومرفقات"],
  },
  {
    id: "exhibitors",
    href: "/ABTF2026/exhibitors",
    title: "دليل العارضين",
    eyebrow: "الجهات المشاركة",
    description:
      "دليل قابل للبحث والتصنيف، يُحدّث عند اعتماد قوائم الجهات المشاركة.",
    icon: "exhibitors",
    status: "awaiting-content",
    statusLabel: "بانتظار البيانات",
    capabilities: ["بحث بالاسم", "تصنيف النشاط", "موقع الجناح"],
  },
  {
    id: "visitor-guide",
    href: "/ABTF2026/visitor-guide",
    title: "دليل الزائر",
    eyebrow: "الوصول داخل المعرض",
    description:
      "بحث عن الجهة وعرض المبنى والجناح والمسار عبر GPS بعد حقن المواقع.",
    icon: "wayfinding",
    status: "ready-to-connect",
    statusLabel: "جاهز للتهيئة",
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

export const programEntries: readonly ProgramEntry[] = [];
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
