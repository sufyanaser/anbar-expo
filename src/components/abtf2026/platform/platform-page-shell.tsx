import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ModuleIcon } from "@/components/abtf2026/platform/module-icon";
import { platformModules } from "@/data/abtf-platform";
import type { PlatformModule } from "@/types/abtf-platform";

export function PlatformPageShell({
  module,
  children,
}: {
  module: PlatformModule;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-[#03283f] text-white">
        <div
          className="absolute inset-0 -z-10 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="mx-auto w-[min(100%-2rem,80rem)] py-12 sm:py-16">
          <Link
            href="/ABTF2026#platform"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white/58 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
            العودة إلى أقسام المنصة
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[#f0c64f]">
                  <ModuleIcon name={module.icon} className="size-7" />
                </span>
                <div>
                  <p className="text-xs font-normal tracking-[0.12em] text-[#f0c64f]">
                    {module.eyebrow}
                  </p>
                  <p className="mt-1 text-xs font-bold text-white/48">
                    منصة ABTF 2026 الرقمية
                  </p>
                </div>
              </div>
              <h1 className="mt-7 text-4xl leading-tight font-black sm:text-6xl">
                {module.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg sm:leading-9">
                {module.description}
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f0c64f]/30 bg-[#f0c64f]/10 px-4 py-2 text-xs text-[#f0c64f]">
              <span className="size-1.5 rounded-full bg-[#f0c64f]" />
              {module.statusLabel}
            </span>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="خصائص القسم">
            {module.capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-bold text-white/62"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav
        aria-label="التنقل بين أقسام المنصة"
        className="border-b border-[#073d5b]/10 bg-white"
      >
        <ul className="mx-auto flex w-[min(100%,80rem)] items-stretch overflow-x-auto px-2 [scrollbar-width:none] sm:w-[min(100%-2rem,80rem)] sm:px-0 [&::-webkit-scrollbar]:hidden">
          {platformModules.map((item) => {
            const isCurrent = item.id === module.id;
            return (
              <li key={item.id} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`flex min-h-14 items-center gap-2 border-b-2 px-4 text-xs font-bold transition-colors focus-visible:ring-2 focus-visible:ring-[#d3a528] focus-visible:outline-none ${
                    isCurrent
                      ? "border-[#087c49] bg-[#e8f0eb]/60 text-[#073d5b]"
                      : "border-transparent text-[#073d5b]/48 hover:bg-[#e8f0eb]/40 hover:text-[#073d5b]"
                  }`}
                >
                  <ModuleIcon name={item.icon} className="size-4" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-auto w-[min(100%-2rem,80rem)] py-12 sm:py-16">
        {children}
      </div>
    </div>
  );
}
