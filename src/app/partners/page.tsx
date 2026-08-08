import type { Metadata } from "next";
import { RouteIntro } from "@/components/sections/route-intro";
export const metadata: Metadata = {
  title: "الشركاء",
  alternates: { canonical: "/partners" },
};
export default function PartnersPage() {
  return (
    <RouteIntro
      eyebrow="الشركاء"
      title="الشراكات المؤسسية"
      description="شراكات تجمع الجهات المنظمة والمؤسسات والرعاة حول فعاليات الأنبار الدولية."
    >
      <p className="text-muted-foreground border-copper/30 border border-dashed p-8 text-center">
        تعاون مؤسسي يدعم تنظيم المعارض وخدمة المشاركين والزوار.
      </p>
    </RouteIntro>
  );
}
