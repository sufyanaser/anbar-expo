import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { StatusBadge } from "@/components/events/status-badge";
import { events, getEventBySlug } from "@/data/events";

type EventPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.titleAr,
    description: event.descriptionAr,
    alternates: { canonical: `/events/${event.slug}` },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <article>
      <header className="bg-ink text-paper border-b border-white/10 py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={event.status} />
            <span className="text-sm text-white/55">{event.category}</span>
          </div>
          <h1 className="mt-8 max-w-5xl text-4xl font-black text-balance sm:text-6xl">
            {event.titleAr}
          </h1>
          <p
            className="font-latin mt-4 text-base text-white/55 sm:text-xl"
            dir="ltr"
          >
            {event.titleEn}
          </p>
        </Container>
      </header>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:py-24">
        <div>
          <p className="text-muted-foreground text-lg leading-9">
            {event.descriptionAr}
          </p>
          {event.descriptionEn ? (
            <p
              className="font-latin text-muted-foreground mt-6 leading-7"
              dir="ltr"
            >
              {event.descriptionEn}
            </p>
          ) : null}
        </div>
        <aside className="bg-secondary border p-6" aria-label="معلومات المعرض">
          <h2 className="text-ink text-lg font-black">معلومات الفعالية</h2>
          <dl className="mt-6 space-y-6">
            <div className="flex gap-3">
              <CalendarDays
                className="text-copper mt-1 size-5"
                aria-hidden="true"
              />
              <div>
                <dt className="text-sm font-bold">التاريخ</dt>
                <dd className="text-muted-foreground mt-1 text-sm">TBA</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="text-copper mt-1 size-5" aria-hidden="true" />
              <div>
                <dt className="text-sm font-bold">الموقع</dt>
                <dd className="text-muted-foreground mt-1 text-sm">TBA</dd>
              </div>
            </div>
          </dl>
        </aside>
      </Container>
    </article>
  );
}
