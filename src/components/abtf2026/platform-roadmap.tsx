import { BookOpen, CalendarRange, UsersRound } from "lucide-react";

import { abtf2026 } from "@/data/abtf2026";

const icons = [UsersRound, CalendarRange, BookOpen] as const;

export function PlatformRoadmap() {
  return (
    <section id="platform" className="bg-[#e8f0eb] py-20 sm:py-28">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-[#087c49]">
              المنصة الرقمية
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#073d5b] sm:text-5xl">
              معلومات المعرض في مكان واحد
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#073d5b]/58 lg:ms-auto">
            تُفعّل أقسام المنصة تباعًا عند اكتمال واعتماد محتواها الرسمي، مع
            بقاء هذه الصفحة المصدر الرقمي المخصص للمعرض.
          </p>
        </div>

        <ol className="mt-12 grid overflow-hidden rounded-2xl border border-[#073d5b]/12 bg-[#073d5b]/12 lg:grid-cols-3 lg:gap-px">
          {abtf2026.platformModules.map((module, index) => {
            const Icon = icons[index];
            return (
              <li key={module.number} className="bg-white p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <Icon className="size-7 text-[#087c49]" aria-hidden="true" />
                  <span className="font-latin text-xs font-black text-[#d3a528]">
                    {module.number}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-black text-[#073d5b]">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/50">
                  {module.description}
                </p>
                <p className="mt-8 inline-flex rounded-full bg-[#e8f0eb] px-3 py-1.5 text-xs font-black text-[#087c49]">
                  قيد التجهيز
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
