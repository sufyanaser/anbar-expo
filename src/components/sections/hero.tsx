import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { Container } from "../layout/container";

export function Hero() {
  return (
    <section
      className="editorial-grid relative overflow-hidden border-b"
      aria-labelledby="hero-title"
    >
      <Container className="grid min-h-[calc(100svh-5rem)] items-end gap-12 py-16 md:min-h-[44rem] md:grid-cols-[1.35fr_0.65fr] md:py-24">
        <div className="max-w-5xl">
          <p className="eyebrow">المنصة الرسمية للمعارض في الأنبار</p>
          <h1 id="hero-title" className="mt-7">
            <span className="latin-wordmark text-ink block text-[clamp(3.25rem,10vw,8.5rem)] leading-[0.86] font-black tracking-[-0.055em]">
              {siteConfig.name}
            </span>
            <span className="text-copper mt-7 block text-2xl font-black sm:text-4xl">
              {siteConfig.nameAr}
            </span>
          </h1>
          <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-9 sm:text-2xl sm:leading-10">
            المنصة الرسمية للمعارض والفعاليات الدولية في الأنبار
          </p>
          <p
            className="font-latin text-muted-foreground mt-3 max-w-xl text-sm leading-6"
            dir="ltr"
          >
            The Official Platform for Exhibitions and International Events in
            Anbar
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm px-6 text-base"
            >
              <Link href="/events">
                استكشف المعارض <ArrowLeft aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-sm px-6 text-base"
            >
              <Link href="/about">عن المنصة</Link>
            </Button>
          </div>
        </div>

        <div
          className="border-copper/40 relative mb-1 hidden aspect-[4/5] border md:block"
          aria-hidden="true"
        >
          <div className="bg-copper absolute -top-px end-[18%] h-[46%] w-px" />
          <div className="border-copper absolute end-[18%] top-[46%] size-4 translate-x-1/2 -translate-y-1/2 rounded-full border bg-background" />
          <p className="latin-wordmark text-copper absolute end-6 bottom-6 text-xs">
            ANBAR / IRAQ
          </p>
          <p className="text-muted-foreground absolute start-6 top-6 text-sm [writing-mode:vertical-rl]">
            منصة متعددة التخصصات
          </p>
        </div>
      </Container>
    </section>
  );
}
