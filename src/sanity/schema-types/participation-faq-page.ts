import { defineArrayMember, defineField, defineType } from "sanity";

const requiredText = (name: string, title: string, rows = 3) =>
  defineField({
    name,
    title,
    type: "text",
    rows,
    validation: (rule) => rule.required(),
  });

export const participationFaqPageType = defineType({
  name: "participationFaqPage",
  title: "أسئلة المشاركة التجارية",
  type: "document",
  groups: [
    { name: "page", title: "واجهة الصفحة", default: true },
    { name: "questions", title: "الأسئلة والأجوبة" },
    { name: "display", title: "أسلوب العرض" },
    { name: "quickAccess", title: "الوصول السريع" },
    { name: "cta", title: "دعوة التواصل" },
  ],
  fields: [
    defineField({
      name: "eyebrow",
      title: "التصنيف المختصر",
      type: "string",
      group: "page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "عنوان الصفحة",
      type: "string",
      group: "page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "مقدمة الصفحة",
      type: "text",
      rows: 4,
      group: "page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroFacts",
      title: "بطاقات المعلومات في المقدمة",
      description: "يمكن ترتيب البطاقات بالسحب والإفلات.",
      type: "array",
      group: "page",
      validation: (rule) => rule.max(4),
      of: [
        defineArrayMember({
          name: "heroFact",
          title: "معلومة مختصرة",
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "القيمة الرئيسية",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "التوضيح",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "questions",
      title: "الأسئلة والأجوبة",
      description:
        "اسحب العناصر لتغيير ترتيبها، ويمكن إخفاء سؤال من الموقع دون حذفه.",
      type: "array",
      group: "questions",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          name: "participationFaqItem",
          title: "سؤال وجواب",
          type: "object",
          fields: [
            defineField({
              name: "enabled",
              title: "ظاهر في الموقع",
              type: "boolean",
              initialValue: true,
            }),
            defineField({
              name: "question",
              title: "السؤال",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "status",
              title: "حالة المعلومة",
              type: "string",
              options: {
                layout: "radio",
                list: [
                  { title: "مؤكدة", value: "confirmed" },
                  { title: "مؤكدة جزئياً", value: "partially-confirmed" },
                  { title: "بانتظار الاعتماد", value: "awaiting-approval" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "statusLabel",
              title: "النص الظاهر للحالة",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "الإجابة",
              type: "array",
              validation: (rule) => rule.required().min(1),
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "فقرة", value: "normal" }],
                  lists: [
                    { title: "نقاط", value: "bullet" },
                    { title: "ترقيم", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "عريض", value: "strong" },
                      { title: "تأكيد", value: "em" },
                    ],
                    annotations: [],
                  },
                }),
              ],
            }),
            defineField({
              name: "highlights",
              title: "الخلاصات المختصرة",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "note",
              title: "ملاحظة مهمة",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "question",
              subtitle: "statusLabel",
              enabled: "enabled",
            },
            prepare: ({ title, subtitle, enabled }) => ({
              title: enabled === false ? `مخفي - ${title}` : title,
              subtitle,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "displayStyle",
      title: "نمط عرض الأسئلة",
      type: "string",
      group: "display",
      initialValue: "cards",
      options: {
        layout: "radio",
        list: [
          { title: "بطاقات متتابعة", value: "cards" },
          { title: "قائمة قابلة للفتح", value: "accordion" },
          { title: "شبكة مختصرة", value: "compact" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "showStatusLegend",
      title: "إظهار دليل حالات المعلومات",
      type: "boolean",
      group: "display",
      initialValue: true,
    }),
    defineField({
      name: "legendDescription",
      title: "شرح دليل الحالات",
      type: "text",
      rows: 2,
      group: "display",
    }),
    defineField({
      name: "showHighlights",
      title: "إظهار الخلاصات المختصرة",
      type: "boolean",
      group: "display",
      initialValue: true,
    }),
    defineField({
      name: "showNotes",
      title: "إظهار الملاحظات المهمة",
      type: "boolean",
      group: "display",
      initialValue: true,
    }),
    defineField({
      name: "quickAccess",
      title: "بطاقة الوصول السريع في الصفحة الرئيسية",
      type: "object",
      group: "quickAccess",
      fields: [
        defineField({
          name: "enabled",
          title: "إظهار البطاقة",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "eyebrow",
          title: "التصنيف المختصر",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "badgeLabel",
          title: "شارة البطاقة",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "عنوان البطاقة",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        requiredText("description", "وصف البطاقة"),
        defineField({
          name: "buttonLabel",
          title: "نص الزر",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "بطاقة التواصل في نهاية الصفحة",
      type: "object",
      group: "cta",
      fields: [
        defineField({
          name: "eyebrow",
          title: "التصنيف المختصر",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "title",
          title: "العنوان",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        requiredText("description", "الوصف"),
        defineField({
          name: "buttonLabel",
          title: "نص الزر",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "buttonHref",
          title: "رابط الزر",
          type: "string",
          description: "رابط داخلي يبدأ بـ / أو رابط https كامل.",
          validation: (rule) =>
            rule
              .required()
              .custom((value) =>
                !value || value.startsWith("/") || value.startsWith("https://")
                  ? true
                  : "استخدم رابطاً داخلياً يبدأ بـ / أو رابط https كاملاً",
              ),
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", questions: "questions" },
    prepare: ({ title, questions }) => ({
      title: title || "أسئلة المشاركة التجارية",
      subtitle: `${questions?.length ?? 0} أسئلة`,
    }),
  },
});
