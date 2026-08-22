import { ArrowLeft, BadgeCheck, FileQuestion } from "lucide-react";
import Link from "next/link";

import { getParticipationFaqPage } from "@/sanity/content";

export async function ParticipationQuickAccess() {
  const page = await getParticipationFaqPage();
  const content = page.quickAccess;

  if (!content.enabled) return null;

  return (
    <section className="border-b border-[#073d5b]/10 bg-[#fffdf8] px-4 py-8 sm:py-10">
      <Link
        href="/ABTF2026/participation-faq"
        data-reveal
        className="polish-card group mx-auto grid w-[min(100%,80rem)] gap-6 overflow-hidden rounded-3xl border border-[#087c49]/22 bg-[linear-gradient(120deg,#edf5ef_0%,#fffdf8_58%,#fff4cc_100%)] p-6 shadow-sm focus-visible:ring-3 focus-visible:ring-[#d3a528] focus-visible:outline-none sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-[#073d5b] text-[#f0c64f] shadow-lg shadow-[#073d5b]/12">
          <FileQuestion className="size-7" aria-hidden="true" />
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-normal tracking-[0.12em] text-[#087c49]">
              {content.eyebrow}
            </p>
            {content.badgeLabel ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#087c49]/10 px-3 py-1 text-[0.68rem] font-bold text-[#087c49]">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                {content.badgeLabel}
              </span>
            ) : null}
          </div>
          <h2 className="mt-3 text-2xl leading-tight font-bold text-[#073d5b] sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#073d5b]/62 sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>

        <span className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl bg-[#087c49] px-5 text-sm font-bold text-white transition-colors group-hover:bg-[#076d41]">
          {content.buttonLabel}
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </section>
  );
}
