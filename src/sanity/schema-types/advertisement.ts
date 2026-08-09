import { defineField, defineType } from "sanity";

export const advertisementType = defineType({
  name: "advertisement",
  title: "إعلان",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "اسم الحملة",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "advertiser",
      title: "المعلن",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "placement",
      title: "موضع الظهور",
      type: "string",
      options: {
        list: [
          { title: "الشريط الرئيسي", value: "platform-banner" },
          { title: "داخل القسم", value: "section-inline" },
          { title: "بطاقة راعٍ", value: "directory-card" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "creative",
      title: "تصميم الإعلان",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "النص البديل",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "targetUrl", title: "رابط الإعلان", type: "url" }),
    defineField({ name: "startsAt", title: "بداية الحملة", type: "datetime" }),
    defineField({ name: "endsAt", title: "نهاية الحملة", type: "datetime" }),
    defineField({
      name: "enabled",
      title: "الحملة فعالة",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "advertiser", media: "creative" },
  },
});
