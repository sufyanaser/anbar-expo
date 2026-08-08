import { EventCard } from "@/components/events/event-card";
import { Container } from "@/components/layout/container";
import { getFeaturedEvent } from "@/data/events";
import { SectionHeading } from "./section-heading";

export function FeaturedEvent() {
  const event = getFeaturedEvent();
  if (!event) return null;

  return (
    <section className="section-space" aria-labelledby="featured-title">
      <Container className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <SectionHeading
          eyebrow="المعرض المميز"
          title="الفعالية القادمة ضمن المنصة"
          description="تُنشر المواعيد والمواقع والتفاصيل التنفيذية بعد اعتمادها رسمياً."
          className="lg:sticky lg:top-32"
        />
        <div id="featured-title">
          <EventCard event={event} />
        </div>
      </Container>
    </section>
  );
}
