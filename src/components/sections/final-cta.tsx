import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function FinalCta() {
  return (
    <section className="bg-copper text-primary-foreground py-16 sm:py-20">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold text-white/75">ANBAR EXPO</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            تابع المعارض القادمة من مصدرها الرسمي
          </h2>
        </div>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="h-12 shrink-0 rounded-sm px-6"
        >
          <Link href="/events">
            عرض المعارض <ArrowLeft aria-hidden="true" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
