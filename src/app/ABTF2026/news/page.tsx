import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { EmptyState } from "@/components/abtf2026/platform/empty-state";
import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule } from "@/data/abtf-platform";
import { getNewsEntries } from "@/sanity/content";

const platformModule = getPlatformModule("news");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default async function NewsPage() {
  const newsEntries = await getNewsEntries();

  return (
    <PlatformPageShell module={platformModule}>
      {newsEntries.length === 0 ? (
        <EmptyState
          title="أخبار المعرض"
          description="تجمع هذه الصفحة أخبار المعرض وبياناته وتغطيات فعالياته بترتيب زمني واضح."
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsEntries.map((entry) => (
            <article
              key={entry.slug}
              className="flex min-h-64 flex-col rounded-3xl border border-[#073d5b]/10 bg-white p-6"
            >
              {entry.image ? (
                <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden rounded-t-3xl bg-[#e8f0eb]">
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt || entry.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <time
                dateTime={entry.publishedAt}
                className="font-latin text-xs font-normal text-[#087c49]"
                dir="ltr"
              >
                {entry.publishedAt}
              </time>
              <h2 className="mt-6 text-xl leading-8 font-normal text-[#073d5b]">
                {entry.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#073d5b]/52">
                {entry.summary}
              </p>
              <Link
                href={`/ABTF2026/news/${entry.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-normal text-[#087c49]"
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
