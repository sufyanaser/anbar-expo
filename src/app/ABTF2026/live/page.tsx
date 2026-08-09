import type { Metadata } from "next";
import { RadioTower, Signal, WifiOff } from "lucide-react";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule } from "@/data/abtf-platform";
import { getLiveStream } from "@/sanity/content";

const platformModule = getPlatformModule("live");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

function getYouTubeEmbedUrl(sourceUrl: string | null) {
  if (!sourceUrl) return null;
  try {
    const url = new URL(sourceUrl);
    const videoId = url.hostname.includes("youtu.be")
      ? url.pathname.slice(1)
      : url.searchParams.get("v") ||
        url.pathname.split("/").filter(Boolean).pop();
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
      : null;
  } catch {
    return null;
  }
}

export default async function LivePage() {
  const liveStreamConfig = await getLiveStream();
  const isLive = liveStreamConfig.status === "live";
  const statusLabel = {
    offline: "غير متصل",
    upcoming: "قريباً",
    live: "مباشر الآن",
    ended: "انتهى البث",
  }[liveStreamConfig.status];
  const youtubeEmbedUrl =
    liveStreamConfig.sourceType === "youtube"
      ? getYouTubeEmbedUrl(liveStreamConfig.sourceUrl)
      : null;

  return (
    <PlatformPageShell module={platformModule}>
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        <section className="overflow-hidden rounded-3xl border border-[#073d5b]/10 bg-[#021d30] text-white shadow-xl shadow-[#073d5b]/10">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-white/25" />
              <p className="text-sm font-normal">{liveStreamConfig.title}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1.5 text-[0.68rem] font-normal ${isLive ? "bg-[#23b26d]/18 text-[#86e8b4]" : "bg-white/8 text-white/50"}`}
            >
              {statusLabel}
            </span>
          </div>

          {youtubeEmbedUrl ? (
            <iframe
              className="aspect-video w-full bg-black"
              src={youtubeEmbedUrl}
              title={liveStreamConfig.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : liveStreamConfig.sourceUrl &&
            liveStreamConfig.sourceType !== "youtube" ? (
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
                <h2 className="mt-6 text-2xl font-normal">
                  لم يبدأ البث المباشر بعد
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/52">
                  يبدأ عرض التغطية من هنا مع انطلاق البث الرسمي للمعرض.
                </p>
              </div>
            </div>
          )}
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-[#073d5b]/10 bg-white p-6">
            <Signal className="size-6 text-[#087c49]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-normal text-[#073d5b]">
              مشاهدة من مختلف الأجهزة
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#073d5b]/55">
              تابع التغطية من الهاتف أو الحاسوب بواجهة واضحة وسهلة الاستخدام.
            </p>
          </div>
          <div className="rounded-3xl border border-[#073d5b]/10 bg-white p-6">
            <RadioTower className="size-6 text-[#087c49]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-normal text-[#073d5b]">
              حالة البث
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#073d5b]/55">
              {statusLabel}
              {liveStreamConfig.currentProgram
                ? ` · ${liveStreamConfig.currentProgram}`
                : " · توضح الصفحة ما إذا كان البث قريبًا أو مباشرًا أو قد انتهى."}
            </p>
          </div>
        </aside>
      </div>
    </PlatformPageShell>
  );
}
