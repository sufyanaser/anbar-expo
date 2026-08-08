import Link from "next/link";

import { Button } from "@/components/ui/button";
import { RouteIntro } from "@/components/sections/route-intro";

export default function NotFound() {
  return (
    <RouteIntro
      eyebrow="404"
      title="الصفحة غير موجودة"
      description="تعذر العثور على الصفحة المطلوبة أو ربما نُقلت إلى مسار آخر."
    >
      <Button asChild>
        <Link href="/">العودة إلى الرئيسية</Link>
      </Button>
    </RouteIntro>
  );
}
