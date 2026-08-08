import type { Metadata } from "next";

import { EventFooter } from "@/components/abtf2026/event-footer";
import { EventHeader } from "@/components/abtf2026/event-header";
import { EventHero } from "@/components/abtf2026/event-hero";
import { OfficialPartners } from "@/components/abtf2026/official-partners";
import { PlatformRoadmap } from "@/components/abtf2026/platform-roadmap";
import { abtf2026 } from "@/data/abtf2026";

export const metadata: Metadata = {
  title: "ABTF 2026",
  description: abtf2026.titleAr,
  alternates: { canonical: "/ABTF2026" },
  robots: { index: false, follow: false, nocache: true },
};

export default function Abtf2026Page() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#14242b]">
      <EventHeader />
      <EventHero />
      <OfficialPartners />
      <PlatformRoadmap />
      <EventFooter />
    </div>
  );
}
