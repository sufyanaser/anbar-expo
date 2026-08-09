import { defineField, defineType } from "sanity";

export const platformModuleType = defineType({
  name: "platformModule",
  title: "قسم رقمي",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "معرّف القسم",
      type: "string",
      options: {
        list: [
          "live",
          "program",
          "gallery",
          "advertising",
          "news",
          "exhibitors",
          "visitor-guide",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "اسم القسم",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "eyebrow", title: "التصنيف المختصر", type: "string" }),
    defineField({ name: "description", title: "الوصف", type: "text", rows: 3 }),
    defineField({
      name: "status",
      title: "الحالة",
      type: "string",
      options: {
        list: [
          { title: "جاهز للربط", value: "ready-to-connect" },
          { title: "بانتظار المحتوى", value: "awaiting-content" },
          { title: "جاهز للنشر", value: "ready-to-publish" },
          { title: "قابل للتهيئة", value: "configurable" },
        ],
      },
    }),
    defineField({ name: "statusLabel", title: "نص الحالة", type: "string" }),
    defineField({
      name: "capabilities",
      title: "الخصائص",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "قسم بارز",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "enabled",
      title: "ظاهر في الموقع",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      initialValue: 10,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "الترتيب",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "statusLabel" } },
});
