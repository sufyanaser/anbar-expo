import type { Metadata } from "next";

import { EventHero } from "@/components/abtf2026/event-hero";
import { OfficialPartners } from "@/components/abtf2026/official-partners";
import { PlatformDirectory } from "@/components/abtf2026/platform-directory";
import { abtf2026 } from "@/data/abtf2026";

export const metadata: Metadata = {
  title: { absolute: "ABTF 2026" },
  description: abtf2026.titleAr,
  alternates: { canonical: "/ABTF2026" },
  robots: { index: false, follow: false, nocache: true },
};

export default function Abtf2026Page() {
  return (
    <>
      <EventHero />
      <PlatformDirectory />
      <OfficialPartners />
    </>
  );
}
