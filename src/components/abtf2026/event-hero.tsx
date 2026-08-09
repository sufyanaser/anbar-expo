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
      className="relative isolate overflow-hidden border-b border-[#0a3c5b]/10 bg-[#f4efe6] text-[#063b5a]"
    >
      <div className="absolute inset-x-0 top-0 -z-30 h-[34rem] sm:inset-0 sm:h-auto">
        <Image
          src="/brand/abtf2026/identity/abtf-portal-hero.webp"
          alt="كتاب مفتوح تتشكل منه بوابة معمارية رقمية تجمع المعرفة والتكنولوجيا"
          fill
          sizes="100vw"
          className="object-cover object-[50%_54%] sm:object-center"
          preload
        />
      </div>
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_left,rgba(247,243,235,0.98)_0%,rgba(247,243,235,0.9)_27%,rgba(247,243,235,0.12)_52%,rgba(247,243,235,0.02)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-20 h-2/5 bg-gradient-to-t from-[#f4efe6] via-[#f4efe6]/86 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[58rem] w-[min(100%-2rem,82rem)] flex-col py-8 sm:min-h-[48rem] sm:py-12 lg:min-h-[calc(100svh-8rem)] lg:py-14">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Image
              src={abtf2026.iraqEmblem}
              width={570}
              height={787}
              alt="شعار جمهورية العراق"
              className="h-16 w-auto sm:h-20"
              preload
              unoptimized
            />
            <span className="h-12 w-px bg-[#0a3c5b]/16" aria-hidden="true" />
            <div>
              <p className="font-latin text-[0.62rem] font-bold tracking-[0.24em] text-[#a77a35] sm:text-xs">
                ANBAR · IRAQ · 2026
              </p>
              <p className="mt-1 text-[0.68rem] text-[#063b5a]/52">
                المنصة الرقمية الرسمية
              </p>
            </div>
          </div>
          <p className="hidden items-center gap-2 rounded-full border border-[#0a3c5b]/12 bg-white/60 px-4 py-2 text-xs text-[#063b5a]/62 shadow-sm backdrop-blur-md sm:inline-flex">
            <span className="size-1.5 rounded-full bg-[#07804b]" />
            معرض الكتاب والتكنولوجيا 2026
          </p>
        </div>

        <div
          className="mt-auto grid items-end gap-10 pt-[23rem] sm:pt-36 lg:grid-cols-[0.92fr_1.08fr] lg:pt-24"
          dir="ltr"
        >
          <div className="order-2 lg:order-1" dir="rtl">
            <div
              id="opening"
              className="overflow-hidden rounded-2xl border border-[#0a3c5b]/12 bg-[#063b5a]/94 text-white shadow-[0_22px_60px_rgba(6,59,90,0.2)] backdrop-blur-xl"
            >
              <div className="grid grid-cols-2 sm:grid-cols-[1.05fr_0.75fr_2.1fr]">
                <div className="px-5 py-4 sm:px-6">
                  <p className="flex items-center gap-2 text-[0.68rem] text-white/55">
                    <CalendarDays
                      className="size-4 text-[#d6aa5a]"
                      aria-hidden="true"
                    />
                    {eventSettings.opening.label}
                  </p>
                  <time
                    dateTime={eventSettings.opening.dateTime}
                    className="font-latin mt-2 block text-lg tracking-wide sm:text-xl"
                    dir="ltr"
                  >
                    {eventSettings.opening.date}
                  </time>
                </div>
                <div className="border-s border-white/12 px-5 py-4 sm:px-6">
                  <p className="flex items-center gap-2 text-[0.68rem] text-white/55">
                    <Clock3
                      className="size-4 text-[#d6aa5a]"
                      aria-hidden="true"
                    />
                    الساعة
                  </p>
                  <time
                    dateTime={eventSettings.opening.dateTime}
                    className="mt-2 block text-lg sm:text-xl"
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

          <div className="order-1 lg:order-2 lg:pb-1" dir="rtl">
            <p className="text-xs font-bold tracking-[0.18em] text-[#07804b]">
              المعرفة تصنع المستقبل
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.55rem,5vw,5.6rem)] leading-[1.12] font-black tracking-[-0.025em] text-[#063b5a]">
              معرض الأنبار الدولي
              <span className="mt-1 block whitespace-nowrap text-[clamp(1.75rem,3.8vw,4.15rem)]">
                للكتاب والتكنولوجيا
              </span>
            </h1>
            <p
              className="mt-4 font-serif text-lg font-bold tracking-[0.06em] text-[#9a7541] sm:text-2xl"
              dir="ltr"
            >
              ANBAR BOOK &amp; TECHNOLOGY FAIR
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#063b5a]/62 sm:text-base">
              {eventSettings.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#platform"
                className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#087c49] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#087c49]/16 transition-colors hover:bg-[#096c43] focus-visible:ring-2 focus-visible:ring-[#b88a40] focus-visible:outline-none"
              >
                دخول المنصة
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/ABTF2026/program"
                className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#063b5a]/16 bg-white/58 px-6 py-3 text-sm font-bold text-[#063b5a] backdrop-blur-sm transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-[#b88a40] focus-visible:outline-none"
              >
                برنامج الفعاليات
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
