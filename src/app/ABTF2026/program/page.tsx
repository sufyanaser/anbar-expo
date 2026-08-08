import type { Metadata } from "next";
import { CalendarClock, MapPin, RefreshCw } from "lucide-react";

import { EmptyState } from "@/components/abtf2026/platform/empty-state";
import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule, programEntries } from "@/data/abtf-platform";

const platformModule = getPlatformModule("program");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function ProgramPage() {
  return (
    <PlatformPageShell module={platformModule}>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: CalendarClock,
            title: "جدول حسب اليوم",
            text: "تجميع الفعاليات زمنيًا مع بداية ونهاية كل نشاط.",
          },
          {
            icon: MapPin,
            title: "المكان والمنصة",
            text: "ربط كل فعالية بقاعة أو بناية عند اعتماد المخطط.",
          },
          {
            icon: RefreshCw,
            title: "تحديث مستمر",
            text: "تعديل الموعد أو الحالة دون تغيير الصفحة أو مسارها.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#073d5b]/10 bg-white p-6"
          >
            <item.icon className="size-6 text-[#087c49]" aria-hidden="true" />
            <h2 className="mt-5 text-lg font-black text-[#073d5b]">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#073d5b]/52">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      {programEntries.length === 0 ? (
        <EmptyState
          title="برنامج الفعاليات بانتظار الاعتماد"
          description="سيظهر الجدول اليومي هنا فور تزويد المنصة بمواعيد الجلسات والندوات والأنشطة ومواقعها الرسمية."
        />
      ) : (
        <ol className="space-y-4">
          {programEntries.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-5 rounded-2xl border border-[#073d5b]/10 bg-white p-6 md:grid-cols-[10rem_1fr_auto] md:items-center"
            >
              <time
                dateTime={`${entry.date}T${entry.startsAt}`}
                className="font-latin text-sm font-black text-[#087c49]"
                dir="ltr"
              >
                {entry.startsAt}
                {entry.endsAt ? ` — ${entry.endsAt}` : ""}
              </time>
              <div>
                <h2 className="text-xl font-black text-[#073d5b]">
                  {entry.title}
                </h2>
                <p className="mt-2 text-sm text-[#073d5b]/52">
                  {[entry.location, entry.speaker].filter(Boolean).join(" · ")}
                </p>
              </div>
              <span className="w-fit rounded-full bg-[#e8f0eb] px-3 py-1.5 text-xs font-black text-[#087c49]">
                مجدولة
              </span>
            </li>
          ))}
        </ol>
      )}
    </PlatformPageShell>
  );
}
