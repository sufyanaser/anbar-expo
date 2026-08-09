import { defineField, defineType } from "sanity";

export const galleryItemType = defineType({
  name: "galleryItem",
  title: "صورة",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "الصورة",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "وصف الصورة لذوي الإعاقة البصرية",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "album", title: "الألبوم", type: "string" }),
    defineField({
      name: "capturedAt",
      title: "تاريخ الالتقاط",
      type: "datetime",
    }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "enabled",
      title: "منشورة",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "الترتيب",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "album", media: "image" } },
});
