import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft, Plus } from "lucide-react";
import { ParticipationForm } from "@/components/acma26/participation-form";
import s from "./acma26.module.css";

export const metadata: Metadata = {
  title: { absolute: "جائزة صنّاع الإبداع | ACMA26" },
  description:
    "جائزة صنّاع الإبداع في الأنبار 2026، بتنظيم لجنة الثقافة والإعلام التابعة لمحافظة الأنبار. اكتشف الجائزة ودليل المشاركة.",
  alternates: { canonical: "/ACMA26" },
  openGraph: {
    title: "جائزة صنّاع الإبداع | ACMA26",
    description: "Anbar Creativity Makers Award · 2026",
    url: "/ACMA26",
    images: [
      {
        url: "/brand/acma26/card.webp",
        width: 880,
        height: 1100,
        alt: "مجسّم جائزة صنّاع الإبداع",
      },
    ],
  },
};

const questions = [
  {
    q: "متى يبدأ استقبال المشاركات؟",
    a: "لم يُفتح التقديم بعد. يُنشر موعد فتحه وإغلاقه هنا عند اعتماده رسمياً.",
  },
  {
    q: "ما الفئات وشروط المشاركة؟",
    a: "تُعلن الفئات والأهلية ومعايير التحكيم في الدليل الرسمي قبل بدء استقبال الطلبات.",
  },
  {
    q: "هل يمكنني إرسال عملي الآن؟",
    a: "النموذج الحالي معاينة للبيانات المطلوبة فقط. لا يُرسل أو يحفظ بيانات، ولا يُصدر رقم مشاركة.",
  },
  {
    q: "من ينظّم الجائزة؟",
    a: "لجنة الثقافة والإعلام التابعة لمحافظة الأنبار.",
  },
];

export default function Acma26Page() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <Link href="/" className={s.platform} dir="ltr">
          ANBAR EXPO <ArrowUpLeft size={15} aria-hidden="true" />
        </Link>
        <a
          href="#top"
          className={s.monogram}
          dir="ltr"
          aria-label="جائزة صنّاع الإبداع، أعلى الصفحة"
        >
          ACMA<span>26</span>
        </a>
        <nav aria-label="أقسام الجائزة">
          <a href="#story">الجائزة</a>
          <a href="#guide">دليل المشاركة</a>
          <a href="#participation" className={s.navAction}>
            المشاركة <ArrowUpLeft size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className={s.hero} id="top" aria-labelledby="award-title">
        <div className={s.heroHeading}>
          <p className={s.kicker}>الأنبار · دورة 2026</p>
          <h1 id="award-title">
            <span className={s.srOnly}>جائزة صنّاع الإبداع</span>
            <Image
              src="/brand/acma26/title-gold.svg"
              alt=""
              width={8100}
              height={2049}
              preload
              className={s.calligraphy}
            />
          </h1>
          <p className={s.english} dir="ltr">
            ANBAR CREATIVITY MAKERS AWARD
          </p>
        </div>
        <div className={s.stage}>
          <div className={s.orbit} aria-hidden="true" />
          <span className={s.stageYear} aria-hidden="true">
            26
          </span>
          <Image
            className={s.heroTrophy}
            src="/brand/acma26/hero-full.webp"
            alt="مجسّم جائزة صنّاع الإبداع كاملاً؛ نجمة ذهبية وشريط سينمائي وريشة على قاعدة تحمل اسم الجائزة"
            width={896}
            height={1200}
            preload
            sizes="(max-width: 700px) 85vw, 430px"
          />
          <div className={s.stageRight}>
            <span className={s.tiny}>تقديرٌ يليق بالأثر</span>
            <p>
              للإبداع حضور.
              <br />
              <em>ولصنّاعه التقدير.</em>
            </p>
          </div>
          <div className={s.stageLeft}>
            <span className={s.tiny}>الجهة المنظمة</span>
            <p>
              لجنة الثقافة والإعلام
              <br />
              التابعة لمحافظة الأنبار
            </p>
            <span className={s.location} dir="ltr">
              AL ANBAR, IRAQ / 2026
            </span>
          </div>
        </div>
        <div className={s.heroBottom}>
          <a href="#story" className={s.discover}>
            <ArrowDown size={17} aria-hidden="true" /> اكتشف الجائزة
          </a>
          <span>الفكرة. الأثر. التقدير.</span>
          <a href="#participation" className={s.goldLink}>
            استكشف المشاركة <ArrowUpLeft size={19} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="story" className={s.story} aria-labelledby="story-title">
        <div className={s.storyIntro}>
          <span className={s.sectionNumber}>01 / الجائزة</span>
          <h2 id="story-title">
            هناك من يصنع عملاً.
            <br />
            <span>وهناك من يترك أثراً.</span>
          </h2>
          <p>
            جائزة صنّاع الإبداع في الأنبار 2026.
            <br />
            مساحة لتقدير الإبداع، والاحتفاء بمن يقف وراءه.
          </p>
        </div>
        <div className={s.storyComposition}>
          <figure className={s.storyImage}>
            <Image
              src="/brand/acma26/portrait.webp"
              alt="الجائزة الذهبية كاملة وسط إضاءة احتفائية وانعكاسات ذهبية"
              width={1122}
              height={1402}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <figcaption>
              صنّاع الإبداع <span dir="ltr">THE AWARD / 2026</span>
            </figcaption>
          </figure>
          <div className={s.storyCopy}>
            <span className={s.goldRule} aria-hidden="true" />
            <p className={s.editorialQuote}>
              للأفكار التي تُرى.
              <br />
              للأعمال التي تُروى.
              <br />
              <span>للأثر الذي يبقى.</span>
            </p>
            <p>
              تُنظّم الجائزة لجنة الثقافة والإعلام التابعة لمحافظة الأنبار.
              وتجمع هذه الصفحة إعلانات الدورة ومعلوماتها الرسمية ودليل المشاركة.
            </p>
            <a className={s.goldLink} href="#guide">
              خطوتك الأولى نحو المشاركة{" "}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="guide" className={s.guide} aria-labelledby="guide-title">
        <div className={s.guideHeader}>
          <span className={s.sectionNumber}>02 / قبل المشاركة</span>
          <h2 id="guide-title">
            يبدأ الأثر بفكرة.
            <br />
            <span>وتبدأ المشاركة من هنا.</span>
          </h2>
          <p>جهّز ما يعرّف بك وبعملك، ثم راجع الدليل الرسمي عند إعلانه.</p>
        </div>
        <div className={s.guideRows}>
          {[
            [
              "01",
              "تعرّف على الفئات",
              "اختر الفئة المناسبة لعملك من القائمة الرسمية عند إعلانها.",
            ],
            [
              "02",
              "قدّم ما يروي عملك",
              "جهّز عنوان العمل ووصف فكرته ودورك فيه ورابطاً للاطلاع عليه.",
            ],
            [
              "03",
              "راجع الشروط ثم أرسل",
              "تحقّق من الأهلية ومتطلبات الفئة والإقرارات قبل تقديم الطلب.",
            ],
          ].map(([n, title, text]) => (
            <div className={s.guideRow} key={n}>
              <span dir="ltr">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpLeft size={24} strokeWidth={1} aria-hidden="true" />
            </div>
          ))}
        </div>
        <aside className={s.announcement}>
          <span className={s.statusDot} aria-hidden="true" />
          <strong>باب المشاركة لم يُفتح بعد</strong>
          <p>
            الفئات والشروط ومعايير التحكيم، وموعد التكريم ومكانه، تُنشر بعد
            اعتمادها رسمياً.
          </p>
        </aside>
      </section>

      <section
        id="participation"
        className={s.participation}
        aria-labelledby="participation-title"
      >
        <div className={s.participationIntro}>
          <span className={s.sectionNumber}>03 / مشاركتك</span>
          <h2 id="participation-title">
            لكل عمل حكاية.
            <br />
            <span>ما حكاية عملك؟</span>
          </h2>
          <p>
            هذه معاينة لبيانات الطلب لمساعدتك على التحضير. المتطلبات النهائية
            تُحدَّد بحسب الفئة والدليل الرسمي.
          </p>
          <div className={s.entryMark} dir="ltr" aria-hidden="true">
            ACMA<sup>26</sup>
          </div>
          <p className={s.privacyNote}>
            لا تُرسل أو تُحفظ أي بيانات في هذه المرحلة.
          </p>
        </div>
        <ParticipationForm />
      </section>

      <section id="faq" className={s.faq} aria-labelledby="faq-title">
        <div>
          <span className={s.sectionNumber}>04 / إجابات مختصرة</span>
          <h2 id="faq-title">الصورة أوضح.</h2>
        </div>
        <div>
          {questions.map(({ q, a }) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footerIdentity}>
          <Image
            src="/brand/acma26/title-gold.svg"
            alt="جائزة صنّاع الإبداع"
            width={8100}
            height={2049}
          />
          <span dir="ltr">ANBAR CREATIVITY MAKERS AWARD</span>
        </div>
        <div>
          <p>
            تنظيم لجنة الثقافة والإعلام
            <br />
            التابعة لمحافظة الأنبار
          </p>
          <Link href="/" className={s.goldLink}>
            فعاليات ANBAR EXPO <ArrowUpLeft size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={s.footerBase}>
          <span dir="ltr">ACMA26 · AL ANBAR, IRAQ · 2026</span>
          <a href="#top">العودة إلى الأعلى ↑</a>
        </div>
      </footer>
    </div>
  );
}
