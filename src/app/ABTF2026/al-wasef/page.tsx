import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarDays,
  Check,
  Factory,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Theater,
  UserRound,
  UsersRound,
} from "lucide-react";

import { alWasef } from "@/data/al-wasef";
import { getManagedPage } from "@/sanity/content";

export const metadata: Metadata = {
  title: alWasef.name,
  description: alWasef.role,
  alternates: { canonical: alWasef.href },
  robots: { index: false, follow: false, nocache: true },
};

const experienceIcons = [BookOpenText, Factory, Theater, UsersRound] as const;

export default async function AlWasefPage() {
  const managedPage = await getManagedPage("al-wasef");
  const pageTitle = managedPage?.title || alWasef.name;
  const pageIntro = managedPage?.intro || alWasef.legalName;
  const pageLogo = managedPage?.logo || alWasef.mark;
  const contactEmail = managedPage?.contactEmail || alWasef.email;
  const contactPhone = managedPage?.contactPhone || alWasef.phones[0].label;
  const contactPhoneHref = managedPage?.contactPhone
    ? `tel:${managedPage.contactPhone.replace(/[^+\d]/g, "")}`
    : alWasef.phones[0].href;

  return (
    <div className="bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-[#03283f] px-4 py-16 text-white sm:py-24">
        <div
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_24%,rgba(229,184,52,0.2),transparent_34%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-15"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="mx-auto grid w-[min(100%,80rem)] items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <Link
              href="/ABTF2026#official"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-white/66 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
              العودة إلى الجهات الرسمية
            </Link>
            <p className="mt-10 text-xs font-normal tracking-[0.15em] text-[#f0c64f]">
              الجهة المنظمة
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.3] font-black sm:text-6xl">
              {pageTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg sm:leading-9">
              {pageIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#e5b834] px-5 text-sm font-normal text-[#03283f] transition-colors hover:bg-[#f0c64f] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <Mail className="size-4" aria-hidden="true" />
                التواصل مع الشركة
              </a>
              <a
                href={contactPhoneHref}
                className="font-latin inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/18 bg-white/7 px-5 text-sm font-normal text-white transition-colors hover:bg-white/12 focus-visible:ring-2 focus-visible:ring-[#e5b834] focus-visible:outline-none"
                dir="ltr"
              >
                <Phone className="size-4" aria-hidden="true" />
                {contactPhone}
              </a>
            </div>
          </div>

          <div className="flex size-52 items-center justify-center rounded-[2rem] border border-[#e5b834]/45 bg-[linear-gradient(145deg,#fff9e5,#e8ca71)] p-8 shadow-2xl shadow-black/25 sm:size-64">
            <Image
              src={pageLogo}
              width={2328}
              height={2398}
              alt={`شعار ${pageTitle}`}
              className="max-h-full w-auto object-contain"
              preload
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid w-[min(100%,80rem)] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-[#073d5b]/10 bg-white p-7 shadow-sm sm:p-10">
            <Building2 className="size-7 text-[#b98621]" aria-hidden="true" />
            <p className="mt-7 text-xs font-normal tracking-[0.14em] text-[#087c49]">
              عن الشركة
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-normal text-[#073d5b] sm:text-4xl">
              خبرة تصنع منصات للفرص والمعرفة
            </h2>
            <div className="mt-6 space-y-5 text-base leading-9 text-[#073d5b]/65">
              {managedPage?.body?.length ? (
                <PortableText value={managedPage.body} />
              ) : (
                alWasef.profile.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))
              )}
            </div>
            <blockquote className="mt-8 rounded-2xl border-s-4 border-[#c89627] bg-[#fff8df] p-6 text-lg leading-9 font-normal text-[#493407]">
              {alWasef.vision}
            </blockquote>
          </article>

          <aside className="rounded-3xl bg-[#073d5b] p-7 text-white shadow-xl shadow-[#073d5b]/12 sm:p-9">
            <p className="text-xs font-normal tracking-[0.14em] text-[#f0c64f]">
              التواصل والاستفسار
            </p>
            <div className="mt-8 flex items-start gap-4 border-b border-white/10 pb-6">
              <UserRound
                className="mt-1 size-5 shrink-0 text-[#f0c64f]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs text-white/45">المدير العام</p>
                <p className="mt-2 font-normal">{alWasef.generalManager}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4 border-b border-white/10 pb-6">
              <Phone
                className="mt-1 size-5 shrink-0 text-[#f0c64f]"
                aria-hidden="true"
              />
              <div className="space-y-2">
                {alWasef.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="font-latin block rounded-sm text-sm font-bold text-white/74 hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
                    dir="ltr"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <Mail
                className="mt-1 size-5 shrink-0 text-[#f0c64f]"
                aria-hidden="true"
              />
              <a
                href={`mailto:${contactEmail}`}
                className="font-latin rounded-sm text-sm font-bold text-white/74 hover:text-white focus-visible:ring-2 focus-visible:ring-[#f0c64f] focus-visible:outline-none"
                dir="ltr"
              >
                {contactEmail}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#e8f0eb] px-4 py-16 sm:py-24">
        <div className="mx-auto w-[min(100%,80rem)]">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-[#073d5b] p-7 text-white sm:p-9">
              <CalendarDays
                className="size-7 text-[#f0c64f]"
                aria-hidden="true"
              />
              <p className="mt-7 text-xs font-normal text-[#f0c64f]">
                الحدث الذي تنظمه الشركة
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-normal">
                {alWasef.event.title}
              </h2>
              <p className="font-latin mt-7 text-lg font-normal text-white/78">
                {alWasef.event.dates}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/62">
                <MapPin className="size-4" aria-hidden="true" />
                {alWasef.event.location}
              </p>
            </div>

            <div className="rounded-3xl border border-[#073d5b]/10 bg-white p-7 sm:p-9">
              <Sparkles className="size-7 text-[#b98621]" aria-hidden="true" />
              <p className="mt-7 text-xs font-normal text-[#087c49]">
                رؤية التنظيم
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-normal text-[#073d5b]">
                ملتقى يجمع الثقافة والصناعة والاقتصاد
              </h2>
              <p className="mt-5 text-base leading-9 text-[#073d5b]/62">
                يأتي تنظيم الحدث في محافظة الأنبار ليكون نقطة تحول تجمع الثقافة
                والصناعة والاقتصاد الدولي تحت سقف واحد، وتربط الأسواق المحلية
                والدولية بعلاقات وفرص جديدة.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {alWasef.experiences.map((experience, index) => {
              const Icon = experienceIcons[index];
              return (
                <article
                  key={experience.title}
                  className="rounded-3xl border border-[#073d5b]/10 bg-white p-6"
                >
                  <Icon className="size-6 text-[#b98621]" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-normal text-[#073d5b]">
                    {experience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#073d5b]/56">
                    {experience.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid w-[min(100%,80rem)] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-normal tracking-[0.14em] text-[#087c49]">
              للمشاركين والعارضين
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-normal text-[#073d5b] sm:text-5xl">
              ما تقدمه شركة الواصف للمشاركين
            </h2>
            <p className="mt-5 text-base leading-8 text-[#073d5b]/60">
              منظومة تنظيم وتسويق وعلاقات أعمال مصممة لتوسيع حضور المشاركين
              وتعزيز فرص التواصل والاستثمار.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {alWasef.participantBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-[#073d5b]/10 bg-white p-5 text-sm leading-7 font-bold text-[#073d5b] shadow-sm"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fff1bd] text-[#7a5209]">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
