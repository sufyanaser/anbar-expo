export const siteConfig = {
  name: "الموقع قيد الإعداد",
  nameAr: "الموقع قيد الإعداد",
  institutionalNameEn: "Coming Soon",
  title: "الموقع قيد الإعداد",
  description: "سيتم الإعلان عن التفاصيل الرسمية في الوقت المناسب.",
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
