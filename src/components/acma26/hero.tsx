"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpLeft, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import s from "@/app/ACMA26/acma26.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const trophyRef = useRef<HTMLDivElement>(null);
  const calligraphyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Guardrail: Skip animation if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      // Choreographed entrance timeline with restrained cinematic ease
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(trophyRef.current, {
        y: 32,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          calligraphyRef.current,
          {
            y: 18,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          contentRef.current,
          {
            y: 14,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );

      // Subtle 2.5D scroll-driven depth transition to Patronage section
      if (containerRef.current && trophyRef.current) {
        gsap.to(trophyRef.current, {
          y: 24,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (containerRef.current && atmosphereRef.current) {
        gsap.to(atmosphereRef.current, {
          opacity: 0.6,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={s.hero}
      aria-labelledby="award-title"
    >
      <h1 id="award-title" className={s.srOnly} tabIndex={-1}>
        جائزة صنّاع الإبداع في الأنبار 2026
      </h1>

      {/* Layer 0: Volumetric Central Atmosphere & Grounded Panorama Silhouette */}
      <div
        ref={atmosphereRef}
        className={s.heroAtmosphere}
        aria-hidden="true"
      />
      <div className={s.heroPanoramaBackdrop} aria-hidden="true" />
      <div className={s.heroSilhouette} aria-hidden="true" />

      {/* Layer 1, 2, 3: Dominant Trophy, Vector Calligraphy, and Editorial Context */}
      <div className={s.heroStage}>
        {/* Dominant Trophy Layer preserving 2:3 proportions with zero clipping */}
        <div ref={trophyRef} className={s.trophyWrapper}>
          <Image
            src="/brand/acma26/trophy.png"
            alt="المجسّم الرسمي لجائزة صنّاع الإبداع في الأنبار 2026"
            width={1024}
            height={1536}
            priority
            className={s.trophyImage}
            sizes="(max-width: 639px) 45vw, (max-width: 1023px) 40vw, 420px"
          />
        </div>

        {/* Vector Calligraphy Layer preserving 8000:1949 proportions with authentic Shaddah */}
        <div ref={calligraphyRef} className={s.calligraphyWrapper}>
          <Image
            src="/brand/acma26/calligraphy.svg"
            alt="مخطوطة جائزة صنّاع الإبداع"
            width={8000}
            height={1949}
            priority
            className={s.calligraphySvg}
          />
        </div>

        {/* Context & CTAs */}
        <div ref={contentRef} className={s.heroContextBar}>
          <div className={s.editionPill}>
            <span>في الأنبار · دورة 2026</span>
          </div>
          <p className={s.organizerText}>
            تنظيم لجنة الثقافة والإعلام التابعة لمحافظة الأنبار
          </p>
          <div className={s.heroCtaGroup}>
            <a href="#participation" className={s.heroPrimaryBtn}>
              متطلبات المشاركة <ArrowUpLeft size={18} aria-hidden="true" />
            </a>
            <a href="#about" className={s.heroSecondaryBtn}>
              تعرّف على الجائزة <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <p className={s.heroAvailability}>
            الاطلاع على شروط الجائزة متاح، واستقبال الطلبات الإلكتروني غير مفعّل
            حالياً.
          </p>
          <nav className={s.quickLinks} aria-label="معلومات المشاركة">
            <a href="#fields">مجالات المشاركة</a>
            <a href="#rules">شروط المشاركة</a>
            <a href="#timeline">المواعيد</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
