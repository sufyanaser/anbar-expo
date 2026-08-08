export type ExhibitionEventStatus = "upcoming" | "active" | "completed";

export type ExhibitionEvent = {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  category: string;
  status: ExhibitionEventStatus;
  startDate?: string;
  endDate?: string;
  location?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  featured?: boolean;
};
