import type { Metadata } from "next";

import { EventCard } from "@/components/events/event-card";
import { RouteIntro } from "@/components/sections/route-intro";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "المعارض",
  description: "استعرض المعارض والفعاليات المنشورة رسمياً ضمن منصة ANBAR EXPO.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <RouteIntro
      eyebrow="المعارض"
      title="المعارض والفعاليات"
      description="سجل موحد للمعارض المنشورة ضمن منصة ANBAR EXPO، مع صفحات مستقلة لكل فعالية."
    >
      <div className="grid gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </RouteIntro>
  );
}
