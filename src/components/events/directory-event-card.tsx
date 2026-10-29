import { ArrowLeft, Building2, Landmark, Rocket, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  type DirectoryEvent,
  type DirectoryVisual,
  statusLabel,
} from "@/data/home-directory";

import s from "./directory-event-card.module.css";

const motifIcon = {
  energy: Sun,
  heritage: Landmark,
  startup: Rocket,
  city: Building2,
} as const;

function Visual({
  visual,
  title,
  eager,
}: {
  visual: DirectoryVisual;
  title: string;
  eager: boolean;
}) {
  if (visual.kind === "image") {
    return (
      <Image
        src={visual.image.src}
        width={visual.image.width}
        height={visual.image.height}
        alt={visual.image.alt ?? title}
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 400px"
        className={s.image}
      />
    );
  }

  if (visual.kind === "acdi") {
    return (
      <div className={s.acdi} aria-hidden="true">
        <span className={s.acdiRing} />
        <span className={s.acdiCode} dir="ltr">
          ACDI26
        </span>
        <span className={s.acdiLine}>حوار يصنع أثراً</span>
        <strong className={s.acdiTitle}>
          مؤتمر الأنبار
          <br />
          للحوار والابتكار
        </strong>
      </div>
    );
  }

  const Icon = motifIcon[visual.motif];
  return (
    <div className={`${s.concept} ${s[visual.motif]}`} aria-hidden="true">
      <span className={s.band1} />
      <span className={s.band2} />
      <span className={s.band3} />
      <span className={s.glyph}>
        <Icon strokeWidth={1.5} />
      </span>
    </div>
  );
}

export function DirectoryEventCard({
  event,
  index,
}: {
  event: DirectoryEvent;
  index: number;
}) {
  const active = event.state === "active" && Boolean(event.href);
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <div
        className={`${s.media} ${event.id === "acma26" ? s.awardMedia : ""}`}
      >
        <Visual visual={event.visual} title={event.titleAr} eager={index < 2} />
        <span className={active ? s.badgeActive : s.badgeSoon}>
          {active ? <i className={s.pulse} aria-hidden="true" /> : null}
          {statusLabel[event.state]}
        </span>
      </div>
      <div className={s.body}>
        <div className={s.meta}>
          <span>{event.category}</span>
          <span className={s.number} dir="ltr">
            {number}
          </span>
        </div>
        <h3 className={s.title}>{event.titleAr}</h3>
        <p className={s.titleEn} dir="ltr" lang="en">
          {event.titleEn}
        </p>
        <p className={s.description}>{event.description}</p>
        <div className={s.footer}>
          {active ? (
            <span className={s.action}>
              استكشف الفعالية
              <ArrowLeft className={s.arrow} aria-hidden="true" />
            </span>
          ) : (
            <span className={s.note}>فعالية مقترحة · لم يُعلن عنها بعد</span>
          )}
        </div>
      </div>
    </>
  );

  if (active && event.href) {
    return (
      <Link
        href={event.href}
        className={`${s.card} ${s.isActive}`}
        aria-label={`استكشف الفعالية: ${event.titleAr}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={`${s.card} ${s.isConcept}`}
      aria-label={`${event.titleAr} — قريباً`}
    >
      {content}
    </article>
  );
}
