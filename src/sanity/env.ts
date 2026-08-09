export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-08-09",
} as const;

export const isSanityConfigured = Boolean(sanityEnv.projectId);

export const sanityStudioEnv = {
  projectId: sanityEnv.projectId || "00000000",
  dataset: sanityEnv.dataset,
} as const;
