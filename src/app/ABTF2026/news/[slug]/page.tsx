import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule, newsEntries } from "@/data/abtf-platform";

const platformModule = getPlatformModule("news");

export function generateStaticParams() {
  return newsEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = newsEntries.find((item) => item.slug === slug);
  return entry
    ? { title: entry.title, description: entry.summary }
    : { title: "الخبر غير موجود" };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = newsEntries.find((item) => item.slug === slug);
  if (!entry) notFound();

  return (
    <PlatformPageShell module={platformModule}>
      <article className="mx-auto max-w-3xl rounded-3xl border border-[#073d5b]/10 bg-white p-7 sm:p-10">
        <time
          dateTime={entry.publishedAt}
          className="font-latin text-xs font-black text-[#087c49]"
          dir="ltr"
        >
          {entry.publishedAt}
        </time>
        <h2 className="mt-6 text-3xl leading-tight font-black text-[#073d5b] sm:text-4xl">
          {entry.title}
        </h2>
        <p className="mt-6 text-base leading-9 text-[#073d5b]/62">
          {entry.summary}
        </p>
      </article>
    </PlatformPageShell>
  );
}
