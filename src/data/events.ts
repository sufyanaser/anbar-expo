import type { ExhibitionEvent } from "@/types/event";

export const events: ExhibitionEvent[] = [
  {
    id: "anbar-creativity-makers-award-2026",
    slug: "anbar-creativity-makers-award-2026",
    titleAr: "جائزة صنّاع الإبداع",
    titleEn: "Anbar Creativity Makers Award",
    category: "الإبداع · الجوائز والتكريم",
    status: "upcoming",
    visualIdentity: "acma26",
    href: "/ACMA26",
    cardImage: {
      src: "/brand/acma26/hero-panorama.webp",
      width: 1918,
      height: 820,
      alt: "جائزة صنّاع الإبداع 2026: الدرع والمخطوطة ومعالم الأنبار",
    },
    descriptionAr:
      "تعرّف على جائزة صنّاع الإبداع في الأنبار، وتفاصيل الدورة وإعلانات المشاركة.",
  },
  {
    id: "anbar-book-technology-fair-2026",
    slug: "anbar-book-technology-fair-2026",
    titleAr: "معرض الأنبار للكتاب والتكنولوجيا",
    titleEn: "Anbar Book & Technology Fair",
    category: "الكتب والنشر · التكنولوجيا",
    status: "upcoming",
    visualIdentity: "abtf2026",
    href: "/ABTF2026",
    cardImage: {
      src: "/brand/abtf2026/identity/abtf-home-cover.webp",
      width: 1920,
      height: 1049,
      alt: "هوية معرض الأنبار الدولي للكتاب والتكنولوجيا",
    },
    descriptionAr:
      "ملتقى ثقافي وتجاري يجمع الكتاب والتكنولوجيا والصناعات الإبداعية في مدينة الرمادي.",
    descriptionEn:
      "A cultural and commercial gathering for books, technology, and creative industries in Ramadi.",
    featured: true,
  },
  {
    id: "anbar-conference-dialogue-innovation-2026",
    slug: "anbar-conference-dialogue-innovation-2026",
    titleAr: "مؤتمر الأنبار للحوار والابتكار",
    titleEn: "Anbar Conference for Dialogue & Innovation",
    category: "الحوار التنموي · الابتكار",
    status: "upcoming",
    visualIdentity: "acdi26",
    href: "/ACDI26",
    descriptionAr:
      "منصة تنموية لتحويل الحوار إلى مبادرات قابلة للتنفيذ وشراكات ذات أثر قابل للقياس في محافظة الأنبار.",
    descriptionEn:
      "A development platform turning dialogue into actionable initiatives and measurable partnerships across Anbar.",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getFeaturedEvent() {
  return events.find((event) => event.featured);
}
