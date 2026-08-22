import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CircleAlert,
  ClipboardCheck,
  FileSignature,
  MapPin,
} from "lucide-react";

import {
  participationFaqEntries,
  type ParticipationFaqStatus,
} from "@/data/abtf-participation-faq";

export const metadata: Metadata = {
  title: "أسئلة المشاركة التجارية",
  description:
    "إجابات واضحة عن فعاليات معرض الأنبار الدولي للكتاب والتكنولوجيا، التسويق، نشر المشاركين، مواصفات البوثات، العقد، الأوقات وزيارة الموقع.",
  alternates: { canonical: "/ABTF2026/participation-faq" },
  robots: { index: false, follow: false, nocache: true },
};

const statusStyles: Record<ParticipationFaqStatus, string> = {
  confirmed: "border-[#087c49]/20 bg-[#e8f0eb] text-[#087c49]",
  "partially-confirmed": "border-[#b98621]/25 bg-[#fff5d5] text-[#7a5209]",
  "awaiting-approval": "border-[#a55a2a]/20 bg-[#fff0e5] text-[#8a431b]",
};

const statusIcons: Record<ParticipationFaqStatus, typeof BadgeCheck> = {
  confirmed: BadgeCheck,
  "partially-confirmed": ClipboardCheck,
  "awaiting-approval": CircleAlert,
};

export default function ParticipationFaqPage() {
  return (
    <main className="bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-[#03283f] px-4 py-16 text-white sm:py-24">
        <div
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(240,198,79,0.2),transparent_35%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-15"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="mx-auto w-[min(100%,80rem)]">
          <Link
            href="/ABTF2026"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white/66 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
            العودة إلى منصة المعرض
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-normal tracking-[0.14em] text-[#f0c64f]">
                دليل المشاريع والعارضين
              </p>
              <h1 className="mt-4 text-4xl leading-[1.25] font-black sm:text-6xl">
                إجابات أسئلة المشاركة التجارية
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg sm:leading-9">
                المعلومات التي يحتاجها صاحب المشروع قبل اختيار البوث أو المساحة،
                مع توضيح ما تم تأكيده وما يزال بانتظار الاعتماد النهائي.
              </p>
            </div>

            <div className="grid w-fit grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/12 bg-white/7 p-4 backdrop-blur-sm">
                <CalendarDays
                  className="size-5 text-[#f0c64f]"
                  aria-hidden="true"
                />
                <p className="font-latin mt-4 text-sm font-normal" dir="ltr">
                  16 - 25 SEP
                </p>
                <p className="mt-1 text-xs text-white/52">10 أيام</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/7 p-4 backdrop-blur-sm">
                <MapPin className="size-5 text-[#f0c64f]" aria-hidden="true" />
                <p className="mt-4 text-sm font-normal">الرمادي</p>
                <p className="mt-1 text-xs text-white/52">محافظة الأنبار</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-white/12 bg-white/7 p-4 backdrop-blur-sm sm:col-span-1">
                <FileSignature
                  className="size-5 text-[#f0c64f]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm font-normal">العقد متوفر</p>
                <p className="mt-1 text-xs text-white/52">بعد تثبيت البيانات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#073d5b]/10 bg-white px-4 py-7">
        <div className="mx-auto flex w-[min(100%,80rem)] flex-col gap-3 text-sm leading-7 text-[#073d5b]/62 sm:flex-row sm:items-center sm:justify-between">
          <p>
            تظهر حالة كل إجابة حتى لا تُعامل التفاصيل التشغيلية المبدئية كالتزام
            نهائي.
          </p>
          <div
            className="flex flex-wrap gap-2"
            aria-label="دليل حالات الإجابات"
          >
            <span className="rounded-full bg-[#e8f0eb] px-3 py-1 text-xs text-[#087c49]">
              مؤكد
            </span>
            <span className="rounded-full bg-[#fff5d5] px-3 py-1 text-xs text-[#7a5209]">
              جزئي
            </span>
            <span className="rounded-full bg-[#fff0e5] px-3 py-1 text-xs text-[#8a431b]">
              بانتظار الاعتماد
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto w-[min(100%,64rem)]">
          <ol className="space-y-5">
            {participationFaqEntries.map((entry, index) => {
              const StatusIcon = statusIcons[entry.status];

              return (
                <li
                  key={entry.id}
                  id={entry.id}
                  className="scroll-mt-40 rounded-3xl border border-[#073d5b]/10 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="font-latin flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#073d5b] text-sm font-normal text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="pt-1 text-xl leading-8 font-normal text-[#073d5b] sm:text-2xl sm:leading-9">
                        {entry.question}
                      </h2>
                    </div>
                    <span
                      className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${statusStyles[entry.status]}`}
                    >
                      <StatusIcon className="size-4" aria-hidden="true" />
                      {entry.statusLabel}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4 border-t border-[#073d5b]/8 pt-6 text-base leading-9 text-[#073d5b]/68">
                    {entry.answer.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {entry.highlights?.length ? (
                    <ul
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label="خلاصة الإجابة"
                    >
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-[#087c49]/14 bg-[#e8f0eb]/70 px-4 py-2 text-xs font-bold text-[#087c49]"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {entry.note ? (
                    <p className="mt-6 rounded-2xl border border-[#b98621]/18 bg-[#fff8df] p-4 text-sm leading-7 text-[#68470c]">
                      <span className="font-normal">ملاحظة: </span>
                      {entry.note}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-t border-[#073d5b]/10 bg-[#e8f0eb] px-4 py-14 sm:py-20">
        <div className="mx-auto flex w-[min(100%,64rem)] flex-col gap-7 rounded-3xl bg-[#073d5b] p-7 text-white shadow-xl shadow-[#073d5b]/10 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-normal text-[#f0c64f]">
              قبل تحويل أي دفعة
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-normal">
              اطلب عرضاً مكتوباً يثبت المساحة والخدمات والسعر
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/62">
              يكون الحجز نهائياً بعد اعتماد الطلب واستلام دفعة التأكيد وإصدار
              تأكيد حجز مكتوب من الجهة المخولة.
            </p>
          </div>
          <Link
            href="/ABTF2026/al-wasef"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f0c64f] px-6 text-sm font-normal text-[#073d5b] transition-colors hover:bg-[#f7d86d] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            التواصل مع الجهة المنظمة
            <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
