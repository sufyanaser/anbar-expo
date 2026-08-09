import { defineField, defineType } from "sanity";

export const liveStreamType = defineType({
  name: "liveStream",
  title: "إعدادات البث المباشر",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "اسم القناة أو البث",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "حالة البث",
      type: "string",
      initialValue: "offline",
      options: {
        list: [
          { title: "غير متصل", value: "offline" },
          { title: "قريباً", value: "upcoming" },
          { title: "مباشر الآن", value: "live" },
          { title: "انتهى", value: "ended" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sourceType",
      title: "نوع المصدر",
      type: "string",
      initialValue: "hls",
      options: {
        list: [
          { title: "HLS", value: "hls" },
          { title: "ملف فيديو", value: "video" },
          { title: "YouTube", value: "youtube" },
        ],
      },
    }),
    defineField({ name: "sourceUrl", title: "رابط مصدر البث", type: "url" }),
    defineField({
      name: "poster",
      title: "صورة ما قبل البث",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "startsAt", title: "موعد بدء البث", type: "datetime" }),
    defineField({
      name: "currentProgram",
      title: "البرنامج الجاري",
      type: "string",
    }),
  ],
  preview: { select: { title: "title", subtitle: "status", media: "poster" } },
});
