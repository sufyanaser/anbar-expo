import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Megaphone, MessagesSquare, Radio } from "lucide-react";

import { abtf2026 } from "@/data/abtf2026";
import { getManagedPage } from "@/sanity/content";

export const metadata: Metadata = {
  title: abtf2026.mediaSponsor.label,
  description: `صفحة ${abtf2026.mediaSponsor.name} بصفتها الراعي الإعلامي والوكيل الإعلاني للمعرض.`,
  alternates: { canonical: abtf2026.mediaSponsor.href },
  robots: { index: false, follow: false, nocache: true },
};

const informationSections = [
  {
    title: "تفاصيل الرعاية الإعلامية",
    description:
      "تنسيق الحضور الإعلامي للمعرض وتوحيد رسائله وهويته عبر القنوات والمنصات الرقمية.",
    icon: Radio,
  },
  {
    title: "التواصل",
    description:
      "إدارة التواصل الإعلامي والإعلاني مع الجهات المشاركة والشركاء ضمن مسار موحد.",
    icon: MessagesSquare,
  },
  {
    title: "آلية الإعلانات",
    description:
      "تنظيم المساحات الإعلانية داخل المنصة وتنسيق مدد الحملات وموادها ومواقع ظهورها.",
    icon: Megaphone,
  },
] as const;

export default async function MediaSponsorPage() {
  const managedPage = await getManagedPage("media-sponsor");
  const pageTitle = managedPage?.title || abtf2026.mediaSponsor.name;
  const pageLogo = managedPage?.logo || abtf2026.mediaSponsor.mark;

  return (
    <div className="bg-[#f7f5ef]">
      <section className="relative overflow-hidden bg-[linear-gradient(110deg,#00a58f_0%,#006f7f_46%,#003b46_100%)] px-4 py-16 text-white sm:py-24">
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_40%,rgba(255,255,255,0.06))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-[min(100%,80rem)] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Link
              href="/ABTF2026#official"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white/76 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
              العودة إلى الجهات الرسمية
            </Link>
            <p className="mt-10 text-sm font-normal tracking-[0.14em] text-white/72">
              {abtf2026.mediaSponsor.label}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.3] font-black sm:text-6xl">
              {pageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {managedPage?.intro ||
                "تعرف على دور الراعي الإعلامي والوكيل الإعلاني في إدارة حضور المعرض عبر الإعلام والمنصات الرقمية."}
            </p>
          </div>

          <div className="relative flex size-48 items-center justify-center overflow-hidden rounded-[2rem] border border-white/85 bg-[linear-gradient(145deg,rgba(255,255,255,0.94)_0%,rgba(248,250,252,0.82)_50%,rgba(226,232,240,0.68)_100%)] p-7 shadow-[0_24px_65px_rgba(0,31,38,0.26),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent sm:size-56">
            <Image
              src={pageLogo}
              width={490}
              height={490}
              alt={`شعار ${pageTitle}`}
              className="relative h-auto w-full drop-shadow-[0_10px_18px_rgba(0,75,82,0.16)]"
              preload
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto w-[min(100%,80rem)]">
          <div className="grid gap-5 lg:grid-cols-3">
            {informationSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[#073d5b]/10 bg-white p-7 shadow-sm sm:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#eaf4f0] text-[#087c49]">
                  <section.icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-2xl font-normal text-[#073d5b]">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-black/55">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {managedPage?.body?.length ? (
        <section className="px-4 pb-16 sm:pb-24">
          <article className="mx-auto w-[min(100%,80rem)] rounded-3xl border border-[#073d5b]/10 bg-white p-7 text-base leading-9 text-[#073d5b]/65 shadow-sm sm:p-10">
            <PortableText value={managedPage.body} />
          </article>
        </section>
      ) : null}
    </div>
  );
}
