import { events } from "@/data/events";
import type { EventCardImage } from "@/types/event";

/**
 * Homepage events directory.
 * - Active entries resolve href + image from `events.ts` (single source of truth).
 * - Concept entries are unannounced placeholders: no href, no dates, no registration.
 */

export type DirectoryVisual =
  | { kind: "image"; image: EventCardImage }
  | { kind: "acdi" }
  | { kind: "concept"; motif: "energy" | "heritage" | "startup" | "city" };

export type DirectoryEvent = {
  id: string;
  state: "active" | "concept";
  titleAr: string;
  titleEn: string;
  category: string;
  description: string;
  href?: string;
  visual: DirectoryVisual;
};

const byId = (id: string) => events.find((event) => event.id === id);

const abtf = byId("anbar-book-technology-fair-2026");
const acdi = events.find((event) => event.visualIdentity === "acdi26");

export const statusLabel: Record<DirectoryEvent["state"], string> = {
  active: "فعالية حالية",
  concept: "قريباً",
};

export const directoryEvents: DirectoryEvent[] = [
  {
    id: "abtf2026",
    state: "active",
    titleAr: "معرض الأنبار الدولي للكتاب والتكنولوجيا",
    titleEn: "Anbar International Book & Technology Fair",
    category: abtf?.category ?? "الكتب والنشر · التكنولوجيا",
    description:
      "ملتقى يجمع الكتاب والتكنولوجيا والصناعات الإبداعية في مدينة الرمادي.",
    href: abtf?.href ?? "/ABTF2026",
    visual: abtf?.cardImage
      ? { kind: "image", image: abtf.cardImage }
      : { kind: "concept", motif: "city" },
  },
  {
    id: "acdi26",
    state: "active",
    titleAr: "مؤتمر الأنبار للحوار والابتكار",
    titleEn: "Anbar Conference for Dialogue & Innovation",
    category: acdi?.category ?? "الحوار التنموي · الابتكار",
    description:
      "منصة تجمع الحوار وتبادل الأفكار والابتكار واستكشاف فرص التنمية والتعاون.",
    href: acdi?.href ?? "/ACDI26",
    visual: acdi?.cardImage
      ? { kind: "image", image: acdi.cardImage }
      : { kind: "acdi" },
  },
  {
    id: "renewable-energy-expo",
    state: "concept",
    titleAr: "معرض الأنبار للطاقة المتجددة",
    titleEn: "Anbar Renewable Energy Expo",
    category: "الطاقة والاستدامة",
    description:
      "حلول الطاقة النظيفة والتقنيات الحديثة وفرص الاستثمار في الاستدامة.",
    visual: { kind: "concept", motif: "energy" },
  },
  {
    id: "heritage-folklore-festival",
    state: "concept",
    titleAr: "مهرجان الأنبار للتراث والفولكلور",
    titleEn: "Anbar Heritage & Folklore Festival",
    category: "الثقافة والتراث",
    description:
      "إحياء الموروث الأنباري الأصيل والحرف التقليدية والفنون الشعبية والهوية الثقافية.",
    visual: { kind: "concept", motif: "heritage" },
  },
  {
    id: "entrepreneurship-forum",
    state: "concept",
    titleAr: "منتدى الأنبار لريادة الأعمال",
    titleEn: "Anbar Entrepreneurship Forum",
    category: "ريادة الأعمال",
    description:
      "منصة للأفكار الناشئة والمشاريع الريادية والابتكار والاقتصاد الرقمي.",
    visual: { kind: "concept", motif: "startup" },
  },
  {
    id: "smart-cities-forum",
    state: "concept",
    titleAr: "ملتقى الأنبار للمدن الذكية",
    titleEn: "Anbar Smart Cities Forum",
    category: "المدن الذكية",
    description:
      "التخطيط الحضري والتحول الرقمي والبنية التحتية والتنمية المستدامة.",
    visual: { kind: "concept", motif: "city" },
  },
];
