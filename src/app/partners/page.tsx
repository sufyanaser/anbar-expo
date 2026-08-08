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
      description="مساحة مخصصة للجهات المنظمة والشركاء والرعاة بعد اعتماد أسمائهم وأصولهم الرسمية."
    >
      <p className="text-muted-foreground border-copper/30 border border-dashed p-8 text-center">
        تُضاف قائمة الشركاء بعد الاعتماد الرسمي.
      </p>
    </RouteIntro>
  );
}
