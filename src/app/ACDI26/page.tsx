import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Link from "next/link";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "مؤتمر الأنبار للحوار والابتكار | ACDI26" },
  description: "منصة تنموية لتحويل الحوار إلى مبادرات قابلة للتنفيذ وشراكات ذات أثر قابل للقياس في محافظة الأنبار.",
  alternates: { canonical: "/ACDI26" },
};

const initiatives = [
  { number: "01", title: "من المهارة إلى الدخل", text: "ربط التدريب العملي بفرص العمل والدخل للشباب." },
  { number: "02", title: "الأنبار للمياه والزراعة الذكية", text: "حلول قابلة للتطبيق لكفاءة المياه والإنتاج الزراعي." },
  { number: "03", title: "عقود الخدمة المجتمعية", text: "نماذج تعاون لتحسين الخدمات وتعزيز المشاركة المحلية." },
];

const goals = [
  "تحديد الأولويات التنموية لمحافظة الأنبار",
  "تطوير مبادرات مدروسة وقابلة للتنفيذ",
  "بناء شراكات بين القطاعين العام والخاص والمجتمع",
  "تأسيس آلية واضحة للمتابعة وقياس الأثر",
];

export default function Acdi26Page() {
  return (
    <main className={`${ibmPlexArabic.className} min-h-screen bg-[#f2f3f4] text-[#102a43]`}>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#176b91] hover:text-[#102a43]">
          <ArrowLeft className="size-4 rotate-180" aria-hidden="true" /> منصة ANBAR EXPO
        </Link>
        <div className="text-left" dir="ltr">
          <p className="text-sm font-bold tracking-[0.16em] text-[#176b91]">ACDI26</p>
          <p className="mt-1 text-[10px] tracking-[0.12em] text-[#102a43]/50">PROPOSED IDENTITY</p>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#102a43] text-white">
        <div className="absolute -top-32 -left-32 size-[34rem] rounded-full border-[80px] border-[#39a7bf]/25" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-2 w-28 bg-[#d6a65d]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[72vh] w-full max-w-7xl items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:px-12 lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold text-[#39a7bf]">من الحوار إلى أثر قابل للقياس</p>
            <h1 className="max-w-4xl text-5xl leading-[1.18] font-bold sm:text-6xl lg:text-7xl">مؤتمر الأنبار<br />للحوار والابتكار</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">منصة ومؤتمر تنموي لتطوير المبادرات، بناء الشراكات، وتحويل الأولويات المحلية إلى نتائج قابلة للتنفيذ والمتابعة.</p>
          </div>
          <div className="border-s border-[#39a7bf]/45 ps-6">
            <p className="text-xs font-bold tracking-wider text-[#d6a65d]">الحالة الحالية</p>
            <p className="mt-3 text-2xl font-bold">مرحلة التأسيس المقترحة</p>
            <p className="mt-3 leading-7 text-white/60">تنطلق الفعالية بعد نضج مبادرتين على الأقل وجاهزيتهما للعرض والتنفيذ.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-wider text-[#176b91]">الرؤية</p>
          <h2 className="mt-4 text-4xl leading-tight font-bold">حوار واضح.<br />مبادرات عملية.<br />شراكات مستدامة.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal} className="flex gap-4 border border-[#102a43]/10 bg-white p-5">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#39a7bf]" aria-hidden="true" />
              <p className="leading-7">{goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-bold tracking-wider text-[#176b91]">مسارات العمل</p><h2 className="mt-3 text-4xl font-bold">مبادرات الدورة الأولى</h2></div>
            <p className="max-w-md leading-7 text-[#102a43]/60">ثلاثة مسارات أولية تخضع للتشخيص والتطوير قبل اعتمادها النهائي.</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#102a43]/10 bg-[#102a43]/10 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article key={item.number} className="bg-[#f2f3f4] p-7 sm:p-9">
                <span className="text-sm font-bold text-[#d6a65d]">{item.number}</span>
                <h3 className="mt-10 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#102a43]/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#102a43] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div><p className="font-bold">مؤتمر الأنبار للحوار والابتكار</p><p className="mt-1 text-sm text-white/50" dir="ltr">ANBAR CONFERENCE FOR DIALOGUE & INNOVATION</p></div>
          <Link href="/" className="text-sm font-semibold text-[#39a7bf] hover:text-white">العودة إلى منصة ANBAR EXPO</Link>
        </div>
      </footer>
    </main>
  );
}
