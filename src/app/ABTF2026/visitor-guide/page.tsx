import type { Metadata } from "next";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { VisitorWayfinder } from "@/components/abtf2026/platform/visitor-wayfinder";
import {
  exhibitorLocations,
  exhibitionBuildings,
  getPlatformModule,
} from "@/data/abtf-platform";

const platformModule = getPlatformModule("visitor-guide");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function VisitorGuidePage() {
  return (
    <PlatformPageShell module={platformModule}>
      <VisitorWayfinder
        exhibitors={exhibitorLocations}
        buildings={exhibitionBuildings}
      />
    </PlatformPageShell>
  );
}
