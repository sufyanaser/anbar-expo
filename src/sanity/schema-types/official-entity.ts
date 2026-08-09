import { defineField, defineType } from "sanity";

export const officialEntityType = defineType({
  name: "officialEntity",
  title: "جهة رسمية",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "صفة الجهة",
      type: "string",
      options: {
        list: [
          { title: "برعاية", value: "patronage" },
          { title: "إشراف", value: "supervision" },
          { title: "تنظيم", value: "organization" },
          { title: "راعٍ إعلامي", value: "mediaSponsor" },
          { title: "بالتزامن مع", value: "concurrent" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "عنوان البطاقة",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "اسم الجهة أو الشخص",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "detail", title: "التفاصيل", type: "string" }),
    defineField({
      name: "logo",
      title: "الشعار",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "النص البديل", type: "string" }],
    }),
    defineField({
      name: "link",
      title: "رابط التفاصيل",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      initialValue: 10,
      validation: (rule) => rule.integer().min(0),
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
  preview: { select: { title: "name", subtitle: "label", media: "logo" } },
});
