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
      <div className="mx-auto flex min-h-20 w-[min(100%-1rem,80rem)] items-center justify-between gap-3 py-2 sm:w-[min(100%-2rem,80rem)] sm:gap-6">
        <Link
          href="/ABTF2026"
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none sm:gap-3"
          aria-label="العودة إلى بداية الصفحة"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-white p-1.5 sm:size-12">
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
            <span className="font-latin block text-xs font-normal tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
              {abtf2026.shortName}
            </span>
            <span className="mt-1 block max-w-36 text-[0.52rem] leading-4 font-bold text-white/55 sm:max-w-none sm:text-[0.66rem]">
              معرض الأنبار الدولي للكتاب والتكنولوجيا
            </span>
          </span>
        </Link>

        <nav aria-label="التنقل داخل صفحة المعرض" className="hidden xl:block">
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

        <div
          dir="rtl"
          className="grid shrink-0 grid-cols-4 items-center gap-1 sm:flex sm:min-w-0 sm:max-w-md sm:gap-2 sm:overflow-x-auto sm:py-1 sm:[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="شعارات المؤسسات والشركات المشاركة"
        >
          {abtf2026.partnerMarks.map((mark) =>
            mark.href ? (
              <Link
                key={mark.src}
                href={mark.href}
                className="flex size-8 shrink-0 items-center justify-center rounded-md border border-[#e5b834]/45 bg-white p-1 transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none sm:size-11 sm:rounded-lg sm:p-1.5 xl:size-12"
                aria-label={`فتح صفحة ${mark.alt}`}
              >
                <Image
                  src={mark.src}
                  width={mark.width}
                  height={mark.height}
                  alt={mark.alt}
                  className="max-h-full w-auto object-contain"
                  unoptimized={mark.src.endsWith(".svg")}
                />
              </Link>
            ) : (
              <div
                key={mark.src}
                className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white p-1 sm:size-11 sm:rounded-lg sm:p-1.5 xl:size-12"
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
            ),
          )}
        </div>
      </div>
    </header>
  );
}
