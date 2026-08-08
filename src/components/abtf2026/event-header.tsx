import Image from "next/image";
import Link from "next/link";

import { abtf2026 } from "@/data/abtf2026";

const navigation = [
  { href: "/ABTF2026#about", label: "عن المعرض" },
  { href: "/ABTF2026#platform", label: "أقسام المنصة" },
  { href: "/ABTF2026#official", label: "الجهات الرسمية" },
] as const;

export function EventHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#042f49]/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-18 w-[min(100%-2rem,80rem)] items-center justify-between gap-6 sm:min-h-20">
        <Link
          href="/ABTF2026"
          className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
          aria-label="العودة إلى بداية الصفحة"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-white p-1.5">
            <Image
              src={abtf2026.eventMark}
              width={231}
              height={159}
              alt=""
              className="h-auto w-full"
              unoptimized
            />
          </span>
          <span>
            <span className="font-latin block text-sm font-black tracking-[0.18em]">
              {abtf2026.shortName}
            </span>
            <span className="mt-1 hidden text-[0.66rem] font-bold text-white/55 sm:block">
              معرض الأنبار الدولي للكتاب والتكنولوجيا
            </span>
          </span>
        </Link>

        <nav aria-label="التنقل داخل صفحة المعرض" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-sm font-bold text-white/68 transition-colors hover:bg-white/8 hover:text-white focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/ABTF2026#opening"
          className="rounded-sm border border-[#e5b834]/45 px-3 py-2 text-xs font-black text-[#f3ce65] transition-colors hover:bg-[#e5b834] hover:text-[#042f49] focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none sm:px-4 sm:text-sm"
        >
          16 / 09 / 2026
        </Link>
      </div>

      <div className="border-t border-white/10 bg-[#f7f5ef] text-[#073d5b]">
        <div className="mx-auto flex h-16 w-[min(100%-1rem,80rem)] items-center gap-3 overflow-x-auto sm:w-[min(100%-2rem,80rem)] lg:h-[4.5rem] lg:overflow-visible">
          <p className="hidden w-36 shrink-0 text-xs leading-5 font-black text-[#073d5b]/58 lg:block">
            الشعارات الواردة في المادة الرسمية للمعرض
          </p>
          <div
            dir="rtl"
            className="grid min-w-[37rem] flex-1 grid-cols-7 items-center gap-2 lg:min-w-0"
            aria-label="الشعارات الرسمية للمعرض"
          >
            {abtf2026.partnerMarks.map((mark) => (
              <div
                key={mark.src}
                className="flex h-12 items-center justify-center rounded-lg border border-[#073d5b]/8 bg-white px-2 py-1.5 lg:h-14"
              >
                <Image
                  src={mark.src}
                  width={mark.width}
                  height={mark.height}
                  alt={mark.alt}
                  className="max-h-full w-auto object-contain"
                  unoptimized={mark.src.endsWith(".svg")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
