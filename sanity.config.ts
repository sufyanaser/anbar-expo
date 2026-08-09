"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { sanityStudioEnv } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schema-types";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "abtf2026",
  title: "لوحة إدارة معرض الأنبار الدولي",
  basePath: "/admin",
  projectId: sanityStudioEnv.projectId,
  dataset: sanityStudioEnv.dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
  document: {
    actions: (previousActions, context) => {
      if (["eventSettings", "liveStream"].includes(context.schemaType)) {
        return previousActions.filter(
          (action) => !["delete", "duplicate"].includes(action.action ?? ""),
        );
      }
      return previousActions;
    },
  },
});
