import type { Metadata } from "next";
import { RadioTower, Signal, WifiOff } from "lucide-react";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule, liveStreamConfig } from "@/data/abtf-platform";

const platformModule = getPlatformModule("live");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function LivePage() {
  return (
    <PlatformPageShell module={platformModule}>
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        <section className="overflow-hidden rounded-3xl border border-[#073d5b]/10 bg-[#021d30] text-white shadow-xl shadow-[#073d5b]/10">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-white/25" />
              <p className="text-sm font-black">{liveStreamConfig.title}</p>
            </div>
            <span className="rounded-full bg-white/8 px-3 py-1.5 text-[0.68rem] font-black text-white/50">
              غير متصل
            </span>
          </div>

          {liveStreamConfig.sourceUrl ? (
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              poster={liveStreamConfig.poster}
              src={liveStreamConfig.sourceUrl}
            >
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          ) : (
            <div className="flex aspect-video min-h-64 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(8,124,73,0.2),transparent_55%)] p-8 text-center">
              <div>
                <span className="mx-auto flex size-20 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[#f0c64f]">
                  <WifiOff className="size-9" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-2xl font-black">
                  لم يبدأ البث المباشر بعد
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/52">
                  ستظهر التغطية هنا فور اعتماد رابط المصدر وربطه بواجهة البث.
                </p>
              </div>
            </div>
          )}
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-[#073d5b]/10 bg-white p-6">
            <Signal className="size-6 text-[#087c49]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-black text-[#073d5b]">
              بنية اتصال مرنة
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#073d5b]/55">
              يدعم القسم إدخال رابط HLS أو مشغل مزود البث دون تغيير تصميم
              الصفحة.
            </p>
          </div>
          <div className="rounded-3xl border border-[#073d5b]/10 bg-white p-6">
            <RadioTower className="size-6 text-[#087c49]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-black text-[#073d5b]">
              حالة بث واضحة
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#073d5b]/55">
              حالات جاهزة لعرض غير متصل، قريبًا، مباشر الآن، وانتهاء البث.
            </p>
          </div>
        </aside>
      </div>
    </PlatformPageShell>
  );
}
