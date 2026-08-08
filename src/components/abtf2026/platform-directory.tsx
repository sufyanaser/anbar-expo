import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ModuleIcon } from "@/components/abtf2026/platform/module-icon";
import { platformModules } from "@/data/abtf-platform";

export function PlatformDirectory() {
  return (
    <section id="platform" className="bg-[#e8f0eb] py-20 sm:py-28">
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-normal tracking-[0.14em] text-[#087c49]">
              المنصة الرقمية
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-normal text-[#073d5b] sm:text-5xl">
              خدمات المعرض في مكان واحد
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#073d5b]/60 lg:ms-auto">
            تابع التغطية والبرنامج والأخبار، واستكشف الصور والعارضين وخدمات
            الوصول داخل المعرض من واجهة رقمية موحدة.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platformModules.map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className={`group flex min-h-72 flex-col rounded-3xl border p-6 transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#d3a528] focus-visible:outline-none sm:p-7 ${
                module.featured
                  ? "border-[#0a7b49]/35 bg-[#073d5b] text-white shadow-xl shadow-[#073d5b]/12 md:col-span-2"
                  : "border-[#073d5b]/10 bg-white text-[#073d5b] shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${
                    module.featured
                      ? "bg-white/10 text-[#f0c64f]"
                      : "bg-[#e8f0eb] text-[#087c49]"
                  }`}
                >
                  <ModuleIcon name={module.icon} className="size-6" />
                </span>
                <span
                  className={`rounded-full px-3 py-1.5 text-[0.68rem] font-normal ${
                    module.featured
                      ? "bg-[#f0c64f]/12 text-[#f0c64f]"
                      : "bg-[#e8f0eb] text-[#087c49]"
                  }`}
                >
                  {module.statusLabel}
                </span>
              </div>

              <div className="mt-auto pt-12">
                <p
                  className={`text-xs font-normal tracking-[0.12em] ${
                    module.featured ? "text-[#f0c64f]" : "text-[#087c49]"
                  }`}
                >
                  {module.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-normal">{module.title}</h3>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    module.featured ? "text-white/58" : "text-[#073d5b]/55"
                  }`}
                >
                  {module.description}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-normal ${
                    module.featured ? "text-white" : "text-[#087c49]"
                  }`}
                >
                  فتح القسم
                  <ArrowLeft
                    className="size-4 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
