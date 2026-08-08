import type { Metadata } from "next";

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
      <footer className="bg-[#03283f] text-white">
        <div className="mx-auto flex w-[min(100%-2rem,80rem)] flex-col gap-4 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-latin font-black tracking-[0.18em]">
            {abtf2026.shortName}
          </p>
          <p>المعلومات المنشورة مطابقة للمادة الرسمية المرفقة للمعرض.</p>
        </div>
      </footer>
    </div>
  );
}
