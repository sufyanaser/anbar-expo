import Image from "next/image";

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

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#073d5b]/12 bg-[#073d5b]/12 lg:grid-cols-3 lg:gap-px">
          {abtf2026.officialEntities.map((entity, index) => (
            <article
              key={entity.label}
              className="relative bg-white p-7 sm:p-9"
            >
              <span
                className="font-latin absolute end-7 top-7 text-xs font-black text-[#d3a528]"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <p className="text-xs font-black tracking-[0.14em] text-[#087c49]">
                {entity.label}
              </p>
              <h3 className="mt-8 max-w-xs text-xl leading-8 font-black text-[#073d5b]">
                {entity.name}
              </h3>
              <p className="mt-2 text-sm leading-7 text-black/48">
                {entity.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#073d5b] px-6 py-7 text-white sm:flex-row sm:px-9">
          <div>
            <p className="text-xs font-black tracking-[0.14em] text-[#f0c64f]">
              بالتزامن مع
            </p>
            <p className="mt-2 text-2xl font-black">
              {abtf2026.concurrentEvent}
            </p>
          </div>
          <span className="flex size-20 items-center justify-center rounded-2xl bg-white p-2">
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

        <div className="mt-16 border-t border-[#073d5b]/12 pt-10">
          <p className="text-center text-sm font-bold text-[#073d5b]/55">
            الشعارات الواردة في المادة الرسمية للمعرض
          </p>
          <div className="mt-8 grid grid-cols-3 items-center gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {abtf2026.partnerMarks.map((mark) => (
              <div
                key={mark.src}
                className="flex aspect-square items-center justify-center rounded-2xl border border-[#073d5b]/10 bg-white p-4 shadow-sm"
              >
                <Image
                  src={mark.src}
                  width={mark.width}
                  height={mark.height}
                  alt=""
                  className="max-h-full w-auto object-contain"
                  unoptimized={mark.src.endsWith(".svg")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
