import type { Metadata } from "next";
import { RouteIntro } from "@/components/sections/route-intro";
export const metadata: Metadata = {
  title: "المركز الإعلامي",
  alternates: { canonical: "/media" },
};
export default function MediaPage() {
  return (
    <RouteIntro
      eyebrow="المركز الإعلامي"
      title="الأخبار والمواد الإعلامية"
      description="المصدر الرسمي لأخبار المعارض والبيانات والمواد الإعلامية المعتمدة."
    >
      <p className="text-muted-foreground border-copper/30 border border-dashed p-8 text-center">
        لا توجد مواد إعلامية منشورة حالياً.
      </p>
    </RouteIntro>
  );
}
