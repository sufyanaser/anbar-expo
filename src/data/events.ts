import type { ExhibitionEvent } from "@/types/event";

export const events: ExhibitionEvent[] = [
  {
    id: "anbar-book-technology-fair-2026",
    slug: "anbar-book-technology-fair-2026",
    titleAr: "معرض الأنبار للكتاب والتكنولوجيا",
    titleEn: "Anbar Book & Technology Fair",
    category: "الكتب والنشر · التكنولوجيا",
    status: "upcoming",
    descriptionAr:
      "فعالية متخصصة تجمع مجالي الكتاب والتكنولوجيا. ستُنشر التفاصيل الرسمية عند اعتمادها.",
    descriptionEn:
      "A specialized event focused on books and technology. Official details will be published once confirmed.",
    featured: true,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getFeaturedEvent() {
  return events.find((event) => event.featured);
}
