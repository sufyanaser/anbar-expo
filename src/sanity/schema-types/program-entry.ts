import { defineField, defineType } from "sanity";

export const programEntryType = defineType({
  name: "programEntry",
  title: "فعالية",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان الفعالية",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startsAt",
      title: "وقت البدء",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "endsAt", title: "وقت الانتهاء", type: "datetime" }),
    defineField({
      name: "location",
      title: "المكان أو القاعة",
      type: "string",
    }),
    defineField({ name: "speaker", title: "المتحدث أو الجهة", type: "string" }),
    defineField({ name: "summary", title: "نبذة", type: "text", rows: 3 }),
    defineField({
      name: "status",
      title: "الحالة",
      type: "string",
      initialValue: "scheduled",
      options: {
        list: [
          { title: "مجدولة", value: "scheduled" },
          { title: "مباشرة الآن", value: "live" },
          { title: "منتهية", value: "completed" },
        ],
      },
    }),
    defineField({
      name: "enabled",
      title: "منشورة في البرنامج",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "الأقرب أولاً",
      name: "startsAtAsc",
      by: [{ field: "startsAt", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "location" } },
});
