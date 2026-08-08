import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function PartnersPreview() {
  return (
    <section
      className="bg-secondary section-space border-y"
      aria-labelledby="partners-title"
    >
      <Container className="grid gap-12 lg:grid-cols-2">
        <SectionHeading eyebrow="الشراكات" title="مساحة للشركاء المؤسسيين" />
        <div
          id="partners-title"
          className="border-copper/30 flex min-h-48 items-center justify-center border border-dashed p-8 text-center"
        >
          <p className="text-muted-foreground max-w-md leading-8">
            تُضاف الجهات الشريكة والرعاة هنا بعد اعتماد الأسماء والأصول الرسمية.
          </p>
        </div>
      </Container>
    </section>
  );
}
