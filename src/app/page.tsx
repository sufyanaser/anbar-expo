import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { events } from "@/data/events";

const pageTitle = "معارض وفعاليات الأنبار";
const statusLabels = {
  upcoming: "قريباً",
  active: "جاري الآن",
  completed: "فعالية منتهية",
} as const;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description:
    "البوابة الرسمية لمعارض وفعاليات الأنبار، مع صفحة مستقلة لكل حدث.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "/",
    title: pageTitle,
    description:
      "اكتشف معارض وفعاليات الأنبار من خلال البوابة الرسمية الموحدة.",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "اكتشف معارض وفعاليات الأنبار من خلال البوابة الرسمية الموحدة.",
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4efe6] text-[#073b5a]">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/brand/abtf2026/identity/abtf-paper-texture.webp')] bg-cover bg-center opacity-35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,124,73,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(154,117,65,0.16),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <header className="flex items-center justify-between gap-6 border-b border-[#9a7541]/25 pb-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#087c49]">
              ANBAR EXPO
            </p>
            <p className="mt-1 text-sm text-[#073b5a]/65">
              المنصة الرسمية للمعارض والفعاليات
            </p>
          </div>
          <span className="rounded-full border border-[#9a7541]/30 bg-white/55 px-4 py-2 text-xs font-bold text-[#073b5a]/75 backdrop-blur">
            محافظة الأنبار
          </span>
        </header>

        <section
          className="max-w-3xl py-12 sm:py-16"
          aria-labelledby="events-title"
        >
          <p className="mb-4 text-sm font-bold text-[#087c49]">
            بوابة واحدة · فعاليات متعددة
          </p>
          <h1
            id="events-title"
            className="text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl"
          >
            اكتشف معارض وفعاليات الأنبار
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#073b5a]/70 sm:text-lg">
            اختر الحدث الذي يهمك للوصول إلى منصته الرقمية، ومتابعة تفاصيله
            ومعلومات المشاركة والزيارة.
          </p>
        </section>

        <section
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          aria-label="المعارض والفعاليات"
        >
          {events.map((event) => {
            const href = event.href ?? "/events/" + event.slug;

            return (
              <article
                key={event.id}
                className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-[#9a7541]/22 bg-[#fbf8f2]/92 shadow-[0_20px_60px_rgba(6,59,90,0.10)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[#9a7541]/45 hover:shadow-[0_26px_75px_rgba(6,59,90,0.17)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <Link
                  href={href}
                  aria-label={"الدخول إلى " + event.titleAr}
                  className="relative block aspect-[16/9] overflow-hidden bg-[#e5ddcf] focus-visible:ring-3 focus-visible:ring-[#087c49] focus-visible:outline-none"
                >
                  {event.cardImage ? (
                    <Image
                      src={event.cardImage.src}
                      width={event.cardImage.width}
                      height={event.cardImage.height}
                      alt={event.cardImage.alt ?? event.titleAr}
                      priority={event.featured}
                      sizes="(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#073b5a,#087c49)] p-8 text-center text-2xl font-semibold text-white">
                      {event.titleAr}
                    </div>
                  )}
                  <span className="absolute top-4 right-4 rounded-full bg-[#073b5a]/90 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur">
                    {statusLabels[event.status]}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold text-[#9a7541]">
                    {event.category}
                  </p>
                  <h2 className="mt-3 text-2xl leading-snug font-semibold text-[#073b5a]">
                    {event.titleAr}
                  </h2>
                  <p
                    className="mt-1 text-sm text-[#073b5a]/52"
                    dir="ltr"
                    lang="en"
                  >
                    {event.titleEn}
                  </p>

                  {event.descriptionAr ? (
                    <p className="mt-5 line-clamp-3 leading-7 text-[#073b5a]/68">
                      {event.descriptionAr}
                    </p>
                  ) : null}

                  {(event.startDate || event.location) && (
                    <div className="mt-5 space-y-2 border-t border-[#9a7541]/18 pt-5 text-sm text-[#073b5a]/65">
                      {event.startDate ? (
                        <p className="flex items-center gap-2">
                          <CalendarDays
                            className="size-4 text-[#087c49]"
                            aria-hidden="true"
                          />
                          {event.startDate}
                          {event.endDate ? " — " + event.endDate : null}
                        </p>
                      ) : null}
                      {event.location ? (
                        <p className="flex items-center gap-2">
                          <MapPin
                            className="size-4 text-[#087c49]"
                            aria-hidden="true"
                          />
                          {event.location}
                        </p>
                      ) : null}
                    </div>
                  )}

                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 pt-7 font-bold text-[#087c49] outline-none transition-colors hover:text-[#073b5a] focus-visible:underline"
                  >
                    استكشف الحدث
                    <ArrowLeft
                      className="size-5 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="mt-12 border-t border-[#9a7541]/25 pt-6 text-sm text-[#073b5a]/55 sm:mt-16">
          منصة مؤسسية موحّدة لمعارض الأنبار الحالية والقادمة.
        </footer>
      </div>
    </main>
  );
}
