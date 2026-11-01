import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const cssPath = path.join(rootDir, "src", "app", "ACMA26", "acma26.module.css");
const tsTokensPath = path.join(rootDir, "src", "lib", "acma26-tokens.ts");

console.log("=== ACMA26 Design System Token Verification Suite ===");

// 1. Check File Existence & Content
if (!fs.existsSync(cssPath)) {
  console.error("FAIL: CSS file not found at", cssPath);
  process.exit(1);
}
if (!fs.existsSync(tsTokensPath)) {
  console.error("FAIL: TypeScript tokens file not found at", tsTokensPath);
  process.exit(1);
}
const cssContent = fs.readFileSync(cssPath, "utf-8");
const tsContent = fs.readFileSync(tsTokensPath, "utf-8");
console.log("PASS: Both CSS module and TypeScript token files exist.");

// 2. Strict Negative Constraints Verification
const forbiddenStrings = ["IBM Plex Sans Arabic", "#0E2A47", "#0e2a47"];
let negativeViolations = 0;
for (const forbidden of forbiddenStrings) {
  if (cssContent.includes(forbidden)) {
    console.error(`FAIL: Found forbidden string "${forbidden}" in CSS module!`);
    negativeViolations++;
  }
  if (tsContent.includes(forbidden)) {
    console.error(
      `FAIL: Found forbidden string "${forbidden}" in TypeScript tokens!`,
    );
    negativeViolations++;
  }
}
if (negativeViolations === 0) {
  console.log("PASS: Strict Negative Constraints (0 forbidden tokens)");
} else {
  process.exit(1);
}

// 3. Required Token Definitions in CSS
const requiredTokens = [
  "--navy: #08172c",
  "--navy-deep: #061120",
  "--navy-surface: #0c1e36",
  "--navy-surface-hover: #112847",
  "--navy-border-glow: #1a3558",
  "--gold: #d9b873",
  "--gold-light: #f3dfa2",
  "--gold-dark: #ad8548",
  "--gold-glow: rgba(217, 184, 115, 0.14)",
  "--ivory: #f4f0e7",
  "--muted: #b9c6d8",
  "--muted-light: #d1dce9",
  "--line: #d9b87340",
  "--line-subtle: rgba(217, 184, 115, 0.12)",
  "--line-strong: rgba(217, 184, 115, 0.65)",
  "--font-family-display",
  "--font-family-body",
  "--font-weight-light: 300",
  "--font-weight-regular: 400",
  "--font-weight-medium: 500",
  "--font-weight-bold: 700",
  "--font-weight-black: 900",
  "--text-hero",
  "--text-h1",
  "--text-h2",
  "--text-h3",
  "--text-eyebrow",
  "--text-body-lead",
  "--text-body",
  "--text-caption",
  "--text-metric",
  "--space-1: 8px",
  "--space-2: 16px",
  "--space-3: 24px",
  "--space-4: 32px",
  "--space-compact: 40px",
  "--space-5: 48px",
  "--space-6: 64px",
  "--space-7: 96px",
  "--space-8: 128px",
  "--container-max: 1440px",
  "--container-editorial: 1280px",
  "--container-narrow: 960px",
  "--gutter: clamp(16px, 4vw, 48px)",
  "--section-py: clamp(48px, 7vw, 112px)",
  "--section-py-compact: clamp(36px, 5vw, 72px)",
  "--duration-fast: 150ms",
  "--duration-normal: 300ms",
  "--duration-slow: 600ms",
  "--duration-cinematic: 1200ms",
  "--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)",
  "--ease-hover: cubic-bezier(0.2, 0.8, 0.2, 1)",
  "--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)",
];

const clean = (str) =>
  str
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([(),:])\s*/g, "$1");
const normalizedCss = clean(cssContent);
let missingTokens = 0;
for (const token of requiredTokens) {
  const normalizedToken = clean(token);
  if (!normalizedCss.includes(normalizedToken)) {
    console.error(`FAIL: Missing token definition in CSS: "${token}"`);
    missingTokens++;
  }
}

if (missingTokens === 0) {
  console.log(
    `PASS: All ${requiredTokens.length} required design system tokens verified in acma26.module.css`,
  );
} else {
  process.exit(1);
}

// 4. Reduced-Motion Verification
if (!cssContent.includes("@media (prefers-reduced-motion: reduce)")) {
  console.error("FAIL: Missing prefers-reduced-motion media query");
  process.exit(1);
}
if (
  !cssContent.includes("animation-duration: 0.01ms !important") ||
  !cssContent.includes("transform: none !important")
) {
  console.error("FAIL: Incomplete reduced-motion overrides");
  process.exit(1);
}
console.log("PASS: Complete prefers-reduced-motion safety overrides verified");

// 5. WCAG 2.2 Contrast Verification
function sRGBtoLin(colorChannel) {
  const c = colorChannel / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function getLuminance(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
}

function getContrast(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
}

const tests = [
  {
    name: "Ivory (#f4f0e7) on Navy (#08172c)",
    c1: "#f4f0e7",
    c2: "#08172c",
    min: 15.0,
    exp: "15.79",
  },
  {
    name: "Ivory (#f4f0e7) on Deep Navy (#061120)",
    c1: "#f4f0e7",
    c2: "#061120",
    min: 16.0,
    exp: "16.65",
  },
  {
    name: "Gold (#d9b873) on Navy (#08172c)",
    c1: "#d9b873",
    c2: "#08172c",
    min: 9.0,
    exp: "9.45",
  },
  {
    name: "Gold (#d9b873) on Deep Navy (#061120)",
    c1: "#d9b873",
    c2: "#061120",
    min: 9.5,
    exp: "9.97",
  },
  {
    name: "Gold Light (#f3dfa2) on Navy (#08172c)",
    c1: "#f3dfa2",
    c2: "#08172c",
    min: 13.0,
    exp: "13.59",
  },
  {
    name: "Muted (#b9c6d8) on Navy (#08172c)",
    c1: "#b9c6d8",
    c2: "#08172c",
    min: 10.0,
    exp: "10.38",
  },
  {
    name: "Muted (#b9c6d8) on Deep Navy (#061120)",
    c1: "#b9c6d8",
    c2: "#061120",
    min: 10.5,
    exp: "10.94",
  },
];

let contrastFailures = 0;
for (const t of tests) {
  const ratio = getContrast(t.c1, t.c2);
  const formatted = ratio.toFixed(2);
  if (ratio < t.min) {
    console.error(
      `FAIL: ${t.name} computed ${formatted}:1, expected >= ${t.min}:1`,
    );
    contrastFailures++;
  } else {
    console.log(`PASS: ${t.name} -> ${formatted}:1 (WCAG AAA Pass)`);
  }
}

if (contrastFailures > 0) {
  process.exit(1);
}

console.log("\nALL VERIFICATIONS PASSED SUCCESSFULLY!");
