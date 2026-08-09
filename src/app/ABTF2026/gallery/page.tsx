import type { Metadata } from "next";
import Image from "next/image";

import { PlatformPageShell } from "@/components/abtf2026/platform/platform-page-shell";
import { getPlatformModule } from "@/data/abtf-platform";
import { getGalleryEntries } from "@/sanity/content";

const platformModule = getPlatformModule("gallery");

export const metadata: Metadata = {
  title: platformModule.title,
  description: platformModule.description,
};

export default async function GalleryPage() {
  const galleryEntries = await getGalleryEntries();

  return (
    <PlatformPageShell module={platformModule}>
      <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
        {galleryEntries.map((entry) => (
          <figure
            key={entry.id}
            className="overflow-hidden rounded-3xl border border-[#073d5b]/10 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/8.5] overflow-hidden bg-[#021d30]">
              <Image
                src={entry.image}
                alt={entry.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-6">
              <p className="text-xs font-normal text-[#087c49]">
                صورة واجهة المنصة
              </p>
              <h2 className="mt-2 text-2xl font-normal text-[#073d5b]">
                {entry.title}
              </h2>
            </figcaption>
          </figure>
        ))}

        <aside className="rounded-3xl bg-[#e8f0eb] p-7">
          <p className="text-xs font-normal text-[#087c49]">ألبومات المعرض</p>
          <h2 className="mt-3 text-2xl font-normal text-[#073d5b]">
            توثيق متجدد لأيام المعرض
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#073d5b]/55">
            تُنظم الصور في ألبومات حسب اليوم أو الفعالية مع وصف وتاريخ واضحين.
          </p>
        </aside>
      </div>
    </PlatformPageShell>
  );
}
