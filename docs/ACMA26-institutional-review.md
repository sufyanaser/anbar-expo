# ACMA26 institutional refinement — 2026-10-29

## Source verification

- Requested Preview: https://anbar-expo-8ctbmf79c-nasai.vercel.app/ACMA26
- Deployment: `dpl_9YMnsgbtQMpnufXro6ahfjg1Dvjo`, READY, Preview.
- Source: `design/acma26-cinematic-editorial`, `cc9ee35685e88641d19fec210e807b88afd120c3`.
- Project: `prj_J1LYLzbsLIXF2Ver9ym3jHdFiqGd`, anbar-expo, NASai.
- Compared against develop `6fa2521dfd482505fcfef2fc9872e09890832eac`: diverged, ahead 6 / behind 1. Common ancestor `f32d08dcaac76bf96b88f0bd3fcb130b00dc410d`.
- Develop-only change adds `.github/workflows/antigravity-agent.yml`; no page code. Kept this implementation based on the exact requested Preview rather than replacing it with develop.

## Assets and edits

- Retained original assets. All person mappings come from the existing project asset manifest, not facial identification.
- `hero-panorama-corrected.png`: only surplus alif removed. Full generated candidate rejected because it altered unrelated details. A masked sky patch was composited into the original decoded image and saved losslessly. Changed pixels: 2,094. No changes outside x=1292..1324, y=196..315. `node scripts/acma26-asset-refinement.mjs` verifies this invariant.
- Built-in image editor prompt: remove only the surplus initial alif in اصناع, preserve all other calligraphy, trophy and panorama. Only a local sky sample from that output was used, not its redrawn calligraphy.
- `governor-navy.webp`: built-in image edit, prompt: replace only gray background with navy #08172c, preserve person, face, suit, pose and composition. Visually reviewed; as a generative derivative it still requires owner visual acceptance, and is not claimed pixel-identical to the original portrait.
- Jury framing uses CSS scale/position per person; original portrait files unchanged.
- Original conversation screenshots inspected as references for governor and participation layouts.

## Content approval

The owner approved all three drafted messages on 2026-10-29, requested removal of review labels, and supplied the governor's display name “المهندس عمر مشعان دبوس” and title “محافظ الأنبار”. Dr. Moayad's role is “المشرف العام على الجائزة”; Sufyan's is “مصمم جائزة صنّاع الإبداع”. The messages are published as approved editorial words, without claiming they are transcriptions of a recorded speech.

The second review expanded “من التنظيم إلى التصميم”, replaced the old About logo with a lossless crop of the corrected calligraphy, and extended the card system to facts, fields, rules, scores, timeline and FAQ. All main h2 headings stay on one line; their old long supporting phrase in About is now a separate paragraph. Existing committee spelling, dates and official rules notices remain. Intake stays disabled with no submission action, endpoint or persistence.

## Validation

- Production build: PASS, 33 static pages generated.
- ESLint: PASS.
- TypeScript: PASS.
- Prettier repository check: PASS.
- git diff whitespace check: PASS.
- Artwork pixel invariant: PASS.
- Browser: RTL confirmed. At 320 and 390px document width equals viewport width after fixing grid-child min-width on committee containers. All participation controls disabled.
- Browser console: no error observed; development-only LCP advisory when navigating directly to the jury anchor.
- Second review: all h2 headings measured at 320, 390 and 1024px: single line and no heading overflow; document width equals viewport width.
- Screenshots: `docs/qa/about-mobile.jpg`, `docs/qa/leadership-desktop.jpg`.
- First Preview: `dpl_B9M4t9DaJFGmsVnuoZ5VnUW4DgY7`, READY, commit f5b8afd. Remote browser QA is blocked by Vercel Authentication and connector 403. Team authorization requested through the supported consent flow.
- Latest local default build: environment prevented Turbopack child process port binding. Webpack fallback and updated Vercel build tracked separately below.

No production deployment or merge has been performed.
