import { ExternalLink, LockKeyhole, PanelsTopLeft } from "lucide-react";
import Link from "next/link";

export function AdminSetupRequired() {
  return (
    <main className="min-h-screen bg-[#021d30] px-5 py-14 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur sm:p-12">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-[#f0c64f]/12 text-[#f0c64f]">
          <PanelsTopLeft className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-8 text-xs font-bold tracking-wider text-[#f0c64f]">
          ABTF 2026 · CONTENT MANAGEMENT
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          لوحة الإدارة جاهزة للربط
        </h1>
        <p className="mt-5 text-base leading-8 text-white/62">
          يلزم إكمال ربط مشروع Sanity مع Vercel مرة واحدة. بعد الربط ستصبح لوحة
          الأخبار والفعاليات والصور والعارضين والإعلانات والبث متاحة للحسابات
          المصرح لها فقط.
        </p>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-5 text-sm leading-7 text-white/55">
          <LockKeyhole
            className="mt-1 size-5 shrink-0 text-[#23b26d]"
            aria-hidden="true"
          />
          تسجيل الدخول والصلاحيات والنشر محمية بواسطة حسابات Sanity، ولا تُخزن
          كلمات المرور داخل الموقع.
        </div>
        <Link
          href="/ABTF2026"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f0c64f] px-5 py-3 text-sm font-bold text-[#021d30]"
        >
          العودة إلى المنصة
          <ExternalLink className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
