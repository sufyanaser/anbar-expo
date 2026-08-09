import Image from "next/image";
import Link from "next/link";

import { abtf2026 } from "@/data/abtf2026";
import { platformModules } from "@/data/abtf-platform";

const mainLinks = [
  { href: "/ABTF2026", label: "الصفحة الرئيسية" },
  { href: "/ABTF2026#official", label: "الجهات الرسمية" },
  { href: "/ABTF2026/al-wasef", label: "الجهة المنظمة" },
  { href: "/ABTF2026/media-sponsor", label: "الراعي الإعلامي" },
] as const;

export function EventFooter() {
  return (
    <footer className="bg-[#021d30] text-white">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.35fr_0.65fr] lg:items-start">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                src={abtf2026.eventMark}
                width={231}
                height={159}
                alt=""
                className="h-auto w-full"
                unoptimized
              />
            </span>
            <div>
              <p className="font-latin text-sm tracking-[0.18em]">
                {abtf2026.shortName}
              </p>
              <p className="mt-2 max-w-sm text-xs leading-6 text-white/45">
                16 - 25 سبتمبر 2026
                <br />
                مدينة الرمادي، محافظة الأنبار
              </p>
            </div>
          </div>

          <nav aria-label="أقسام منصة المعرض">
            <p className="text-xs font-normal text-[#f0c64f]">أقسام المنصة</p>
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

          <nav aria-label="روابط رئيسية">
            <p className="text-xs text-[#f0c64f]">روابط رئيسية</p>
            <ul className="mt-4 space-y-3 text-xs">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-white/52 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
                  >
                    {item.label}
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
                  width={490}
                  height={490}
                  alt={`شعار ${abtf2026.platformOperator.name}`}
                  className="h-full w-auto object-contain"
                  unoptimized
                />
              </span>
              <div>
                <p className="text-xs leading-6 text-white/48">
                  {abtf2026.platformOperator.credit}
                </p>
                <p className="mt-1 text-sm font-normal text-white sm:text-base">
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
          <div className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5 text-[0.68rem] text-white/32 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 معرض الأنبار الدولي للكتاب والتكنولوجيا</p>
            <Link
              href="/ABTF2026#top"
              className="w-fit rounded-sm transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
            >
              العودة إلى أعلى الصفحة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
