import type { Metadata } from "next";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { VisitorWayfinder } from "@/components/abtf2026/platform/visitor-wayfinder";
import { exhibitionBuildings, getPlatformModule } from "@/data/abtf-platform";
import { getExhibitors } from "@/sanity/content";

const platformModule = getPlatformModule("visitor-guide");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default async function VisitorGuidePage() {
  const exhibitorLocations = await getExhibitors();

  return (
    <PlatformPageShell module={platformModule}>
      <VisitorWayfinder
        exhibitors={exhibitorLocations}
        buildings={exhibitionBuildings}
      />
    </PlatformPageShell>
  );
}
