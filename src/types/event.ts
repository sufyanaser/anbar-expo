export type ExhibitionEventStatus = "upcoming" | "active" | "completed";
export type EventVisualIdentity = "abtf2026" | "acdi26";

export type EventCardImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type ExhibitionEvent = {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  category: string;
  status: ExhibitionEventStatus;
  visualIdentity: EventVisualIdentity;
  href?: string;
  cardImage?: EventCardImage;
  startDate?: string;
  endDate?: string;
  location?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  featured?: boolean;
};
