import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowDown,
  Award,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { ParticipationForm } from "@/components/acma26/participation-form";
import s from "./acma26.module.css";

export const metadata: Metadata = {
  title: { absolute: "جائزة صنّاع الإبداع | ACMA26" },
  description:
    "جائزة صنّاع الإبداع في الأنبار 2026. تعرّف على الجائزة وتفاصيل المشاركة وإعلانات الدورة.",
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

export default function Acma26Page() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <Link href="/" className={s.platform} dir="ltr">
          ANBAR EXPO <ArrowUpLeft size={16} aria-hidden="true" />
        </Link>
        <nav aria-label="أقسام الجائزة">
          <a href="#about">عن الجائزة</a>
          <a href="#participation">المشاركة</a>
          <a href="#faq">الأسئلة</a>
        </nav>
        <a href="#participation" className={s.headerCta}>
          دليل المشاركة
        </a>
      </header>
      <section className={s.hero} aria-labelledby="award-title">
        <div className={s.heroText}>
          <p className={s.eyebrow} dir="ltr">
            ANBAR CREATIVITY MAKERS AWARD
          </p>
          <p className={s.edition}>
            الأنبار <span> / </span> دورة 2026
          </p>
          <h1 id="award-title">
            جائزة
            <br />
            <span>صنّاع الإبداع</span>
          </h1>
          <p className={s.lead}>
            للإبداع حضور.
            <br />
            ولصنّاعه التقدير.
          </p>
          <p className={s.organizer}>
            تنظيم لجنة الثقافة والإعلام
            <br />
            التابعة لمحافظة الأنبار
          </p>
          <div className={s.actions}>
            <a className={s.primary} href="#participation">
              استكشف المشاركة <ArrowUpLeft size={19} aria-hidden="true" />
            </a>
            <a className={s.secondary} href="#about">
              تعرّف على الجائزة <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <p className={s.availability}>
            تفاصيل التقديم والمواعيد تُعلن بعد اعتمادها رسمياً.
          </p>
        </div>
        <div className={s.heroVisual}>
          <Image
            src="/brand/acma26/hero.webp"
            alt="المجسّم الذهبي لجائزة صنّاع الإبداع على قاعدة سوداء"
            width={896}
            height={1200}
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className={s.imageCode} dir="ltr">
            ACMA<span>26</span>
          </span>
          <span className={s.imageCaption}>جائزة صنّاع الإبداع في الأنبار</span>
        </div>
      </section>
      <div className={s.facts}>
        <div>
          <small>الدورة</small>
          <strong>2026</strong>
        </div>
        <div>
          <small>المكان</small>
          <strong>يُعلن لاحقاً</strong>
        </div>
        <div>
          <small>موعد التكريم</small>
          <strong>يُعلن لاحقاً</strong>
        </div>
        <div>
          <small>حالة المشاركة</small>
          <strong>لم يُفتح التقديم بعد</strong>
        </div>
      </div>
      <section
        id="about"
        className={`${s.section} ${s.about}`}
        aria-labelledby="about-title"
      >
        <div>
          <p className={s.eyebrow}>01 — عن الجائزة</p>
          <h2 id="about-title">
            مساحة للإبداع.
            <br />
            <span>وتقدير لمن يصنعه.</span>
          </h2>
          <p>
            جائزة صنّاع الإبداع في الأنبار 2026، بتنظيم لجنة الثقافة والإعلام
            التابعة لمحافظة الأنبار.
          </p>
          <p>
            تجمع هذه الصفحة معلومات الجائزة وإعلانات الدورة ودليل المشاركة في
            مكان واحد. تُنشر الفئات والشروط ومعايير التحكيم بعد اعتمادها من
            الجهة المنظمة.
          </p>
          <a href="#participation" className={s.textLink}>
            اطّلع على متطلبات المشاركة{" "}
            <ArrowUpLeft size={18} aria-hidden="true" />
          </a>
        </div>
        <figure className={s.logoPanel}>
          <Image
            src="/brand/acma26/logo.webp"
            alt="الشعار المعتمد لجائزة صنّاع الإبداع في الأنبار 2026"
            width={688}
            height={900}
            sizes="(max-width: 760px) 85vw, 360px"
          />
          <figcaption dir="ltr">ACMA26 · ANBAR · 2026</figcaption>
        </figure>
      </section>
      <section
        className={`${s.section} ${s.details}`}
        aria-labelledby="details-title"
      >
        <p className={s.eyebrow}>02 — تفاصيل الدورة</p>
        <h2 id="details-title">
          كل ما تحتاجه،<span> قبل التقديم.</span>
        </h2>
        <div className={s.infoGrid}>
          {[
            {
              Icon: Award,
              title: "فئات الجائزة",
              text: "تُنشر الفئات المعتمدة ومتطلبات كل فئة هنا قبل فتح التقديم.",
            },
            {
              Icon: FileCheck2,
              title: "الشروط ومعايير التحكيم",
              text: "يُتاح الدليل الرسمي بعد اعتماده، شاملاً الأهلية وآلية التقييم وحقوق المشاركة.",
            },
            {
              Icon: Sparkles,
              title: "المواعيد والإعلانات",
              text: "تُعلن تواريخ استقبال المشاركات وإغلاقها والتكريم عبر هذه الصفحة.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span>بانتظار الإعلان الرسمي</span>
            </article>
          ))}
        </div>
      </section>
      <section className={s.interlude} aria-label="تفاصيل مجسّم الجائزة">
        <Image
          src="/brand/acma26/detail.webp"
          alt="تفاصيل النجمة والشريط السينمائي والريشة في مجسّم الجائزة"
          width={880}
          height={1100}
          sizes="(max-width: 760px) 100vw, 45vw"
        />
        <div>
          <p className={s.eyebrow} dir="ltr">
            ANBAR · CREATIVITY · 2026
          </p>
          <p className={s.statement}>
            فكرة تترك أثراً.
            <br />
            <span>وإبداع يستحق التقدير.</span>
          </p>
          <span className={s.largeCode} dir="ltr">
            ACMA26
          </span>
        </div>
      </section>
      <section
        id="participation"
        className={`${s.section} ${s.participation}`}
        aria-labelledby="participation-title"
      >
        <div>
          <p className={s.eyebrow}>03 — المشاركة</p>
          <h2 id="participation-title">جهّز مشاركتك.</h2>
          <p>
            تعرّف على البيانات الأساسية المطلوبة لتجهيز طلبك. تُحدَّد المتطلبات
            النهائية بحسب الفئة والشروط الرسمية.
          </p>
          <ol className={s.steps}>
            <li>
              <strong>بيانات المشارك</strong>
              <span>الاسم ووسائل التواصل</span>
            </li>
            <li>
              <strong>تفاصيل العمل</strong>
              <span>العنوان والوصف ورابط الاطلاع</span>
            </li>
            <li>
              <strong>المراجعة والتقديم</strong>
              <span>بعد فتح باب المشاركة رسمياً</span>
            </li>
          </ol>
          <p className={s.notice}>
            التقديم غير مفتوح حالياً. يمكنك استعراض الحقول، ولن تُرسل أو تُحفظ
            أي بيانات في هذه المرحلة.
          </p>
        </div>
        <ParticipationForm />
      </section>
      <section
        id="faq"
        className={`${s.section} ${s.faq}`}
        aria-labelledby="faq-title"
      >
        <p className={s.eyebrow}>04 — أسئلة شائعة</p>
        <h2 id="faq-title">قبل أن تبدأ.</h2>
        {[
          {
            q: "هل باب المشاركة مفتوح الآن؟",
            a: "لم يُفتح التقديم بعد. تُعلن حالة التسجيل ومواعيده على هذه الصفحة عند اعتمادها.",
          },
          {
            q: "ما فئات الجائزة وشروط الأهلية؟",
            a: "تُعلن الفئات وشروط الأهلية ومعايير التقييم ضمن الدليل الرسمي قبل بدء استقبال المشاركات.",
          },
          {
            q: "هل تعبئة الحقول الآن تُعدّ مشاركة؟",
            a: "لا. الحقول الحالية لاستعراض متطلبات الطلب فقط؛ لا تُرسل ولا تُحفظ البيانات، ولا يُصدر رقم مشاركة.",
          },
          {
            q: "من الجهة المنظمة للجائزة؟",
            a: "لجنة الثقافة والإعلام التابعة لمحافظة الأنبار.",
          },
        ].map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <footer className={s.footer}>
        <div>
          <strong>جائزة صنّاع الإبداع</strong>
          <p dir="ltr">Anbar Creativity Makers Award · ACMA26</p>
        </div>
        <Link href="/">
          العودة إلى فعاليات ANBAR EXPO{" "}
          <ArrowUpLeft size={18} aria-hidden="true" />
        </Link>
        <small>© 2026 · لجنة الثقافة والإعلام التابعة لمحافظة الأنبار</small>
      </footer>
    </div>
  );
}
