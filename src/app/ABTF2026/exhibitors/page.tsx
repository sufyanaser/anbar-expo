import type { Metadata } from "next";

import { ExhibitorDirectory } from "@/components/abtf2026/platform/exhibitor-directory";
import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { exhibitorLocations, getPlatformModule } from "@/data/abtf-platform";

const platformModule = getPlatformModule("exhibitors");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function ExhibitorsPage() {
  return (
    <PlatformPageShell module={platformModule}>
      <ExhibitorDirectory exhibitors={exhibitorLocations} />
    </PlatformPageShell>
  );
}
