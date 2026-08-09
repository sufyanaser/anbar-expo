import { defineCliConfig } from "sanity/cli";

import { sanityStudioEnv } from "./src/sanity/env";

export default defineCliConfig({
  api: {
    projectId: sanityStudioEnv.projectId,
    dataset: sanityStudioEnv.dataset,
  },
  studioHost: "abtf2026",
});
