"use client";

import { useEffect } from "react";

export function FinalPolishMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("[data-polish-header]");
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.dataset.motionReady = "true";

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "true");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const updateHeader = () => {
      header?.toggleAttribute("data-scrolled", window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateHeader);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
