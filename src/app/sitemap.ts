import type { MetadataRoute } from "next";

import { events } from "@/data/events";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/events",
    "/exhibitors",
    "/visitors",
    "/media",
    "/partners",
    "/about",
  ];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...events.map((event) => ({
      url: `${siteConfig.url}/events/${event.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
