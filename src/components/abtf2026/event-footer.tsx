import Image from "next/image";
import Link from "next/link";

import { abtf2026 } from "@/data/abtf2026";
import { platformModules } from "@/data/abtf-platform";

export function EventFooter() {
  return (
    <footer className="bg-[#021d30] text-white">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-8 py-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <p className="font-latin text-sm font-black tracking-[0.18em]">
              {abtf2026.shortName}
            </p>
            <p className="mt-3 max-w-sm text-xs leading-6 text-white/45">
              16 - 25 سبتمبر 2026 · مدينة الرمادي، محافظة الأنبار
            </p>
          </div>

          <nav aria-label="أقسام منصة المعرض">
            <p className="text-xs font-black text-[#f0c64f]">أقسام المنصة</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-xs sm:grid-cols-3 lg:grid-cols-4">
              {platformModules.map((module) => (
                <li key={module.id}>
                  <Link
                    href={module.href}
                    className="rounded-sm text-white/52 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
                  >
                    {module.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
