import type { Metadata } from "next";
import { RouteIntro } from "@/components/sections/route-intro";

export const metadata: Metadata = {
  title: "عن المنصة",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <RouteIntro
      eyebrow="عن المنصة"
      title="منصة الأنبار الرسمية للمعارض"
      description="منصة رقمية لعرض المعارض والفعاليات الدولية المقامة في الأنبار ضمن بنية مؤسسية موحدة وقابلة للتوسع."
    >
      <div className="grid gap-8 text-lg leading-9 md:grid-cols-2">
        <p>
          تجمع المنصة المعارض المتخصصة ودوراتها المتعددة في سجل رقمي واحد، مع
          الحفاظ على صفحة مستقلة لكل فعالية.
        </p>
        <p>
          تبدأ النسخة الأولى بالمحتوى العام والبيانات المحلية الموثوقة، وتتوسع
          لاحقاً وفق الاحتياجات الرسمية.
        </p>
      </div>
    </RouteIntro>
  );
}
