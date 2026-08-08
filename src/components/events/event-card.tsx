import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { ExhibitionEvent } from "@/types/event";
import { StatusBadge } from "./status-badge";

export function EventCard({ event }: { event: ExhibitionEvent }) {
  return (
    <article className="bg-card group grid min-h-80 border transition-colors hover:border-copper sm:grid-cols-[0.7fr_1.3fr]">
      <div className="bg-ink text-paper flex min-h-48 flex-col justify-between p-6 sm:min-h-full">
        <span className="text-xs font-bold text-white/55">فعالية متخصصة</span>
        <span className="text-sm text-white/70">{event.category}</span>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <StatusBadge status={event.status} />
          <span className="text-muted-foreground text-xs">
            التفاصيل الرسمية: TBA
          </span>
        </div>
        <h2 className="text-ink mt-8 text-2xl font-black sm:text-3xl">
          {event.titleAr}
        </h2>
        <p className="font-latin text-muted-foreground mt-2 text-sm" dir="ltr">
          {event.titleEn}
        </p>
        <p className="text-muted-foreground mt-5 line-clamp-2 leading-7">
          {event.descriptionAr}
        </p>
        <Link
          href={`/events/${event.slug}`}
          className="text-primary mt-auto inline-flex items-center gap-2 pt-8 font-bold"
        >
          عرض صفحة المعرض{" "}
          <ArrowLeft
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
