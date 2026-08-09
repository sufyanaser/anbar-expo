import type { Metadata } from "next";

import { ExhibitorDirectory } from "@/components/abtf2026/platform/exhibitor-directory";
import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule } from "@/data/abtf-platform";
import { getExhibitors } from "@/sanity/content";

const platformModule = getPlatformModule("exhibitors");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default async function ExhibitorsPage() {
  const exhibitorLocations = await getExhibitors();

  return (
    <PlatformPageShell module={platformModule}>
      <ExhibitorDirectory exhibitors={exhibitorLocations} />
    </PlatformPageShell>
  );
}
