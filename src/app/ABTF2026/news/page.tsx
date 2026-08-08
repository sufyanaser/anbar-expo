import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { EmptyState } from "@/components/abtf2026/platform/empty-state";
import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule, newsEntries } from "@/data/abtf-platform";

const platformModule = getPlatformModule("news");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default function NewsPage() {
  return (
    <PlatformPageShell module={platformModule}>
      {newsEntries.length === 0 ? (
        <EmptyState
          title="لا توجد أخبار منشورة حتى الآن"
          description="ستظهر أخبار المعرض والبيانات والتحديثات الرسمية هنا بترتيب زمني بعد اعتمادها للنشر."
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsEntries.map((entry) => (
            <article
              key={entry.slug}
              className="flex min-h-64 flex-col rounded-3xl border border-[#073d5b]/10 bg-white p-6"
            >
              <time
                dateTime={entry.publishedAt}
                className="font-latin text-xs font-black text-[#087c49]"
                dir="ltr"
              >
                {entry.publishedAt}
              </time>
              <h2 className="mt-6 text-xl leading-8 font-black text-[#073d5b]">
                {entry.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#073d5b]/52">
                {entry.summary}
              </p>
              <Link
                href={`/ABTF2026/news/${entry.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#087c49]"
              >
                قراءة الخبر
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </PlatformPageShell>
  );
}
