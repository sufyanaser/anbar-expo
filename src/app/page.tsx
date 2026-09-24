import type { Metadata } from "next";
import Link from "next/link";

import { DirectoryEventCard } from "@/components/events/directory-event-card";
import { directoryEvents } from "@/data/home-directory";

import s from "./home.module.css";

const LOGO = "/brand/anbar-expo/anbar-expo-26.svg";

export const metadata: Metadata = {
  title: { absolute: "ANBAR EXPO | منصة فعاليات الأنبار" },
  description:
    "المظلة الرقمية لفعاليات ومعارض ومؤتمرات الأنبار، بهوية مستقلة لكل حدث.",
  alternates: { canonical: "/" },
};

function Logo({ className }: { className: string }) {
  return (
    // Approved logo file (vector export of the supplied PDF), used as-is.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO}
      alt="ANBAR EXPO 26"
      width={1587}
      height={629}
      className={className}
    />
  );
}

export default function HomePage() {
  const count = directoryEvents.length;

  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={`${s.wrap} ${s.headRow}`}>
          <Link href="/" className={s.brand} aria-label="ANBAR EXPO — الرئيسية">
            <Logo className={s.brandLogo} />
          </Link>
          <nav className={s.nav} aria-label="التنقل الرئيسي">
            <a href="#events">الفعاليات</a>
            <Link href="/about">عن المنصة</Link>
          </nav>
        </div>
        <div className={s.headLine} aria-hidden="true" />
      </header>

      <section className={s.intro} aria-labelledby="home-title">
        <div className={`${s.wrap} ${s.introRow}`}>
          <div className={s.introText}>
            <p className={s.eyebrow} dir="ltr">
              <span className={s.eyeBar} aria-hidden="true" />
              ANBAR EXPO 2026
            </p>
            <h1 id="home-title" className={s.title}>
              فعاليات تجمعنا. <span className={s.accent}>آفاق تلهمنا.</span>
            </h1>
            <p className={s.lead}>
              اكتشف المعارض والمؤتمرات والمهرجانات التي تجمع المعرفة والثقافة
              والابتكار في الأنبار.
            </p>
          </div>
          <p className={s.count}>
            <strong>{count}</strong> فعاليات
          </p>
        </div>
      </section>

      <section id="events" className={s.events} aria-label="الفعاليات">
        <div className={s.wrap}>
          <ul className={s.grid}>
            {directoryEvents.map((event, index) => (
              <li key={event.id}>
                <DirectoryEventCard event={event} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footLine} aria-hidden="true" />
        <div className={`${s.wrap} ${s.footRow}`}>
          <div className={s.footBrand}>
            <Logo className={s.footLogo} />
            <p>
              المظلة الرقمية لفعاليات الأنبار — منصة واحدة تجمع المعارض
              والمؤتمرات والمهرجانات، بهوية مستقلة لكل حدث.
            </p>
          </div>
          <nav className={s.footNav} aria-label="روابط المنصة">
            <a href="#events">الفعاليات</a>
            <Link href="/about">عن المنصة</Link>
          </nav>
        </div>
        <div className={`${s.wrap} ${s.copy}`}>
          <p>© 2026 ANBAR EXPO · منصة فعاليات الأنبار</p>
        </div>
      </footer>
    </div>
  );
}
