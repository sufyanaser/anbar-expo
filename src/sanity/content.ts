import "server-only";

import type { PortableTextBlock } from "@portabletext/types";
import { createClient } from "@sanity/client";

import {
  advertisingPlacements as fallbackAdvertisingPlacements,
  exhibitorLocations as fallbackExhibitors,
  galleryEntries as fallbackGalleryEntries,
  liveStreamConfig as fallbackLiveStream,
  newsEntries as fallbackNewsEntries,
  platformModules as fallbackPlatformModules,
  programEntries as fallbackProgramEntries,
} from "@/data/abtf-platform";
import {
  participationFaqPageFallback,
  type ParticipationFaqDisplayStyle,
  type ParticipationFaqStatus,
} from "@/data/abtf-participation-faq";
import { abtf2026 } from "@/data/abtf2026";
import { isSanityConfigured, sanityEnv } from "@/sanity/env";
import type {
  AdvertisingPlacement,
  ExhibitorLocation,
  GalleryEntry,
  LiveStreamConfig,
  NewsEntry,
  PlatformModule,
  ProgramEntry,
} from "@/types/abtf-platform";

const client = isSanityConfigured
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      token: process.env.SANITY_API_READ_TOKEN,
      useCdn: !process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;

export type ManagedEventSettings = {
  shortName: string;
  titleAr: string;
  titleEn: string;
  description: string;
  opening: {
    label: string;
    date: string;
    time: string;
    dateTime: string;
  };
  closingAt?: string;
  venue: string;
  buildingCount: number;
  heroImage: string;
  eventMark: string;
};

export type ManagedOfficialEntity = {
  role: string;
  label: string;
  name: string;
  detail: string;
  href: string | null;
  mark: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type ManagedPartnerMark = {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string | null;
};

export type ManagedPage = {
  title: string;
  intro?: string;
  logo?: string;
  coverImage?: string;
  body?: PortableTextBlock[];
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
};

export type ManagedParticipationFaqItem = {
  id: string;
  question: string;
  status: ParticipationFaqStatus;
  statusLabel: string;
  answer: readonly string[] | PortableTextBlock[];
  highlights?: readonly string[];
  note?: string;
};

export type ManagedParticipationFaqPage = {
  eyebrow: string;
  title: string;
  intro: string;
  displayStyle: ParticipationFaqDisplayStyle;
  showStatusLegend: boolean;
  showHighlights: boolean;
  showNotes: boolean;
  legendDescription: string;
  heroFacts: readonly { id: string; label: string; value: string }[];
  quickAccess: {
    enabled: boolean;
    eyebrow: string;
    badgeLabel?: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  questions: readonly ManagedParticipationFaqItem[];
};

async function fetchPublished<T>(
  query: string,
  tag: string,
  params: Record<string, string | number | boolean> = {},
): Promise<T | null> {
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: [tag] },
    });
  } catch (error) {
    console.error(`[ABTF CMS] Failed to load ${tag}`, error);
    return null;
  }
}

function baghdadParts(value: string) {
  const date = new Date(value);
  const dateParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Baghdad",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    dateParts.find((item) => item.type === type)?.value ?? "";
  const localDate = `${part("year")}-${part("month")}-${part("day")}`;
  const localTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Baghdad",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return { localDate, localTime };
}

function formatOpening(value: string) {
  const date = new Date(value);
  const parts = baghdadParts(value);
  const [year, month, day] = parts.localDate.split("-");
  const time = new Intl.DateTimeFormat("ar-IQ", {
    timeZone: "Asia/Baghdad",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return {
    label: "الافتتاح",
    date: `${day} / ${month} / ${year}`,
    time,
    dateTime: value,
  };
}

type SanityEventSettings = {
  shortName?: string;
  titleAr?: string;
  titleEn?: string;
  description?: string;
  openingAt?: string;
  closingAt?: string;
  venue?: string;
  buildingCount?: number;
  heroImage?: string;
  eventMark?: string;
};

export async function getEventSettings(): Promise<ManagedEventSettings> {
  const settings = await fetchPublished<SanityEventSettings | null>(
    `*[_type == "eventSettings"][0] {
      shortName, titleAr, titleEn, description, openingAt, closingAt, venue,
      buildingCount,
      "heroImage": heroImage.asset->url,
      "eventMark": eventMark.asset->url
    }`,
    "eventSettings",
  );

  return {
    shortName: settings?.shortName || abtf2026.shortName,
    titleAr: settings?.titleAr || abtf2026.titleAr,
    titleEn: settings?.titleEn || abtf2026.titleEn,
    description:
      settings?.description ||
      "بوابة المعرض الرقمية للأخبار والفعاليات والجهات المشاركة، مع خدمات متكاملة تساعد الزائر على استكشاف تجربة المعرض في مدينة الرمادي.",
    opening: settings?.openingAt
      ? formatOpening(settings.openingAt)
      : abtf2026.opening,
    closingAt: settings?.closingAt,
    venue: settings?.venue || "مدينة الرمادي · محافظة الأنبار",
    buildingCount: settings?.buildingCount || 4,
    heroImage: settings?.heroImage || abtf2026.heroImage,
    eventMark: settings?.eventMark || abtf2026.eventMark,
  };
}

type SanityOfficialEntity = Omit<ManagedOfficialEntity, "href" | "mark"> & {
  href?: string;
  logo?: string;
  logoAlt?: string;
};

export async function getOfficialEntities(): Promise<
  readonly ManagedOfficialEntity[]
> {
  const entities = await fetchPublished<SanityOfficialEntity[]>(
    `*[_type == "officialEntity" && enabled == true] | order(order asc) {
      role, label, name, detail, "href": link,
      "logo": logo.asset->url,
      "logoAlt": logo.alt
    }`,
    "officialEntity",
  );
  if (!entities?.length) {
    return abtf2026.officialEntities.map((entity) => ({
      role: entity.label,
      label: entity.label,
      name: entity.name,
      detail: entity.detail,
      href: entity.href,
      mark: entity.mark,
    }));
  }

  return entities.map((entity) => ({
    role: entity.role,
    label: entity.label,
    name: entity.name,
    detail: entity.detail || "",
    href: entity.href || null,
    mark: {
      src: entity.logo || abtf2026.eventMark,
      width: 800,
      height: 800,
      alt: entity.logoAlt || `شعار ${entity.name}`,
    },
  }));
}

type SanityPartner = {
  name: string;
  logo?: string;
  link?: string;
};

export async function getPartnerMarks(): Promise<
  readonly ManagedPartnerMark[]
> {
  const partners = await fetchPublished<SanityPartner[]>(
    `*[_type == "partner" && enabled == true] | order(order asc) {
      name, "logo": logo.asset->url, "link": link
    }`,
    "partner",
  );
  if (!partners?.length) return abtf2026.partnerMarks;

  return partners
    .filter((partner) => partner.logo)
    .map((partner) => ({
      src: partner.logo as string,
      width: 800,
      height: 800,
      alt: partner.name,
      href: partner.link || null,
    }));
}

type SanityPlatformModule = Omit<PlatformModule, "id" | "href" | "icon"> & {
  key: string;
};

export async function getPlatformModules(): Promise<readonly PlatformModule[]> {
  const modules = await fetchPublished<SanityPlatformModule[]>(
    `*[_type == "platformModule" && enabled == true] | order(order asc) {
      key, title, eyebrow, description, status, statusLabel, capabilities,
      featured
    }`,
    "platformModule",
  );
  if (!modules?.length) return fallbackPlatformModules;

  return modules.flatMap((module) => {
    const fallback = fallbackPlatformModules.find(
      (item) => item.id === module.key,
    );
    if (!fallback) return [];

    return [
      {
        ...fallback,
        title: module.title || fallback.title,
        eyebrow: module.eyebrow || fallback.eyebrow,
        description: module.description || fallback.description,
        status: module.status || fallback.status,
        statusLabel: module.statusLabel || fallback.statusLabel,
        capabilities: module.capabilities?.length
          ? module.capabilities
          : fallback.capabilities,
        featured: module.featured ?? fallback.featured,
      },
    ];
  });
}

type SanityProgramEntry = {
  _id: string;
  title: string;
  startsAt: string;
  endsAt?: string;
  location?: string;
  speaker?: string;
  status?: ProgramEntry["status"];
};

export async function getProgramEntries(): Promise<readonly ProgramEntry[]> {
  const entries = await fetchPublished<SanityProgramEntry[]>(
    `*[_type == "programEntry" && enabled == true] | order(startsAt asc) {
      _id, title, startsAt, endsAt, location, speaker, status
    }`,
    "programEntry",
  );
  if (!entries) return fallbackProgramEntries;

  return entries.map((entry) => {
    const start = baghdadParts(entry.startsAt);
    const end = entry.endsAt ? baghdadParts(entry.endsAt) : null;
    return {
      id: entry._id,
      title: entry.title,
      date: start.localDate,
      startsAt: start.localTime,
      endsAt: end?.localTime,
      location: entry.location,
      speaker: entry.speaker,
      status: entry.status ?? "scheduled",
    };
  });
}

export async function getNewsEntries(): Promise<readonly NewsEntry[]> {
  const entries = await fetchPublished<NewsEntry[]>(
    `*[_type == "newsArticle" && defined(slug.current)] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      summary,
      publishedAt,
      "image": mainImage.asset->url,
      "imageAlt": mainImage.alt,
      body
    }`,
    "newsArticle",
  );
  return entries ?? fallbackNewsEntries;
}

export async function getNewsEntry(slug: string): Promise<NewsEntry | null> {
  const entry = await fetchPublished<NewsEntry | null>(
    `*[_type == "newsArticle" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      summary,
      publishedAt,
      "image": mainImage.asset->url,
      "imageAlt": mainImage.alt,
      body
    }`,
    "newsArticle",
    { slug },
  );
  if (entry) return entry;
  return fallbackNewsEntries.find((item) => item.slug === slug) ?? null;
}

type SanityExhibitor = Omit<ExhibitorLocation, "id" | "coordinates"> & {
  _id: string;
  coordinates?: { lat: number; lng: number };
};

export async function getExhibitors(): Promise<readonly ExhibitorLocation[]> {
  const entries = await fetchPublished<SanityExhibitor[]>(
    `*[_type == "exhibitor" && enabled == true] | order(name asc) {
      _id, name, category, building, booth, floor, coordinates
    }`,
    "exhibitor",
  );
  if (!entries) return fallbackExhibitors;

  return entries.map((entry) => ({
    id: entry._id,
    name: entry.name,
    category: entry.category,
    building: entry.building,
    booth: entry.booth,
    floor: entry.floor,
    coordinates: entry.coordinates
      ? { latitude: entry.coordinates.lat, longitude: entry.coordinates.lng }
      : undefined,
  }));
}

export async function getGalleryEntries(): Promise<readonly GalleryEntry[]> {
  const entries = await fetchPublished<GalleryEntry[]>(
    `*[_type == "galleryItem" && enabled == true] | order(order asc, capturedAt desc) {
      "id": _id, title, "image": image.asset->url, alt, capturedAt
    }`,
    "galleryItem",
  );
  return entries?.length ? entries : fallbackGalleryEntries;
}

export async function getAdvertisingPlacements(): Promise<
  readonly AdvertisingPlacement[]
> {
  const entries = await fetchPublished<AdvertisingPlacement[]>(
    `*[_type == "advertisement" && enabled == true &&
      (!defined(startsAt) || startsAt <= now()) &&
      (!defined(endsAt) || endsAt >= now())] | order(_createdAt desc) {
      "id": _id,
      title,
      advertiser,
      "ratio": select(placement == "directory-card" => "مربع", "أفقي"),
      "location": placement,
      "image": creative.asset->url,
      alt,
      targetUrl
    }`,
    "advertisement",
  );
  return entries?.length ? entries : fallbackAdvertisingPlacements;
}

export async function getLiveStream(): Promise<LiveStreamConfig> {
  const stream = await fetchPublished<LiveStreamConfig | null>(
    `*[_type == "liveStream"][0] {
      title,
      status,
      sourceType,
      sourceUrl,
      "poster": poster.asset->url,
      currentProgram
    }`,
    "liveStream",
  );

  return stream
    ? { ...stream, poster: stream.poster || fallbackLiveStream.poster }
    : { ...fallbackLiveStream, status: "offline" };
}

export async function getManagedPage(
  slug: string,
): Promise<ManagedPage | null> {
  return fetchPublished<ManagedPage | null>(
    `*[_type == "managedPage" && slug.current == $slug && enabled == true][0] {
      title,
      intro,
      "logo": logo.asset->url,
      "coverImage": coverImage.asset->url,
      body,
      contactEmail,
      contactPhone,
      website
    }`,
    "managedPage",
    { slug },
  );
}

type SanityParticipationFaqPage = Partial<
  Omit<ManagedParticipationFaqPage, "heroFacts" | "questions">
> & {
  heroFacts?: { _key: string; label?: string; value?: string }[];
  questions?: {
    _key: string;
    question?: string;
    status?: ParticipationFaqStatus;
    statusLabel?: string;
    answer?: PortableTextBlock[];
    highlights?: string[];
    note?: string;
  }[];
};

export async function getParticipationFaqPage(): Promise<ManagedParticipationFaqPage> {
  const settings = await fetchPublished<SanityParticipationFaqPage | null>(
    `*[_type == "participationFaqPage"][0] {
      eyebrow,
      title,
      intro,
      displayStyle,
      showStatusLegend,
      showHighlights,
      showNotes,
      legendDescription,
      heroFacts[] { _key, label, value },
      quickAccess {
        enabled, eyebrow, badgeLabel, title, description, buttonLabel
      },
      cta { eyebrow, title, description, buttonLabel, buttonHref },
      "questions": questions[enabled != false] {
        _key, question, status, statusLabel, answer, highlights, note
      }
    }`,
    "participationFaqPage",
  );

  const fallback = participationFaqPageFallback;
  const displayStyle = ["cards", "accordion", "compact"].includes(
    settings?.displayStyle ?? "",
  )
    ? (settings?.displayStyle as ParticipationFaqDisplayStyle)
    : fallback.displayStyle;

  const heroFacts = settings?.heroFacts
    ?.filter((fact) => fact.label && fact.value)
    .map((fact) => ({
      id: fact._key,
      label: fact.label as string,
      value: fact.value as string,
    }));

  const questions = settings?.questions
    ?.filter(
      (entry) =>
        entry.question &&
        entry.status &&
        entry.statusLabel &&
        entry.answer?.length,
    )
    .map((entry) => ({
      id: entry._key,
      question: entry.question as string,
      status: entry.status as ParticipationFaqStatus,
      statusLabel: entry.statusLabel as string,
      answer: entry.answer as PortableTextBlock[],
      highlights: entry.highlights,
      note: entry.note,
    }));

  return {
    eyebrow: settings?.eyebrow || fallback.eyebrow,
    title: settings?.title || fallback.title,
    intro: settings?.intro || fallback.intro,
    displayStyle,
    showStatusLegend: settings?.showStatusLegend ?? fallback.showStatusLegend,
    showHighlights: settings?.showHighlights ?? fallback.showHighlights,
    showNotes: settings?.showNotes ?? fallback.showNotes,
    legendDescription:
      settings?.legendDescription || fallback.legendDescription,
    heroFacts: heroFacts?.length
      ? heroFacts
      : fallback.heroFacts.map((fact, index) => ({
          ...fact,
          id: `fallback-fact-${index + 1}`,
        })),
    quickAccess: {
      enabled: settings?.quickAccess?.enabled ?? fallback.quickAccess.enabled,
      eyebrow: settings?.quickAccess?.eyebrow || fallback.quickAccess.eyebrow,
      badgeLabel:
        settings?.quickAccess?.badgeLabel || fallback.quickAccess.badgeLabel,
      title: settings?.quickAccess?.title || fallback.quickAccess.title,
      description:
        settings?.quickAccess?.description || fallback.quickAccess.description,
      buttonLabel:
        settings?.quickAccess?.buttonLabel || fallback.quickAccess.buttonLabel,
    },
    cta: {
      eyebrow: settings?.cta?.eyebrow || fallback.cta.eyebrow,
      title: settings?.cta?.title || fallback.cta.title,
      description: settings?.cta?.description || fallback.cta.description,
      buttonLabel: settings?.cta?.buttonLabel || fallback.cta.buttonLabel,
      buttonHref: settings?.cta?.buttonHref || fallback.cta.buttonHref,
    },
    questions: questions?.length ? questions : fallback.questions,
  };
}
