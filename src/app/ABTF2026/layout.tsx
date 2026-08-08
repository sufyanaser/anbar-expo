import type { Metadata } from "next";

import { EventFooter } from "@/components/abtf2026/event-footer";
import { EventHeader } from "@/components/abtf2026/event-header";
import { abtf2026 } from "@/data/abtf2026";

export const metadata: Metadata = {
  title: {
    default: "ABTF 2026",
    template: "%s | ABTF 2026",
  },
  description: abtf2026.titleAr,
  robots: { index: false, follow: false, nocache: true },
};

export default function Abtf2026Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div id="top" className="min-h-screen bg-white text-[#14242b]">
      <EventHeader />
      {children}
      <EventFooter />
    </div>
  );
}
