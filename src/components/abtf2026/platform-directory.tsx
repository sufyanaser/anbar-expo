import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ModuleIcon } from "@/components/abtf2026/platform/module-icon";
import { getPlatformModules } from "@/sanity/content";

export async function PlatformDirectory() {
  const platformModules = await getPlatformModules();
  return (
    <section
      id="services"
      className="scroll-mt-32 bg-[#edf3ef] py-20 sm:scroll-mt-36 sm:py-24"
    >
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-xs tracking-[0.14em] text-[#087c49]">
              دليل الخدمات
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-bold text-[#073d5b] sm:text-5xl">
              الخدمات الرقمية للمعرض
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#073d5b]/60 lg:ms-auto">
            سبعة أقسام مترابطة للتغطية والبرنامج والأخبار والصور والعارضين
            والإعلانات وخدمات الوصول داخل المعرض.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {platformModules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className={`group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#d3a528] focus-visible:outline-none ${
                module.featured
                  ? "border-[#0a7b49]/35 bg-[#073d5b] text-white shadow-xl shadow-[#073d5b]/12 md:col-span-2"
                  : "border-[#073d5b]/10 bg-white text-[#073d5b] shadow-sm hover:border-[#087c49]/25 hover:shadow-md"
              }`}
            >
              <span
                className={`font-latin absolute end-6 bottom-5 text-5xl leading-none ${
                  module.featured ? "text-white/4" : "text-[#073d5b]/4"
                }`}
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex size-11 items-center justify-center rounded-xl ${
                    module.featured
                      ? "bg-white/10 text-[#f0c64f]"
                      : "bg-[#e8f0eb] text-[#087c49]"
                  }`}
                >
                  <ModuleIcon name={module.icon} className="size-6" />
                </span>
                <span
                  className={`rounded-full px-3 py-1.5 text-[0.68rem] ${
                    module.featured
                      ? "bg-[#f0c64f]/12 text-[#f0c64f]"
                      : "bg-[#e8f0eb] text-[#087c49]"
                  }`}
                >
                  {module.statusLabel}
                </span>
              </div>

              <div className="relative mt-auto pt-10">
                <p
                  className={`text-xs tracking-[0.12em] ${
                    module.featured ? "text-[#f0c64f]" : "text-[#087c49]"
                  }`}
                >
                  {module.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{module.title}</h3>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    module.featured ? "text-white/58" : "text-[#073d5b]/55"
                  }`}
                >
                  {module.description}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${
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
