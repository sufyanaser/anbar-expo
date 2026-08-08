import { ArrowDown, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";

import { EventCountdown } from "@/components/abtf2026/event-countdown";
import { abtf2026 } from "@/data/abtf2026";

export function EventHero() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#03283f] text-white"
    >
      <div className="absolute inset-x-0 top-0 -z-30 h-[46rem] sm:inset-0 sm:h-auto">
        <Image
          src={abtf2026.heroImage}
          alt="مشهد ليلي لمدينة الأنبار ونهر الفرات"
          fill
          sizes="100vw"
          className="object-cover object-[64%_center] sm:object-center"
          preload
        />
      </div>
      <div
        className="absolute inset-0 -z-20 bg-[#021d30]/22"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(270deg,rgba(2,29,48,0.94)_0%,rgba(2,29,48,0.74)_42%,rgba(2,29,48,0.18)_78%,rgba(2,29,48,0.28)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-20 h-2/5 bg-gradient-to-t from-[#021d30]/90 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-18"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute start-1/2 top-10 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#07814b]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100svh-8.5rem)] w-[min(100%-2rem,80rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.34)]">
          <div className="flex items-center gap-4">
            <Image
              src={abtf2026.iraqEmblem}
              width={570}
              height={787}
              alt="شعار جمهورية العراق"
              className="h-20 w-auto sm:h-24"
              preload
              unoptimized
            />
            <div className="h-14 w-px bg-white/18" aria-hidden="true" />
            <p className="font-latin text-xs font-bold tracking-[0.24em] text-[#f0c64f] sm:text-sm">
              ANBAR · IRAQ · 2026
            </p>
          </div>

          <h1 className="mt-10 max-w-4xl text-4xl leading-[1.35] font-normal sm:text-6xl lg:text-[4.6rem]">
            معرض الأنبار الدولي
            <span className="mt-1 block whitespace-nowrap text-[clamp(1.45rem,6.4vw,4.25rem)] text-[#f0c64f]">
              للكتاب والتكنولوجيا الحديثة
            </span>
          </h1>
          <p
            className="font-latin mt-6 text-base tracking-wide text-white/56 sm:text-xl"
            dir="ltr"
          >
            {abtf2026.titleEn}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg sm:leading-9">
            بوابة المعرض الرقمية للأخبار والفعاليات والجهات المشاركة، مع خدمات
            متكاملة تساعد الزائر على استكشاف تجربة المعرض في مدينة الرمادي.
          </p>
          <a
            href="#platform"
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#0a7b49] px-6 py-3 text-sm font-normal text-white transition-colors hover:bg-[#0d9157] focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
          >
            استكشف أقسام المنصة
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:ms-auto">
          <div className="rounded-[2rem] border border-white/18 bg-white/96 p-8 shadow-2xl shadow-black/35 backdrop-blur-sm sm:p-10">
            <Image
              src={abtf2026.eventMark}
              width={2311}
              height={1587}
              alt="شعار معرض الأنبار الدولي للكتاب والتكنولوجيا الحديثة"
              className="h-auto w-full"
              preload
              unoptimized
            />
          </div>

          <div
            id="opening"
            className="relative mx-4 -mt-3 grid gap-px overflow-hidden rounded-xl border border-[#e5b834]/35 bg-[#e5b834]/35 shadow-xl sm:mx-8 sm:grid-cols-2"
          >
            <div className="bg-[#f5cf61] p-5 text-[#102c2a]">
              <p className="flex items-center gap-2 text-xs font-normal">
                <CalendarDays className="size-4" aria-hidden="true" />
                {abtf2026.opening.label}
              </p>
              <time
                dateTime={abtf2026.opening.dateTime}
                className="font-latin mt-2 block text-xl font-normal tracking-wide"
                dir="ltr"
              >
                {abtf2026.opening.date}
              </time>
            </div>
            <div className="bg-[#f5cf61] p-5 text-[#102c2a]">
              <p className="flex items-center gap-2 text-xs font-normal">
                <Clock3 className="size-4" aria-hidden="true" />
                الساعة
              </p>
              <time
                dateTime={abtf2026.opening.dateTime}
                className="mt-2 block text-xl font-normal"
              >
                {abtf2026.opening.time}
              </time>
            </div>
          </div>

          <div className="mx-4 mt-3 sm:mx-8">
            <EventCountdown targetDate={abtf2026.opening.dateTime} />
          </div>
        </div>
      </div>
    </section>
  );
}
