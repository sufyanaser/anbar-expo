import type { Metadata } from "next";
import { ArrowDown, BookOpen, Cpu, Landmark, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "ABTF 2026",
  description: "المنصة الرقمية لمعرض الأنبار الدولي للكتاب والتكنولوجيا.",
  alternates: { canonical: "/ABTF2026" },
  robots: { index: false, follow: false, nocache: true },
};

const platformModules = [
  "دليل العارضين",
  "برنامج الفعاليات",
  "دليل الزائر",
] as const;

export default function Abtf2026Page() {
  return (
    <div className="min-h-screen bg-[#f2eee7] text-[#201c19]">
      <header className="border-b border-black/10 bg-[#f2eee7]/90 backdrop-blur">
        <div className="mx-auto flex min-h-20 w-[min(100%-2rem,80rem)] items-center justify-between gap-6">
          <div>
            <p className="font-latin text-sm font-black tracking-[0.24em] sm:text-base">
              ABTF 2026
            </p>
            <p className="mt-1 text-[0.68rem] font-bold text-black/45">
              ANBAR BOOK &amp; TECHNOLOGY FAIR
            </p>
          </div>
          <span className="rounded-full border border-[#8e4b35]/25 bg-[#8e4b35]/5 px-3 py-1.5 text-xs font-bold text-[#8e4b35]">
            قيد الإعداد
          </span>
        </div>
      </header>

      <div>
        <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#1a1715] text-[#f5f0e8]">
          <div
            className="absolute inset-0 -z-10 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-[min(100%-2rem,80rem)] items-center gap-14 py-20 lg:grid-cols-[1fr_0.55fr] lg:py-28">
            <div>
              <p className="font-latin text-xs font-bold tracking-[0.3em] text-[#c77b5d]">
                DIGITAL EXHIBITION PLATFORM · 2026
              </p>
              <h1 className="mt-7 max-w-4xl text-4xl leading-[1.25] font-black text-balance sm:text-6xl lg:text-7xl">
                معرض الأنبار الدولي
                <span className="mt-2 block text-[#d9a185]">
                  للكتاب والتكنولوجيا
                </span>
              </h1>
              <p
                className="font-latin mt-6 text-base tracking-wide text-white/50 sm:text-xl"
                dir="ltr"
              >
                Anbar Book &amp; Technology Fair
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 sm:text-lg sm:leading-9">
                مساحة رقمية مخصصة لبناء تجربة المعرض وتجهيز خدماته ومحتواه على
                مراحل. تُنشر المعلومات التنفيذية بعد اعتمادها رسميًا.
              </p>
              <a
                href="#platform"
                className="mt-10 inline-flex min-h-12 items-center gap-3 border border-white/18 px-5 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-[#d9a185] focus-visible:outline-none"
              >
                استكشف المنصة
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>

            <aside
              className="border border-white/12 bg-white/[0.035] p-7 sm:p-9"
              aria-label="حالة المنصة"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-[#d9a185]">
                حالة المنصة
              </p>
              <p className="mt-5 text-2xl font-black">مرحلة البناء والتجهيز</p>
              <div className="mt-8 space-y-5 border-t border-white/10 pt-7 text-sm text-white/58">
                <p className="flex items-center gap-3">
                  <MapPin
                    className="size-4 text-[#d9a185]"
                    aria-hidden="true"
                  />
                  الموقع: يُعلن بعد الاعتماد
                </p>
                <p className="flex items-center gap-3">
                  <Landmark
                    className="size-4 text-[#d9a185]"
                    aria-hidden="true"
                  />
                  التفاصيل الرسمية: قيد الاستكمال
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="platform"
          className="mx-auto w-[min(100%-2rem,80rem)] py-20 sm:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black tracking-[0.16em] text-[#8e4b35]">
                نطاق المعرض
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                الكتاب يلتقي بالتكنولوجيا
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
              <article className="bg-[#f8f5ef] p-7 sm:p-9">
                <BookOpen
                  className="size-7 text-[#8e4b35]"
                  aria-hidden="true"
                />
                <h3 className="mt-8 text-xl font-black">الكتاب والنشر</h3>
                <p className="font-latin mt-2 text-sm text-black/45" dir="ltr">
                  Books &amp; Publishing
                </p>
              </article>
              <article className="bg-[#f8f5ef] p-7 sm:p-9">
                <Cpu className="size-7 text-[#8e4b35]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-black">
                  التكنولوجيا والابتكار
                </h3>
                <p className="font-latin mt-2 text-sm text-black/45" dir="ltr">
                  Technology &amp; Innovation
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#e8e1d6]">
          <div className="mx-auto w-[min(100%-2rem,80rem)] py-20 sm:py-24">
            <p className="text-xs font-black tracking-[0.16em] text-[#8e4b35]">
              وحدات المنصة
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl">
              بنية رقمية تتوسع مع اعتماد تفاصيل المعرض
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
              {platformModules.map((module, index) => (
                <li key={module} className="bg-[#f2eee7] p-7 sm:p-9">
                  <span className="font-latin text-xs font-bold text-[#8e4b35]">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-lg font-black">{module}</p>
                  <p className="mt-3 text-sm leading-7 text-black/50">
                    يُفعّل عند اكتمال واعتماد المحتوى الرسمي.
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <footer className="bg-[#1a1715] text-[#f5f0e8]">
        <div className="mx-auto flex w-[min(100%-2rem,80rem)] flex-col gap-4 py-8 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-latin font-bold tracking-[0.18em]">ABTF 2026</p>
          <p>جميع التفاصيل التنفيذية خاضعة للاعتماد الرسمي.</p>
        </div>
      </footer>
    </div>
  );
}
