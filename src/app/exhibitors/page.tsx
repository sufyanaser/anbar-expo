import type { Metadata } from "next";
import { RouteIntro } from "@/components/sections/route-intro";
export const metadata: Metadata = {
  title: "العارضون",
  alternates: { canonical: "/exhibitors" },
};
export default function ExhibitorsPage() {
  return (
    <RouteIntro
      eyebrow="للعارضين"
      title="شارك في المعارض القادمة"
      description="فرص المشاركة ومتطلبات العارضين ونوافذ التسجيل في المعارض."
    >
      <p className="text-muted-foreground border-copper/30 border border-dashed p-8 text-center">
        لا يوجد تسجيل مفتوح منشور حالياً.
      </p>
    </RouteIntro>
  );
}
