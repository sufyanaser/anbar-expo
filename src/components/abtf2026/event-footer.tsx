import Image from "next/image";

import { abtf2026 } from "@/data/abtf2026";

export function EventFooter() {
  return (
    <footer className="bg-[#021d30] text-white">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="flex flex-col gap-4 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-latin font-black tracking-[0.18em]">
            {abtf2026.shortName}
          </p>
          <p>المعلومات المنشورة مطابقة للمادة الرسمية المرفقة للمعرض.</p>
        </div>

        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/6 p-2.5">
                <Image
                  src={abtf2026.platformOperator.mark}
                  width={640}
                  height={640}
                  alt={`شعار ${abtf2026.platformOperator.name}`}
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </span>
              <div>
                <p className="text-xs leading-6 text-white/48">
                  {abtf2026.platformOperator.credit}
                </p>
                <p className="mt-1 text-sm font-black text-white sm:text-base">
                  {abtf2026.platformOperator.name}
                </p>
              </div>
            </div>
            <p
              className="font-latin text-[0.64rem] font-bold tracking-[0.16em] text-[#f0c64f]/72"
              dir="ltr"
            >
              MEDIA · DIGITAL · PLATFORM OPERATIONS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
