export type PlatformModuleIcon =
  | "broadcast"
  | "calendar"
  | "gallery"
  | "megaphone"
  | "news"
  | "exhibitors"
  | "wayfinding";

export type PlatformModuleStatus =
  "ready-to-connect" | "awaiting-content" | "ready-to-publish" | "configurable";

export interface PlatformModule {
  id: string;
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: PlatformModuleIcon;
  status: PlatformModuleStatus;
  statusLabel: string;
  capabilities: readonly string[];
  featured?: boolean;
}

export interface ExhibitorLocation {
  id: string;
  name: string;
  category: string;
  building: 1 | 2 | 3 | 4;
  booth?: string;
  floor?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface ProgramEntry {
  id: string;
  title: string;
  date: string;
  startsAt: string;
  endsAt?: string;
  location?: string;
  speaker?: string;
  status: "scheduled" | "live" | "completed";
}

export interface NewsEntry {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  imageAlt?: string;
  body?: readonly PortableTextBlock[];
}

export interface GalleryEntry {
  id: string;
  title: string;
  image: string;
  alt: string;
  capturedAt?: string;
}

export interface AdvertisingPlacement {
  id: string;
  title: string;
  ratio: string;
  location: string;
  advertiser?: string;
  image?: string;
  alt?: string;
  targetUrl?: string;
}

export interface LiveStreamConfig {
  title: string;
  status: "offline" | "upcoming" | "live" | "ended";
  sourceUrl: string | null;
  sourceType: "hls" | "video" | "youtube";
  poster: string;
  currentProgram?: string;
}
import type { PortableTextBlock } from "@portabletext/types";
