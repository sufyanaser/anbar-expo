import Image from "next/image";

import { abtf2026 } from "@/data/abtf2026";

const navigation = [
  { href: "#about", label: "عن المعرض" },
  { href: "#opening", label: "موعد الافتتاح" },
  { href: "#official", label: "الجهات الرسمية" },
  { href: "#platform", label: "المنصة الرقمية" },
] as const;

export function EventHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#042f49]/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-20 w-[min(100%-2rem,80rem)] items-center justify-between gap-6">
        <a
          href="#top"
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
        </a>

        <nav aria-label="التنقل داخل صفحة المعرض" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-sm font-bold text-white/68 transition-colors hover:bg-white/8 hover:text-white focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#opening"
          className="rounded-sm border border-[#e5b834]/45 px-3 py-2 text-xs font-black text-[#f3ce65] transition-colors hover:bg-[#e5b834] hover:text-[#042f49] focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none sm:px-4 sm:text-sm"
        >
          16 / 09 / 2026
        </a>
      </div>
    </header>
  );
}
