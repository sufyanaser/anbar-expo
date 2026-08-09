import { defineField, defineType } from "sanity";

export const exhibitorType = defineType({
  name: "exhibitor",
  title: "عارض أو جهة مشاركة",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "اسم العارض",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "الرابط",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "التصنيف",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "نبذة", type: "text", rows: 4 }),
    defineField({
      name: "logo",
      title: "الشعار",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "building",
      title: "رقم البناية",
      type: "number",
      options: { list: [1, 2, 3, 4] },
      validation: (rule) => rule.required().integer().min(1).max(4),
    }),
    defineField({ name: "booth", title: "رقم الجناح", type: "string" }),
    defineField({ name: "floor", title: "الطابق", type: "string" }),
    defineField({
      name: "coordinates",
      title: "إحداثيات الموقع",
      type: "geopoint",
    }),
    defineField({ name: "website", title: "الموقع الإلكتروني", type: "url" }),
    defineField({ name: "phone", title: "الهاتف", type: "string" }),
    defineField({
      name: "enabled",
      title: "ظاهر في الدليل",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "أبجدياً",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: { select: { title: "name", subtitle: "category", media: "logo" } },
});
