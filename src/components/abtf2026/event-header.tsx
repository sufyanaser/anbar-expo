import Image from "next/image";
import Link from "next/link";
import { RadioTower } from "lucide-react";

import { getEventSettings, getPartnerMarks } from "@/sanity/content";

const navigation = [
  { href: "/ABTF2026#platform", label: "لوحة المتابعة" },
  { href: "/ABTF2026#services", label: "الخدمات الرقمية" },
  { href: "/ABTF2026/program", label: "البرنامج" },
  { href: "/ABTF2026/news", label: "الأخبار" },
  { href: "/ABTF2026/exhibitors", label: "العارضون" },
  { href: "/ABTF2026/visitor-guide", label: "دليل الزائر" },
  { href: "/ABTF2026#official", label: "الجهات الرسمية" },
] as const;

export async function EventHeader() {
  const [eventSettings, partnerMarks] = await Promise.all([
    getEventSettings(),
    getPartnerMarks(),
  ]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#042f49]/96 text-white shadow-[0_8px_30px_rgba(2,29,48,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 w-[min(100%-1rem,80rem)] items-center justify-between gap-3 py-2 sm:w-[min(100%-2rem,80rem)] sm:gap-6">
        <Link
          href="/ABTF2026"
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none sm:gap-3"
          aria-label="العودة إلى بداية الصفحة"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-white p-1.5 sm:size-12">
            <Image
              src={eventSettings.eventMark}
              width={231}
              height={159}
              alt=""
              className="h-auto w-full"
              unoptimized
            />
          </span>
          <span>
            <span className="font-latin block text-xs font-normal tracking-[0.16em] sm:text-sm sm:tracking-[0.18em]">
              {eventSettings.shortName}
            </span>
            <span className="mt-1 block max-w-36 text-[0.52rem] leading-4 font-bold text-white/55 sm:max-w-none sm:text-[0.66rem]">
              معرض الأنبار الدولي للكتاب والتكنولوجيا
            </span>
          </span>
        </Link>

        <div
          dir="rtl"
          className="grid shrink-0 grid-cols-4 items-center gap-1 sm:flex sm:min-w-0 sm:max-w-md sm:gap-2 sm:overflow-x-auto sm:py-1 sm:[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="شعارات المؤسسات والشركات المشاركة"
        >
          {partnerMarks.map((mark) =>
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

      <div className="border-t border-white/8 bg-[#03283f]/72">
        <div className="mx-auto flex w-[min(100%,80rem)] items-center gap-2 overflow-x-auto px-2 py-2 [scrollbar-width:none] sm:w-[min(100%-2rem,80rem)] sm:px-0 [&::-webkit-scrollbar]:hidden">
          <Link
            href="/ABTF2026/live"
            className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-lg border border-[#23b26d]/25 bg-[#23b26d]/10 px-3 text-xs font-bold text-[#86e8b4] transition-colors hover:bg-[#23b26d]/16 focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
          >
            <RadioTower className="size-4" aria-hidden="true" />
            البث المباشر
          </Link>
          <nav aria-label="التنقل داخل منصة المعرض">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block min-h-9 shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold text-white/58 transition-colors hover:bg-white/8 hover:text-white focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
