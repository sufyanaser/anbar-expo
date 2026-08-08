import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function Introduction() {
  return (
    <section
      className="bg-ink text-paper section-space"
      aria-labelledby="introduction-title"
    >
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <SectionHeading
          eyebrow="المعارض الدولية في الأنبار"
          title="مظلة رقمية واحدة لمعارض الأنبار"
          className="[&_h2]:text-paper [&_.eyebrow]:text-accent"
        />
        <div
          id="introduction-title"
          className="space-y-6 text-lg leading-9 text-white/68"
        >
          <p>
            بنية مؤسسية تعرض المعارض والفعاليات الدولية في الأنبار ضمن تجربة
            موحدة وقابلة للتوسع.
          </p>
          <p>
            كل معرض يحتفظ بهويته ومحتواه ومساره، بينما تبقى المعلومة الرسمية
            والتنقل والظهور الرقمي تحت منصة واحدة.
          </p>
        </div>
      </Container>
    </section>
  );
}
