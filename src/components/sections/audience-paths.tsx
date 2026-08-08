import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";

const paths = [
  {
    href: "/exhibitors",
    eyebrow: "للعارضين",
    title: "قدّم حضورك ضمن معارض متخصصة",
    body: "بوابة معلومات واضحة للمشاركة والفرص المتاحة عند فتح التسجيل.",
  },
  {
    href: "/visitors",
    eyebrow: "للزوار",
    title: "خطط لزيارتك من مصدر رسمي",
    body: "معلومات المعارض ومواعيدها ومواقعها وإرشادات الزيارة.",
  },
];

export function AudiencePaths() {
  return (
    <section className="section-space" aria-label="مسارات العارضين والزوار">
      <Container className="grid gap-px overflow-hidden border bg-border md:grid-cols-2">
        {paths.map((path) => (
          <article key={path.href} className="bg-card p-8 sm:p-12">
            <p className="eyebrow">{path.eyebrow}</p>
            <h2 className="text-ink mt-5 max-w-md text-3xl font-black leading-tight">
              {path.title}
            </h2>
            <p className="text-muted-foreground mt-5 max-w-lg leading-8">
              {path.body}
            </p>
            <Link
              href={path.href}
              className="text-primary mt-10 inline-flex items-center gap-2 font-bold"
            >
              اعرف المزيد <ArrowLeft aria-hidden="true" />
            </Link>
          </article>
        ))}
      </Container>
    </section>
  );
}
