import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowDown,
  Camera,
  Clapperboard,
  Newspaper,
  Radio,
} from "lucide-react";
import { ParticipationForm } from "@/components/acma26/participation-form";
import { TechnicalJury } from "@/components/acma26/technical-jury";
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
    <div className={s.page} dir="rtl">
      <a className={s.skipLink} href="#award-title">
        انتقل إلى محتوى الجائزة
      </a>
      <header className={s.header}>
        <Link href="/" className={s.platform} dir="ltr">
          <Image
            className={s.platformMark}
            src="/brand/anbar-expo/anbar-expo-mark-720.png"
            alt=""
            width={713}
            height={720}
            sizes="40px"
          />
          ANBAR EXPO <ArrowUpLeft size={16} aria-hidden="true" />
        </Link>
        <nav aria-label="أقسام الجائزة">
          <a href="#about">عن الجائزة</a>
          <a href="#fields">المجالات</a>
          <a href="#jury">اللجنة الفنية</a>
          <a href="#participation">المشاركة</a>
          <a href="#faq">الأسئلة</a>
        </nav>
        <a href="#participation" className={s.headerCta}>
          دليل المشاركة
        </a>
        <details className={s.mobileNav}>
          <summary>أقسام الجائزة</summary>
          <nav aria-label="أقسام الجائزة على الهاتف">
            <a href="#about">عن الجائزة</a>
            <a href="#fields">المجالات</a>
            <a href="#jury">اللجنة الفنية</a>
            <a href="#participation">المشاركة</a>
            <a href="#faq">الأسئلة</a>
          </nav>
        </details>
      </header>
      <section className={s.hero} aria-labelledby="award-title">
        <h1 id="award-title" className={s.srOnly} tabIndex={-1}>
          جائزة صنّاع الإبداع في الأنبار 2026
        </h1>
        <div className={s.heroVisual}>
          <Image
            src="/brand/acma26/hero-panorama.webp"
            alt="الدرع الذهبي كاملاً إلى اليسار، ومخطوطة جائزة صنّاع الإبداع في الأنبار 2026 إلى اليمين، أمام معالم الأنبار ليلاً"
            width={1918}
            height={820}
            preload
            sizes="100vw"
          />
        </div>
        <div className={s.heroText}>
          <div className={s.heroContext}>
            <p className={s.edition}>في الأنبار · دورة 2026</p>
            <p className={s.organizer}>
              تنظيم لجنة الثقافة والإعلام التابعة لمحافظة الأنبار
            </p>
          </div>
          <div className={s.heroNavigation}>
            <div className={s.actions}>
              <a className={s.primary} href="#participation">
                دليل المشاركة <ArrowUpLeft size={19} aria-hidden="true" />
              </a>
              <a className={s.secondary} href="#about">
                تعرّف على الجائزة <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <p className={s.availability}>
              الاطلاع على شروط الجائزة متاح؛ استقبال الطلبات الإلكتروني غير
              مفعّل حالياً.
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${s.section} ${s.patronage}`}
        aria-labelledby="patronage-title"
      >
        <div className={s.patronageText}>
          <p className={s.eyebrow}>الرعاية الرسمية</p>
          <h2 id="patronage-title">
            برعاية <span>محافظة الأنبار.</span>
          </h2>
          <p className={s.governorTitle}>محافظ الأنبار</p>
          <p className={s.organizer}>
            تنظيم لجنة الثقافة والإعلام التابعة لمحافظة الأنبار
          </p>
        </div>
        <figure className={s.governorPortrait}>
          <Image
            src="/brand/acma26/governor-portrait.webp"
            alt="الصورة المعتمدة لمحافظ الأنبار"
            width={1448}
            height={1659}
            sizes="(max-width: 639px) 85vw, (max-width: 1023px) 42vw, 420px"
          />
        </figure>
      </section>
      <section
        id="about"
        className={`${s.section} ${s.about}`}
        aria-labelledby="about-title"
      >
        <div>
          <p className={s.eyebrow}>عن الجائزة</p>
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
            تعرض الصفحة مجالات الجائزة وضوابطها ومعايير تقييمها واللجان ذات
            الصلة. تبقى استمارة الاستلام الإلكتروني غير مفعّلة حتى اعتماد
            المتطلبات التشغيلية.
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
            <strong>31 ديسمبر 2026 وفق المنشور</strong>
          </div>
          <div>
            <small>حالة المشاركة</small>
            <strong>الاستمارة الإلكترونية غير مفعّلة</strong>
          </div>
        </div>
      </section>
      <section
        id="fields"
        className={s.section}
        aria-labelledby="details-title"
      >
        <p className={s.eyebrow}>مجالات المشاركة</p>
        <h2 id="details-title">
          مسارات الإبداع <span>الأربعة.</span>
        </h2>
        <div className={s.infoGrid}>
          {[
            {
              Icon: Clapperboard,
              title: "المحتوى الفيديوي",
              text: "برومو من إنتاج المشارك لا يتجاوز ثلاث دقائق.",
            },
            {
              Icon: Radio,
              title: "التقرير الإذاعي أو التلفزيوني",
              text: "تقرير منشور لا يتجاوز ثلاث دقائق.",
            },
            {
              Icon: Newspaper,
              title: "المحتوى الصحفي",
              text: "مقال حتى 250 كلمة، تحقيق حتى 750 كلمة، تقرير حتى 500 كلمة.",
            },
            {
              Icon: Camera,
              title: "المحتوى البصري",
              text: "صور صحفية احترافية، بحد أقصى ثلاث لقطات.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="rules"
        className={`${s.section} ${s.eligibility}`}
        aria-labelledby="rules-title"
      >
        <p className={s.eyebrow}>الشروط والضوابط</p>
        <h2 id="rules-title">
          شروط <span>المشاركة.</span>
        </h2>
        <div className={s.eligibilityGrid}>
          <article aria-labelledby="audience-title">
            <p className={s.eyebrow}>الفئات المستهدفة</p>
            <h3 id="audience-title">
              لمن تُفتح <span>مساحة الإبداع؟</span>
            </h3>
            <p>
              صنّاع المحتوى والمؤثرون والإعلاميون والفاعلون على مواقع التواصل
              الاجتماعي من أبناء محافظة الأنبار.
            </p>
          </article>
          <article aria-labelledby="conditions-title">
            <h3 id="conditions-title">الضوابط</h3>
            <p>
              الأصالة وحقوق الملكية الفكرية، والجودة الفنية، والالتزام بموضوع المجال
              والمعايير الأخلاقية والمهنية. تسري حدود المدة والكلمات والصور المبينة
              لكل مجال.
            </p>
            <p className={s.rulesNotice}>
              هذه خلاصة تعريفية وليست بديلاً عن النص الرسمي الكامل للشروط، الذي يجب
              اعتماده قبل تفعيل استقبال الطلبات.
            </p>
          </article>
        </div>
      </section>
      <section
        className={`${s.section} ${s.evaluation}`}
        aria-labelledby="evaluation-title"
      >
        <p className={s.eyebrow}>معايير التقييم</p>
        <h2 id="evaluation-title">
          مئة نقطة <span>لتقييم الأعمال.</span>
        </h2>
        <div className={s.scoreGrid}>
          {[
            ["40", "النشر الرقمي والتفاعل الحقيقي"],
            ["20", "جودة الإنتاج الفني والإبداعي"],
            ["20", "القيمة الهادفة للرسالة"],
            ["20", "الانضباط اللغوي وحقوق النشر والذوق العام"],
          ].map(([score, label]) => (
            <div key={label} className={s.score}>
              <strong>{score}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={s.section} aria-labelledby="timeline-title">
        <p className={s.eyebrow}>المواعيد</p>
        <h2 id="timeline-title">
          مراحل <span>الدورة.</span>
        </h2>
        <div className={s.timeline}>
          <p>
            <strong>1 أكتوبر 2026</strong> — بدء التقديم وفق المنشور
          </p>
          <p>
            <strong>1 ديسمبر 2026</strong> — انتهاء التقديم وفق المنشور
          </p>
          <p>
            <strong>قبل 31 ديسمبر 2026</strong> — إنجاز الأعمال وفق المنشور
          </p>
          <p>
            <strong>31 ديسمبر 2026</strong> — الاحتفال والتكريم
          </p>
        </div>
        <p className={s.rulesNotice}>
          يلزم توضيح رسمي للعلاقة بين إغلاق التقديم وموعد إنجاز الأعمال قبل
          اعتماد تعليمات الاستلام.
        </p>
      </section>
      <TechnicalJury />
      <section className={s.section} aria-labelledby="committees-title">
        <p className={s.eyebrow}>اللجان التنظيمية</p>
        <h2 id="committees-title">
          اللجان <span>المساندة.</span>
        </h2>
        <p>
          <strong>اللجنة التحضيرية:</strong> د. مؤيد خلف حسين، د. محمد محمود
          حسن، باسم مطر محمد، عبدالله ناظم عواد، سرور عمار محمد.
        </p>
        <p>
          <strong>لجنة استقبال الطلبات وفرز الأعمال:</strong> وسام جاسم محمد،
          عمر فلاح حسين، مازن حسن فاضل.
        </p>
        <p className={s.rulesNotice}>
          تُراجع الأسماء والصفات حرفياً مقابل النسخة الرسمية قبل النشر.
        </p>
      </section>
      <section className={s.interlude} aria-label="قيمة الإبداع">
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
          <p className={s.eyebrow}>المشاركة</p>
          <h2 id="participation-title">جهّز مشاركتك.</h2>
          <p>
            استعرض البيانات الأساسية اللازمة للتقديم. هذه معاينة فقط ولا تُرسل
            أو تُحفظ البيانات.
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
        <p className={s.eyebrow}>أسئلة شائعة</p>
        <h2 id="faq-title">قبل أن تبدأ.</h2>
        {[
          {
            q: "هل باب المشاركة مفتوح الآن؟",
            a: "ورد في المنشور أن التقديم يبدأ في 1 أكتوبر وينتهي في 1 ديسمبر 2026، لكن استمارة الاستلام الإلكتروني على هذا الموقع غير مفعّلة.",
          },
          {
            q: "ما فئات الجائزة وشروط الأهلية؟",
            a: "تظهر المجالات الأربعة ومعايير التقييم في هذه الصفحة. يُرجع للنص التنظيمي الرسمي الكامل في تفاصيل الأهلية والضوابط.",
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
