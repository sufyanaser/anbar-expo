import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule } from "@/data/abtf-platform";
import { getNewsEntries, getNewsEntry } from "@/sanity/content";

const platformModule = getPlatformModule("news");

export async function generateStaticParams() {
  const entries = await getNewsEntries();
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getNewsEntry(slug);
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
  const entry = await getNewsEntry(slug);
  if (!entry) notFound();

  return (
    <PlatformPageShell module={platformModule}>
      <article className="mx-auto max-w-3xl rounded-3xl border border-[#073d5b]/10 bg-white p-7 sm:p-10">
        {entry.image ? (
          <div className="relative -mx-7 -mt-7 mb-8 aspect-[16/9] overflow-hidden rounded-t-3xl bg-[#e8f0eb] sm:-mx-10 sm:-mt-10">
            <Image
              src={entry.image}
              alt={entry.imageAlt || entry.title}
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
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
        <h2 className="mt-6 text-3xl leading-tight font-normal text-[#073d5b] sm:text-4xl">
          {entry.title}
        </h2>
        <p className="mt-6 text-base leading-9 text-[#073d5b]/62">
          {entry.summary}
        </p>
        {entry.body?.length ? (
          <div className="mt-8 space-y-5 text-base leading-9 text-[#073d5b]/72 [&_a]:font-bold [&_a]:text-[#087c49] [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:pt-3 [&_h3]:text-xl [&_h3]:font-bold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pr-5">
            <PortableText value={[...entry.body]} />
          </div>
        ) : null}
      </article>
    </PlatformPageShell>
  );
}
