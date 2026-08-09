import { defineField, defineType } from "sanity";

export const partnerType = defineType({
  name: "partner",
  title: "شريك أو مؤسسة",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "اسم الجهة",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "الشعار",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "link", title: "رابط الجهة", type: "url" }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "enabled",
      title: "ظاهر في الموقع",
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
  preview: { select: { title: "name", media: "logo" } },
});
