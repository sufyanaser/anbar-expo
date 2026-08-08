import type { Metadata } from "next";
import { LayoutPanelTop, ShieldCheck } from "lucide-react";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { advertisingPlacements, getPlatformModule } from "@/data/abtf-platform";

const platformModule = getPlatformModule("advertising");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function AdvertisingPage() {
  return (
    <PlatformPageShell module={platformModule}>
      <div className="rounded-3xl bg-[#073d5b] p-7 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <ShieldCheck className="size-7 text-[#f0c64f]" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-black">
              ظهور منظم دون إرباك الزائر
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-8 text-white/58 lg:ms-auto">
            تُفصل المساحات الإعلانية عن الأخبار والمعلومات الرسمية بصريًا، مع
            تحديد مدة الحملة ووجهتها ومكان ظهورها بوضوح.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {advertisingPlacements.map((placement) => (
          <article
            key={placement.id}
            className="rounded-3xl border border-[#073d5b]/10 bg-white p-6"
          >
            <LayoutPanelTop
              className="size-6 text-[#087c49]"
              aria-hidden="true"
            />
            <p className="mt-6 text-xs font-black text-[#d3a528]">
              {placement.ratio}
            </p>
            <h2 className="mt-2 text-xl font-black text-[#073d5b]">
              {placement.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#073d5b]/52">
              {placement.location}
            </p>
          </article>
        ))}
      </div>
    </PlatformPageShell>
  );
}
