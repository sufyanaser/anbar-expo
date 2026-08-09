import { defineArrayMember, defineField, defineType } from "sanity";

export const managedPageType = defineType({
  name: "managedPage",
  title: "صفحة تعريفية",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان الصفحة",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "الرابط",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "intro", title: "المقدمة", type: "text", rows: 4 }),
    defineField({
      name: "logo",
      title: "الشعار",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImage",
      title: "صورة الغلاف",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "المحتوى",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "البريد الإلكتروني",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({ name: "contactPhone", title: "رقم الهاتف", type: "string" }),
    defineField({ name: "website", title: "الموقع الإلكتروني", type: "url" }),
    defineField({
      name: "enabled",
      title: "منشورة",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "logo" },
  },
});
