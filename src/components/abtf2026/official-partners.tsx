import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { abtf2026 } from "@/data/abtf2026";

export function OfficialPartners() {
  return (
    <section id="official" className="bg-[#f7f5ef] py-20 sm:py-28">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="max-w-3xl">
          <p className="text-xs font-black tracking-[0.16em] text-[#087c49]">
            الإطار الرسمي
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073d5b] sm:text-5xl">
            الرعاية والإشراف والتنظيم
          </h2>
          <p className="mt-5 text-base leading-8 text-black/55">
            البيانات التالية من المادة الرسمية المرفقة للمعرض.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#9a6b16]/30 bg-[#8a5f12]/25 shadow-[0_18px_55px_rgba(111,76,13,0.12)] lg:grid-cols-3 lg:gap-px">
          {abtf2026.officialEntities.map((entity, index) => (
            <article
              key={entity.label}
              className="relative bg-[linear-gradient(145deg,#fff8dc_0%,#efd88f_52%,#c99a36_100%)] p-7 sm:p-9"
            >
              <span
                className="font-latin absolute end-7 top-7 text-xs font-black text-[#79500b]/65"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <p className="text-xs font-black tracking-[0.14em] text-[#3a2605]">
                {entity.label}
              </p>
              <div className="mt-6 flex items-center justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl leading-8 font-black text-[#073d5b]">
                    {entity.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#3a2605]">
                    {entity.detail}
                  </p>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl border border-[#80580f]/15 bg-white/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(101,68,10,0.1)] sm:size-24">
                  <Image
                    src={entity.mark.src}
                    width={entity.mark.width}
                    height={entity.mark.height}
                    alt={entity.mark.alt}
                    className="max-h-full w-auto object-contain"
                    unoptimized={entity.mark.src.endsWith(".svg")}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#073d5b]/12 bg-white px-6 py-7 text-[#073d5b] shadow-sm sm:flex-row sm:px-9">
          <div>
            <p className="text-xs font-black tracking-[0.14em] text-[#087c49]">
              بالتزامن مع
            </p>
            <p className="mt-2 text-2xl font-black">
              {abtf2026.concurrentEvent}
            </p>
          </div>
          <span className="flex size-20 items-center justify-center rounded-2xl border border-[#073d5b]/10 bg-[#f7f5ef] p-2">
            <Image
              src="/brand/abtf2026/partner-03.svg"
              width={2328}
              height={2398}
              alt="شعار معرض صُنع في سوريا"
              className="max-h-full w-auto"
              unoptimized
            />
          </span>
        </div>

        <Link
          href={abtf2026.mediaSponsor.href}
          className="group relative mt-6 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(115deg,#56d8df_0%,#1479bd_46%,#7357cc_100%)] px-6 py-7 text-white shadow-lg shadow-[#176ea8]/15 transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-[#d9e1e8] focus-visible:outline-none sm:flex-row sm:px-9"
          aria-label={`عرض تفاصيل ${abtf2026.mediaSponsor.label}`}
        >
          <span
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%,rgba(255,255,255,0.08))]"
            aria-hidden="true"
          />
          <span className="relative">
            <span className="text-xs font-black tracking-[0.14em] text-white/76">
              {abtf2026.mediaSponsor.label}
            </span>
            <span className="mt-2 block text-2xl font-black">
              {abtf2026.mediaSponsor.name}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/82">
              التفاصيل والتواصل والإعلانات
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </span>
          </span>
          <span className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/28 bg-white/10 p-2 shadow-inner shadow-white/12 backdrop-blur-sm">
            <span
              className="block size-full"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, #b8c0ca 0%, #ffffff 42%, #d8dde4 68%, #ffffff 100%)",
                WebkitMaskImage: `url(${abtf2026.mediaSponsor.mark})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${abtf2026.mediaSponsor.mark})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            <span className="sr-only">شعار {abtf2026.mediaSponsor.name}</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
