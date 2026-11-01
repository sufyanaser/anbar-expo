/**
 * ACMA26 Design System Tokens — Institutional Cinematic Elegance
 * Reference: Part 2 & Part 3 of explorer_m2_creative_direction/handoff.md
 * Target: جائزة الأنبار لصنّاع الإبداع 2026
 */

export const ACMA26_COLORS = {
  // Canvas Backgrounds
  navy: "#08172c",
  navyDeep: "#061120",
  navySurface: "#0c1e36",
  navySurfaceHover: "#112847",
  navyBorderGlow: "#1a3558",

  // Metallic Accents
  gold: "#d9b873",
  goldLight: "#f3dfa2",
  goldDark: "#ad8548",
  goldGlow: "rgba(217, 184, 115, 0.14)",

  // Editorial Typography
  ivory: "#f4f0e7",
  muted: "#b9c6d8",
  mutedLight: "#d1dce9",

  // Hairlines & Borders
  line: "#d9b87340",
  lineSubtle: "rgba(217, 184, 115, 0.12)",
  lineStrong: "rgba(217, 184, 115, 0.65)",
} as const;

export const ACMA26_TYPOGRAPHY = {
  fontFamily: {
    display:
      'var(--font-qomra-arabic), "Noto Sans Arabic", Tahoma, Arial, sans-serif',
    body: 'var(--font-qomra-arabic), "Noto Sans Arabic", Tahoma, Arial, sans-serif',
    latin: "var(--font-geist-sans), Arial, sans-serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  scale: {
    hero: { size: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.15 },
    h1: { size: "clamp(32px, 4vw, 54px)", lineHeight: 1.25 },
    h2: { size: "clamp(26px, 3.2vw, 42px)", lineHeight: 1.35 },
    h3: { size: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.45 },
    eyebrow: {
      size: "clamp(12px, 1.2vw, 15px)",
      lineHeight: 1.6,
      tracking: "0.14em",
    },
    bodyLead: { size: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.75 },
    body: { size: "clamp(15px, 1.3vw, 17px)", lineHeight: 1.85 },
    caption: { size: "clamp(12px, 1.1vw, 14px)", lineHeight: 1.6 },
    metric: { size: "clamp(42px, 4.8vw, 64px)", lineHeight: 1.1 },
  },
} as const;

export const ACMA26_SPACING = {
  atomic: {
    space1: "8px",
    space2: "16px",
    space3: "24px",
    space4: "32px",
    spaceCompact: "40px",
    space5: "48px",
    space6: "64px",
    space7: "96px",
    space8: "128px",
  },
  container: {
    max: "1440px",
    editorial: "1280px",
    narrow: "960px",
  },
  gutter: "clamp(16px, 4vw, 48px)",
  sectionPy: "clamp(48px, 7vw, 112px)",
  sectionPyCompact: "clamp(36px, 5vw, 72px)",
} as const;

export const ACMA26_MOTION = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "600ms",
    cinematic: "1200ms",
    fastMs: 150,
    normalMs: 300,
    slowMs: 600,
    cinematicMs: 1200,
  },
  ease: {
    cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
    hover: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    gsapCinematic: "power3.out",
  },
} as const;

/**
 * WCAG 2.2 Relative Luminance Calculation
 * Formula: L = 0.2126*R + 0.7152*G + 0.0722*B after sRGB linear expansion
 */
export function calculateRelativeLuminance(hexColor: string): number {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * WCAG 2.2 Contrast Ratio Calculation
 * Formula: (L1 + 0.05) / (L2 + 0.05)
 */
export function calculateContrastRatio(hexA: string, hexB: string): number {
  const lumA = calculateRelativeLuminance(hexA);
  const lumB = calculateRelativeLuminance(hexB);
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export const ACMA26_CONTRAST_RATIOS = {
  ivoryOnNavy: calculateContrastRatio(ACMA26_COLORS.ivory, ACMA26_COLORS.navy), // 15.79:1 (WCAG AAA)
  ivoryOnNavyDeep: calculateContrastRatio(
    ACMA26_COLORS.ivory,
    ACMA26_COLORS.navyDeep,
  ), // 16.65:1 (WCAG AAA)
  goldOnNavy: calculateContrastRatio(ACMA26_COLORS.gold, ACMA26_COLORS.navy), // 9.45:1 (WCAG AAA)
  goldOnNavyDeep: calculateContrastRatio(
    ACMA26_COLORS.gold,
    ACMA26_COLORS.navyDeep,
  ), // 9.97:1 (WCAG AAA)
  goldLightOnNavy: calculateContrastRatio(
    ACMA26_COLORS.goldLight,
    ACMA26_COLORS.navy,
  ), // 13.59:1 (WCAG AAA)
  mutedOnNavy: calculateContrastRatio(ACMA26_COLORS.muted, ACMA26_COLORS.navy), // 10.38:1 (WCAG AAA)
  mutedOnNavyDeep: calculateContrastRatio(
    ACMA26_COLORS.muted,
    ACMA26_COLORS.navyDeep,
  ), // 10.94:1 (WCAG AAA)
} as const;
