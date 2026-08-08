export const siteConfig = {
  name: "ANBAR EXPO",
  nameAr: "معرض الأنبار الدولي",
  institutionalNameEn: "Anbar International Fair",
  title: "ANBAR EXPO | معرض الأنبار الدولي",
  description:
    "المنصة الرسمية للمعارض والفعاليات الدولية في الأنبار، والمظلة الرقمية للمعارض المتخصصة ودوراتها المتعددة.",
  url: "https://anbarexpo.com",
} as const;

export const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/events", label: "المعارض" },
  { href: "/exhibitors", label: "العارضون" },
  { href: "/visitors", label: "الزوار" },
  { href: "/media", label: "المركز الإعلامي" },
  { href: "/partners", label: "الشركاء" },
  { href: "/about", label: "عن المنصة" },
] as const;

export const exhibitionCategories = [
  { ar: "الكتب والنشر", en: "Books & Publishing" },
  { ar: "التكنولوجيا", en: "Technology" },
  { ar: "الصناعة", en: "Industry" },
  { ar: "الزراعة", en: "Agriculture" },
  { ar: "السيارات", en: "Automotive" },
  { ar: "التجارة", en: "Trade" },
  { ar: "الثقافة", en: "Culture" },
  { ar: "المعارض المتخصصة", en: "Specialized Exhibitions" },
] as const;
