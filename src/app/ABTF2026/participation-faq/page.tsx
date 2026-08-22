import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileSignature, MapPin } from "lucide-react";

import { ParticipationFaqList } from "@/components/abtf2026/participation-faq-list";
import { getParticipationFaqPage } from "@/sanity/content";

const factIcons = [CalendarDays, MapPin, FileSignature] as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getParticipationFaqPage();

  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: "/ABTF2026/participation-faq" },
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function ParticipationFaqPage() {
  const page = await getParticipationFaqPage();

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
                {page.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl leading-[1.25] font-black sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg sm:leading-9">
                {page.intro}
              </p>
            </div>

            <div className="grid w-fit grid-cols-2 gap-3 sm:grid-cols-3">
              {page.heroFacts.map((fact, index) => {
                const FactIcon = factIcons[index % factIcons.length];
                const isLastOddCard =
                  page.heroFacts.length % 2 === 1 &&
                  index === page.heroFacts.length - 1;

                return (
                  <div
                    key={fact.id}
                    className={`rounded-2xl border border-white/12 bg-white/7 p-4 backdrop-blur-sm ${
                      isLastOddCard ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <FactIcon
                      className="size-5 text-[#f0c64f]"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm font-normal" dir="auto">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-xs text-white/52">{fact.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {page.showStatusLegend ? (
        <section className="border-b border-[#073d5b]/10 bg-white px-4 py-7">
          <div className="mx-auto flex w-[min(100%,80rem)] flex-col gap-3 text-sm leading-7 text-[#073d5b]/62 sm:flex-row sm:items-center sm:justify-between">
            <p>{page.legendDescription}</p>
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
      ) : null}

      <section className="px-4 py-14 sm:py-20">
        <div
          className={`mx-auto ${
            page.displayStyle === "compact"
              ? "w-[min(100%,80rem)]"
              : "w-[min(100%,64rem)]"
          }`}
        >
          <ParticipationFaqList page={page} />
        </div>
      </section>

      <section className="border-t border-[#073d5b]/10 bg-[#e8f0eb] px-4 py-14 sm:py-20">
        <div className="mx-auto flex w-[min(100%,64rem)] flex-col gap-7 rounded-3xl bg-[#073d5b] p-7 text-white shadow-xl shadow-[#073d5b]/10 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-normal text-[#f0c64f]">
              {page.cta.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-normal">
              {page.cta.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/62">
              {page.cta.description}
            </p>
          </div>
          <Link
            href={page.cta.buttonHref}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f0c64f] px-6 text-sm font-normal text-[#073d5b] transition-colors hover:bg-[#f7d86d] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            {page.cta.buttonLabel}
            <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
