"use client";

import { useEffect } from "react";
import s from "./home.module.css";

/* Ribbon system — the crossing bands of the ANBAR EXPO mark, extended as the
   connective tissue of the page. Every band uses pathLength=1 and is drawn by
   --p (0→1) which RibbonMotion drives from scroll position. */

type Band = {
  d: string;
  w: number;
  g: string;
  delay?: number;
  cls?: string;
  o?: number;
};

function Grad({
  id,
  stops,
  w,
  h,
}: {
  id: string;
  stops: [number, string][];
  w: number;
  h: number;
}) {
  return (
    <linearGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      x1={w * 0.2}
      y1="0"
      x2={w * 0.8}
      y2={h}
    >
      {stops.map(([o, c]) => (
        <stop key={o} offset={o} stopColor={c} />
      ))}
    </linearGradient>
  );
}

function Defs({ p, w, h }: { p: string; w: number; h: number }) {
  return (
    <defs>
      <Grad
        w={w}
        h={h}
        id={`${p}-a`}
        stops={[
          [0, "#0ACBE9"],
          [0.55, "#0196D3"],
          [1, "#0163AE"],
        ]}
      />
      <Grad
        w={w}
        h={h}
        id={`${p}-b`}
        stops={[
          [0, "#67D5A7"],
          [0.5, "#0ACBE9"],
          [1, "#0196D3"],
        ]}
      />
      <Grad
        w={w}
        h={h}
        id={`${p}-c`}
        stops={[
          [0, "#CEED70"],
          [0.35, "#67D5A7"],
          [1, "#0ACBE9"],
        ]}
      />
      <Grad
        w={w}
        h={h}
        id={`${p}-n`}
        stops={[
          [0, "#0163AE"],
          [1, "#002F66"],
        ]}
      />
    </defs>
  );
}

function Layer({
  id,
  vb,
  bands,
  mode = "scroll",
  className,
}: {
  id: string;
  vb: string;
  bands: Band[];
  mode?: "scroll" | "intro";
  className?: string;
}) {
  const [, , W, H] = vb.split(" ").map(Number);
  return (
    <svg
      className={`${s.ribbonLayer} ${className ?? ""}`}
      viewBox={vb}
      preserveAspectRatio="none"
      aria-hidden
      data-ribbon={mode}
      focusable="false"
    >
      <Defs p={id} w={W} h={H} />
      {bands.map((b, i) => (
        <g
          key={i}
          className={b.cls ? s[b.cls] : undefined}
          style={{ ["--d" as string]: b.delay ?? 0, opacity: b.o ?? 1 }}
        >
          <path
            className={s.band}
            d={b.d}
            pathLength={1}
            stroke={`url(#${id}-${b.g})`}
            strokeWidth={b.w}
          />
          <path
            className={s.bandSheen}
            d={b.d}
            pathLength={1}
            strokeWidth={Math.max(1, b.w * 0.14)}
          />
        </g>
      ))}
    </svg>
  );
}

/* HERO — bands emerge from behind the mark and knot at the bottom-centre */
export const HeroRibbons = () => (
  <Layer
    id="rh"
    mode="intro"
    vb="0 0 1440 900"
    className={s.heroRibbons}
    bands={[
      { d: "M -60 780 C 360 640 900 920 1500 700", w: 70, g: "n", o: 0.06 },
      {
        d: "M 470 330 C 640 300 700 470 660 620 S 700 840 712 900",
        w: 22,
        g: "a",
        delay: 0,
      },
      {
        d: "M 380 520 C 520 600 640 520 680 660 S 716 850 720 900",
        w: 15,
        g: "b",
        delay: 0.12,
      },
      {
        d: "M 520 280 C 690 300 720 480 690 640 S 724 860 728 900",
        w: 8,
        g: "c",
        delay: 0.24,
      },
    ]}
  />
);

/* EVENTS IN — knot fans out: one band to each event world */
export const FlowIn = () => (
  <Layer
    id="ri"
    vb="0 0 1240 300"
    className={s.flowLayer}
    bands={[
      {
        d: "M 612 0 C 612 120 937 110 937 220 L 937 300",
        w: 22,
        g: "a",
        cls: "toAbtf",
      },
      {
        d: "M 620 0 C 620 120 303 110 303 220 L 303 300",
        w: 15,
        g: "b",
        delay: 0.1,
        cls: "toAcdi",
      },
      { d: "M 628 0 C 628 130 596 190 620 300", w: 8, g: "c", delay: 0.2 },
    ]}
  />
);

/* EVENTS OUT — the worlds converge back into one platform */
export const FlowOut = () => (
  <Layer
    id="ro"
    vb="0 0 1240 200"
    className={s.flowLayer}
    bands={[
      { d: "M 937 0 C 937 110 612 90 612 200", w: 22, g: "a", cls: "toAbtf" },
      {
        d: "M 303 0 C 303 110 628 90 628 200",
        w: 15,
        g: "b",
        delay: 0.1,
        cls: "toAcdi",
      },
      { d: "M 620 0 L 620 200", w: 8, g: "c", delay: 0.2 },
    ]}
  />
);

/* ABOUT — two bands loop the pillars and cross, like the mark itself */
export const AboutRibbons = () => (
  <Layer
    id="rb"
    vb="0 0 1240 700"
    className={s.aboutRibbons}
    bands={[
      { d: "M 0 420 C 320 330 920 520 1240 400", w: 60, g: "n", o: 0.05 },
      {
        d: "M 612 0 C 612 190 30 170 30 400 C 30 610 612 540 612 700",
        w: 20,
        g: "a",
      },
      {
        d: "M 628 0 C 628 190 1210 170 1210 400 C 1210 610 628 540 628 700",
        w: 14,
        g: "b",
        delay: 0.1,
      },
    ]}
  />
);

/* FOOTER — the bands return home into the mark */
export const FooterRibbons = () => (
  <Layer
    id="rf"
    vb="0 0 1240 160"
    className={s.footRibbons}
    bands={[
      { d: "M 612 0 C 612 70 570 90 606 160", w: 20, g: "a" },
      { d: "M 628 0 C 628 70 670 90 634 160", w: 14, g: "b", delay: 0.1 },
      { d: "M 620 0 L 620 160", w: 7, g: "c", delay: 0.2 },
    ]}
  />
);

/* Scroll + pointer driver (single listener, rAF-throttled) */
export function RibbonMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.${s.page}`);
    if (!root) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const layers = Array.from(
      root.querySelectorAll<SVGSVGElement>("[data-ribbon]"),
    );
    if (reduce) {
      layers.forEach((l) => l.style.setProperty("--p", "1"));
      return;
    }

    // intro layers draw on load
    const t0 = performance.now();
    const intro = layers.filter((l) => l.dataset.ribbon === "intro");
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1800);
      const e = 1 - Math.pow(1 - k, 3);
      intro.forEach((l) => l.style.setProperty("--p", e.toFixed(4)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // scroll layers draw as they pass through the viewport
    const scroll = layers.filter((l) => l.dataset.ribbon === "scroll");
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      scroll.forEach((l) => {
        const r = l.getBoundingClientRect();
        const p = (vh * 0.92 - r.top) / (r.height + vh * 0.35);
        l.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(4));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // subtle pointer parallax on the hero mark
    const hero = root.querySelector<HTMLElement>(`.${s.hero}`);
    const onMove = (e: PointerEvent) => {
      if (!hero) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      hero.style.setProperty("--mx", x.toFixed(3));
      hero.style.setProperty("--my", y.toFixed(3));
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    hero?.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      hero?.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
