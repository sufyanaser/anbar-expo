import type { Metadata } from "next";
import { RouteIntro } from "@/components/sections/route-intro";
export const metadata: Metadata = {
  title: "الزوار",
  alternates: { canonical: "/visitors" },
};
export default function VisitorsPage() {
  return (
    <RouteIntro
      eyebrow="للزوار"
      title="معلومات الزيارة من المصدر الرسمي"
      description="ستتوفر هنا المواعيد والمواقع وإرشادات الوصول والخدمات المرتبطة بكل معرض بعد اعتمادها."
    >
      <p className="text-muted-foreground border-copper/30 border border-dashed p-8 text-center">
        ستُنشر معلومات الزيارة مع إعلانات المعارض الرسمية.
      </p>
    </RouteIntro>
  );
}
