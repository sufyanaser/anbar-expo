import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { events } from "@/data/events";

const statusLabels = {
  upcoming: "قريباً",
  active: "جاري الآن",
  completed: "منتهٍ",
} as const;

export const metadata: Metadata = {
  title: { absolute: "ANBAR EXPO | منصة فعاليات الأنبار" },
  description:
    "المظلة الرقمية لفعاليات ومعارض ومؤتمرات الأنبار، بهوية مستقلة لكل حدث.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f1ea]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/15 px-5 py-6 sm:px-8 lg:px-12">
        <div
          className="font-latin text-lg font-bold tracking-[0.18em]"
          dir="ltr"
        >
          ANBAR EXPO
        </div>
        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="size-2 bg-[#ff5b24]" aria-hidden="true" />
          <span>منصة الفعاليات في محافظة الأنبار</span>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-24">
        <div>
          <p
            className="mb-5 font-latin text-xs font-bold tracking-[0.22em] text-[#ff5b24]"
            dir="ltr"
          >
            ONE PLATFORM. DISTINCT EXPERIENCES.
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.12] font-black tracking-tight sm:text-7xl lg:text-8xl">
            منصة واحدة.
            <br />
            <span className="text-[#ff5b24]">عوالم متعددة.</span>
          </h1>
        </div>
        <div className="flex items-end border-s border-white/15 ps-6">
          <p className="max-w-md text-base leading-8 text-white/65 sm:text-lg">
            مظلة رقمية تجمع فعاليات الأنبار، مع مساحة وهوية وتجربة مستقلة لكل
            معرض ومؤتمر.
          </p>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-12"
        aria-label="الفعاليات"
      >
        <div className="mb-7 flex items-end justify-between border-b border-white/15 pb-4">
          <h2 className="text-2xl font-bold sm:text-3xl">اختر الحدث</h2>
          <span className="font-latin text-xs text-white/45" dir="ltr">
            {String(events.length).padStart(2, "0")} EVENTS
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => {
            const href = event.href ?? `/events/${event.slug}`;
            const isAcdi = event.visualIdentity === "acdi26";
            return (
              <article
                key={event.id}
                className={`group overflow-hidden border ${isAcdi ? "border-[#39a7bf]/35 bg-[#102a43] text-white" : "border-[#d1b58a]/35 bg-[#f3ede2] text-[#073b5a]"}`}
              >
                <Link
                  href={href}
                  className="block focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#ff5b24]"
                  aria-label={`الدخول إلى ${event.titleAr}`}
                >
                  <div
                    className={`relative aspect-[16/9] overflow-hidden ${isAcdi ? "bg-[#102a43]" : "bg-[#e5ddcf]"}`}
                  >
                    {event.cardImage ? (
                      <Image
                        src={event.cardImage.src}
                        width={event.cardImage.width}
                        height={event.cardImage.height}
                        alt={event.cardImage.alt ?? event.titleAr}
                        priority={event.featured}
                        sizes="(max-width: 1024px) calc(100vw - 2.5rem), 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
                      />
                    ) : (
                      <div className="relative flex h-full flex-col justify-between overflow-hidden p-7 sm:p-10">
                        <div
                          className="absolute -top-20 -left-20 size-72 rounded-full border-[44px] border-[#39a7bf]/30"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start justify-between gap-5">
                          <span
                            className="font-latin text-sm font-bold tracking-[0.18em] text-[#39a7bf]"
                            dir="ltr"
                          >
                            ACDI26
                          </span>
                          <span className="border-s-4 border-[#d6a65d] ps-3 text-xs text-white/65">
                            هوية مقترحة
                          </span>
                        </div>
                        <div className="relative max-w-xl">
                          <p className="mb-3 text-sm font-semibold text-[#39a7bf]">
                            حوار يصنع أثراً
                          </p>
                          <h3 className="text-3xl leading-tight font-bold sm:text-4xl">
                            مؤتمر الأنبار
                            <br />
                            للحوار والابتكار
                          </h3>
                        </div>
                      </div>
                    )}
                    <span
                      className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-bold ${isAcdi ? "bg-[#f2f3f4] text-[#102a43]" : "bg-[#073b5a] text-white"}`}
                    >
                      {statusLabels[event.status]}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-5">
                      <p
                        className={`text-xs font-bold ${isAcdi ? "text-[#39a7bf]" : "text-[#9a7541]"}`}
                      >
                        {event.category}
                      </p>
                      <span className="font-latin text-xs opacity-45" dir="ltr">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl leading-snug font-bold sm:text-3xl">
                      {event.titleAr}
                    </h3>
                    <p
                      className="mt-1 font-latin text-sm opacity-50"
                      dir="ltr"
                      lang="en"
                    >
                      {event.titleEn}
                    </p>
                    <p className="mt-5 max-w-xl leading-7 opacity-65">
                      {event.descriptionAr}
                    </p>
                    <span
                      className={`mt-7 inline-flex items-center gap-2 font-bold ${isAcdi ? "text-[#39a7bf]" : "text-[#087c49]"}`}
                    >
                      ادخل إلى الحدث{" "}
                      <ArrowLeft
                        className="size-5 transition-transform group-hover:-translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <footer
        className="border-t border-white/15 px-5 py-8 text-center font-latin text-xs tracking-[0.16em] text-white/35"
        dir="ltr"
      >
        ANBAR EXPO · INDEPENDENT IDENTITIES, ONE PLATFORM
      </footer>
    </main>
  );
}
