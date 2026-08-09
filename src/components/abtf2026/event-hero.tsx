import { ArrowDown, ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { EventCountdown } from "@/components/abtf2026/event-countdown";
import { abtf2026 } from "@/data/abtf2026";
import { getEventSettings } from "@/sanity/content";

export async function EventHero() {
  const eventSettings = await getEventSettings();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#03283f] text-white"
    >
      <div className="absolute inset-x-0 top-0 -z-30 h-[46rem] sm:inset-0 sm:h-auto">
        <Image
          src={eventSettings.heroImage}
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

      <div className="mx-auto grid min-h-[42rem] w-[min(100%-2rem,80rem)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.34)]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-bold text-white/70 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-[#f0c64f]" />
            المنصة الرقمية لمعرض 2026
          </p>
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

          <h1 className="mt-10 max-w-4xl text-4xl leading-[1.35] font-black sm:text-6xl lg:text-[4.6rem]">
            معرض الأنبار الدولي{" "}
            <span className="mt-1 block whitespace-nowrap text-[clamp(1.45rem,6.4vw,4.25rem)] text-[#f0c64f]">
              للكتاب والتكنولوجيا الحديثة
            </span>
          </h1>
          <p
            className="font-latin mt-6 text-base tracking-wide text-white/56 sm:text-xl"
            dir="ltr"
          >
            {eventSettings.titleEn}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg sm:leading-9">
            {eventSettings.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#platform"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#0a7b49] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d9157] focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
            >
              دخول المنصة
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/ABTF2026/program"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-white/18 bg-white/7 px-6 py-3 text-sm font-bold text-white/82 backdrop-blur-sm transition-colors hover:bg-white/12 hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
            >
              برنامج الفعاليات
              <ArrowLeft className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ms-auto">
          <div className="rounded-[2rem] border border-white/18 bg-white/96 p-8 shadow-2xl shadow-black/35 backdrop-blur-sm sm:p-10 lg:translate-y-20">
            <Image
              src={eventSettings.eventMark}
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
            className="relative z-10 mt-8 w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/16 bg-[#032e48]/82 shadow-[0_20px_50px_rgba(0,0,0,0.26)] backdrop-blur-xl lg:w-[39rem] lg:max-w-none lg:translate-x-52"
          >
            <div className="grid grid-cols-2 sm:grid-cols-[1.1fr_0.8fr_2.15fr]">
              <div className="px-5 py-4 text-white sm:px-6">
                <p className="flex items-center gap-2 text-[0.68rem] font-normal text-white/55">
                  <CalendarDays
                    className="size-4 text-[#f0c64f]"
                    aria-hidden="true"
                  />
                  {eventSettings.opening.label}
                </p>
                <time
                  dateTime={eventSettings.opening.dateTime}
                  className="font-latin mt-2 block text-lg font-normal tracking-wide sm:text-xl"
                  dir="ltr"
                >
                  {eventSettings.opening.date}
                </time>
              </div>
              <div className="border-s border-white/12 px-5 py-4 text-white sm:px-6">
                <p className="flex items-center gap-2 text-[0.68rem] font-normal text-white/55">
                  <Clock3
                    className="size-4 text-[#f0c64f]"
                    aria-hidden="true"
                  />
                  الساعة
                </p>
                <time
                  dateTime={eventSettings.opening.dateTime}
                  className="mt-2 block text-lg font-normal sm:text-xl"
                >
                  {eventSettings.opening.time}
                </time>
              </div>
              <EventCountdown
                targetDate={eventSettings.opening.dateTime}
                className="col-span-2 border-t border-white/12 sm:col-span-1 sm:border-t-0 sm:border-s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
