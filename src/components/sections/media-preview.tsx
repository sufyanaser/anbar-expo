import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function MediaPreview() {
  return (
    <section className="section-space" aria-labelledby="media-title">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="المركز الإعلامي"
            title="الأخبار والإعلانات الرسمية"
          />
          <Link
            href="/media"
            className="text-primary inline-flex items-center gap-2 font-bold"
          >
            المركز الإعلامي <ArrowLeft aria-hidden="true" />
          </Link>
        </div>
        <div id="media-title" className="mt-12 border-y py-14 text-center">
          <p className="text-muted-foreground">لا توجد أخبار منشورة حالياً.</p>
        </div>
      </Container>
    </section>
  );
}
