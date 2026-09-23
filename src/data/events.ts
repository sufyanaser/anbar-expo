import type { ExhibitionEvent } from "@/types/event";

export const events: ExhibitionEvent[] = [
  {
    id: "anbar-book-technology-fair-2026",
    slug: "anbar-book-technology-fair-2026",
    titleAr: "معرض الأنبار للكتاب والتكنولوجيا",
    titleEn: "Anbar Book & Technology Fair",
    category: "الكتب والنشر · التكنولوجيا",
    status: "upcoming",
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
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getFeaturedEvent() {
  return events.find((event) => event.featured);
}
