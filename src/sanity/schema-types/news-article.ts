import { defineArrayMember, defineField, defineType } from "sanity";

export const newsArticleType = defineType({
  name: "newsArticle",
  title: "خبر",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: "slug",
      title: "رابط الخبر",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "الملخص",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "mainImage",
      title: "الصورة الرئيسية",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "النص البديل",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "body",
      title: "نص الخبر",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "النص البديل", type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "تاريخ النشر",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "خبر بارز",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "الأحدث",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "mainImage" },
  },
});
