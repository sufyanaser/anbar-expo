import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { events } from "@/data/events";

import {
  AboutRibbons,
  FlowIn,
  FlowOut,
  FooterRibbons,
  HeroRibbons,
  RibbonMotion,
} from "./home-ribbons";
import s from "./home.module.css";

const LOGO = "/brand/anbar-expo/anbar-expo-26.svg";
const MARK = "/brand/anbar-expo/anbar-expo-mark-720.png";

const statusLabels = {
  upcoming: "قريباً",
  active: "جاري الآن",
  completed: "منتهٍ",
} as const;

const PILLARS = [
  { k: "01", t: "منصة موحّدة", d: "بوابة واحدة لكل معارض ومؤتمرات الأنبار." },
  { k: "02", t: "هويات مستقلة", d: "كل حدث بصفحته ولغته البصرية الخاصة." },
  {
    k: "03",
    t: "تجربة رقمية",
    d: "تسجيل العارضين والرعاة والزوار من مكان واحد.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "ANBAR EXPO | منصة فعاليات الأنبار" },
  description:
    "المظلة الرقمية لفعاليات ومعارض ومؤتمرات الأنبار، بهوية مستقلة لكل حدث.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const count = String(events.length).padStart(2, "0");

  return (
    <div className={s.page}>
      <RibbonMotion />

      <header className={s.header}>
        <div className={`${s.wrap} ${s.headRow}`}>
          <Link href="/" className={s.brand} aria-label="ANBAR EXPO 2026">
            {/* Original logo file (vector export of the supplied PDF) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO}
              alt="ANBAR EXPO 26"
              width={1587}
              height={629}
              className={s.brandImg}
            />
          </Link>
          <nav className={s.nav} aria-label="التنقل الرئيسي">
            <a href="#events">الفعاليات</a>
            <a href="#about">عن المنصة</a>
            <span className={s.navPill}>
              <i className={s.navKnot} aria-hidden="true" />
              الرمادي · 2026
            </span>
          </nav>
        </div>
        <div className={s.headRibbon} aria-hidden="true" />
      </header>

      {/* HERO */}
      <section className={s.hero}>
        <HeroRibbons />
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow} dir="ltr">
              <span className={s.eyeBar} aria-hidden="true" />
              ONE PLATFORM · MULTIPLE WORLDS
            </p>
            <h1 className={s.title}>
              منصة واحدة.
              <span className={s.titleGrad}>عوالم متعددة.</span>
            </h1>
            <p className={s.lead}>
              المظلة الرقمية لفعاليات الأنبار — معارض ومؤتمرات بهوية وتجربة
              مستقلة لكل حدث، تحت سقف منصة واحدة.
            </p>
            <div className={s.ctaRow}>
              <a href="#events" className={s.ctaPrimary}>
                استكشف الفعاليات <ArrowLeft className={s.icon} aria-hidden />
              </a>
              <a href="#about" className={s.ctaGhost}>
                عن المنصة
              </a>
            </div>
            <dl className={s.stats}>
              <div>
                <dt>فعاليات</dt>
                <dd>{count}</dd>
              </div>
              <div>
                <dt>الدورة</dt>
                <dd>2026</dd>
              </div>
              <div>
                <dt>المدينة</dt>
                <dd>الرمادي</dd>
              </div>
            </dl>
          </div>
          <div className={s.heroMark} aria-hidden="true">
            <span className={s.markHalo} />
            <Image
              src={MARK}
              alt=""
              width={713}
              height={720}
              preload
              className={s.markImg}
            />
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className={s.events} aria-label="الفعاليات">
        <div className={s.wrap}>
          <div className={s.flowIn}>
            <FlowIn />
            <div className={s.secHead}>
              <div>
                <p className={s.kicker} dir="ltr">
                  {count} EVENTS
                </p>
                <h2 className={s.secTitle}>اختر الحدث</h2>
              </div>
              <p className={s.secNote}>
                شريط واحد يتفرّع إلى عوالم متعددة —
                <br />
                لكل فعالية هويتها وصفحتها المستقلة.
              </p>
            </div>
          </div>

          <div className={s.grid}>
            {events.map((event, index) => {
              const href = event.href ?? `/events/${event.slug}`;
              const isAcdi = event.visualIdentity === "acdi26";
              return (
                <Link
                  key={event.id}
                  href={href}
                  className={`${s.card} ${isAcdi ? s.acdi : s.abtf}`}
                  aria-label={`الدخول إلى ${event.titleAr}`}
                >
                  <span className={s.cardRibbon} aria-hidden="true" />
                  <div className={s.cardMedia}>
                    {event.cardImage ? (
                      <Image
                        src={event.cardImage.src}
                        width={event.cardImage.width}
                        height={event.cardImage.height}
                        alt={event.cardImage.alt ?? event.titleAr}
                        loading={event.featured ? "eager" : "lazy"}
                        sizes="(max-width: 860px) calc(100vw - 2rem), 50vw"
                        className={s.cover}
                      />
                    ) : (
                      <div className={s.acdiArt}>
                        <span className={s.acdiRing} aria-hidden="true" />
                        <span className={s.acdiCode} dir="ltr">
                          ACDI26
                        </span>
                        <span className={s.acdiLine}>حوار يصنع أثراً</span>
                        <strong className={s.acdiTitle}>
                          مؤتمر الأنبار
                          <br />
                          للحوار والابتكار
                        </strong>
                      </div>
                    )}
                    <span className={s.badge}>
                      {statusLabels[event.status]}
                    </span>
                  </div>
                  <div className={s.cardBody}>
                    <div className={s.cardMeta}>
                      <span>{event.category}</span>
                      <span className={s.no} dir="ltr">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className={s.cardTitle}>{event.titleAr}</h3>
                    <p className={s.cardEn} dir="ltr" lang="en">
                      {event.titleEn}
                    </p>
                    {event.descriptionAr ? (
                      <p className={s.cardDesc}>{event.descriptionAr}</p>
                    ) : null}
                    <span className={s.enter}>
                      ادخل إلى الحدث{" "}
                      <ArrowLeft className={s.icon} aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={s.flowOut}>
            <FlowOut />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={s.about}>
        <div className={`${s.wrap} ${s.aboutInner}`}>
          <AboutRibbons />
          <div className={s.aboutHead}>
            <p className={s.kicker} dir="ltr">
              THE PLATFORM
            </p>
            <h2 className={s.aboutTitle}>
              هوية مظلّة.
              <span className={s.titleGrad}>أحداث بشخصيات مستقلة.</span>
            </h2>
          </div>
          <ul className={s.pillars}>
            {PILLARS.map((p) => (
              <li key={p.k}>
                <span className={s.pk} dir="ltr">
                  {p.k}
                </span>
                <b>{p.t}</b>
                <span>{p.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={`${s.wrap} ${s.footInner}`}>
          <FooterRibbons />
          <Image
            src={MARK}
            alt=""
            width={713}
            height={720}
            className={s.footMark}
            aria-hidden="true"
          />
          <p className={s.footName} dir="ltr">
            ANBAR EXPO 2026
          </p>
          <p className={s.footTag}>منصة واحدة. عوالم متعددة.</p>
          <nav className={s.footLinks} aria-label="روابط الفعاليات">
            {events.map((event) => (
              <Link key={event.id} href={event.href ?? `/events/${event.slug}`}>
                {event.titleAr}
              </Link>
            ))}
          </nav>
          <p className={s.copy}>
            © 2026 منصة فعاليات الأنبار · الرمادي، العراق
          </p>
        </div>
      </footer>
    </div>
  );
}
