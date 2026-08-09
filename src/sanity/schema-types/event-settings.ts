import { defineField, defineType } from "sanity";

export const eventSettingsType = defineType({
  name: "eventSettings",
  title: "إعدادات المعرض",
  type: "document",
  fields: [
    defineField({
      name: "shortName",
      title: "الاسم المختصر",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "الاسم العربي",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "titleEn", title: "الاسم الإنجليزي", type: "string" }),
    defineField({
      name: "description",
      title: "وصف المنصة",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "openingAt",
      title: "موعد الافتتاح",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "closingAt",
      title: "موعد الاختتام",
      type: "datetime",
    }),
    defineField({ name: "venue", title: "الموقع", type: "string" }),
    defineField({
      name: "buildingCount",
      title: "عدد البنايات",
      type: "number",
      initialValue: 4,
      validation: (rule) => rule.integer().min(1),
    }),
    defineField({
      name: "heroImage",
      title: "صورة الواجهة",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "النص البديل", type: "string" }],
    }),
    defineField({
      name: "eventMark",
      title: "شعار المعرض",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactEmail",
      title: "البريد الإلكتروني",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({ name: "contactPhone", title: "رقم الهاتف", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "إعدادات معرض ABTF 2026" }) },
});
