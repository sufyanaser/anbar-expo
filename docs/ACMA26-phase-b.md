# ACMA26 Phase B implementation and Phase C acceptance record

## Authorization and verified baseline

The owner conditionally approved the Phase A blueprint on 28 October 2026. Scope is visual redesign only. No PR, merge or production deployment is authorized. Before editing, the local and remote design branch both resolved to `e215b2e1927785d8817ef2e57c672842f0d101c5`; the local working tree was clean. A separate backup of the three display/documentation files was retained before editing. Existing remediation work in its separate checkout remains untouched.

The attached reference is an artistic guide, not a literal page template. Its governor name, large blank areas and silhouette portraits are not adopted as content. Current source content and the five supplied jury photographs remain authoritative inputs for this design stage. Official content approval remains a separate gate.

## Approved architecture implemented

1. Navigation: preserve existing destinations and mobile disclosure, with the existing ANBAR EXPO mark alongside its text identity.
2. Hero: preserve the complete 1918 by 820 composite panorama, hidden semantic H1, contextual HTML and participation-status actions. No added trophy, calligraphy, landmark, fixed viewport height or cover crop.
3. Patronage: governor portrait occupies the right desktop grid column; existing attribution occupies the left. DOM text remains first for accessible reading and mobile order. The portrait is limited to 420px, with a restrained CSS edge fade; original image pixels and proportions are unchanged.
4. Introduction and facts: retain the existing introduction, secondary award logo and all four facts inside the same section.
5. Four disciplines: preserve exact category names and descriptions in the open two-column editorial grid.
6. Eligibility and rules: combine the existing audience and conditions into two labelled groups within one section. Preserve the full caveat that the summary is not the official rules document.
7. Evaluation: preserve 40, 20, 20 and 20 points and each original criterion.
8. Timeline: retain dates, stages and the unresolved closing-date/completion-date caveat.
9. Technical jury: move the existing component after the timeline; retain all five actual photographs, identities, names, specialties and image dimensions. No image data or portrait crop changes.
10. Supporting committees: retain all existing names and their verification notice.
11. Editorial statement: retain the short existing statement without another large trophy image.
12. Participation: preserve the exact component and fields, disabled fieldset/button, messages and absence of data submission/persistence.
13. FAQ and footer: preserve disclosure behavior, all current questions/answers and official links.

These are thirteen architectural groups; the FAQ and footer remain their appropriate separate semantic elements. No requirement to manufacture thirteen HTML section tags is implied.

## Controlled spacing and responsive behavior

The existing Qomra font and navy, gold, ivory and muted text tokens remain unchanged. Main content stays at a maximum 1280px. Adjacent standard sections contribute 32px plus 32px on desktop, and 24px plus 16px on mobile. Hero context, the portrait scene, the brief statement and footer have their own bounded content padding; none uses full-screen minimum heights. The introduction's facts are a grid row, not a separate page-length scene.

Governor text and portrait stack in that order on mobile. Jury keeps five columns on desktop, three on tablet, two on mobile and one at 320px. Its fixed 4:5 slots contain each original image; the narrower Ahmed Hamza image remains uncropped. Hero geometry remains the complete original panorama at every width, with separate readable HTML context on mobile. Existing focus states and reduced-motion support remain. There is no new animation library or scroll-jacking.

## Evidence limits and Phase C gate

Supported local-browser and cloud-browser control tools are unavailable in this session. No standalone replacement browser automation is used. All actual browser rendering, interactions, console and screenshots below remain NOT TESTED; reading CSS or original images is not visual verification.

- 320px: NOT TESTED; screenshot absent.
- 375px: NOT TESTED; screenshot absent.
- 390px: NOT TESTED; screenshot absent.
- 768px: NOT TESTED; screenshot absent.
- 1024px: NOT TESTED; screenshot absent.
- 1440px: NOT TESTED; screenshot absent.
- 1920px: NOT TESTED; screenshot absent.

Required browser evidence: full-page screenshots at all seven widths; hero, portrait, jury and participation close-ups; RTL, unintended horizontal overflow, links, menu/FAQ keyboard use, disabled-form status, image loading/CLS, contrast and console inspection. Do not request visual acceptance or open a PR until the owner's applicable gate is satisfied.

Technical checks must run against the resulting exact commit: npm ci, format:check, lint, typecheck, build and git diff --check. Prior successful CI on e215b2e does not validate this follow-up. The existing independent branch-only CI is used because the local Windows dependency environment was already diagnosed as unavailable. No dependency or lockfile changes are part of this implementation. Current results are recorded in the workflow run linked in the delivery report, rather than asserted here before completion.

## Red Team findings

- High, hero at 320/375/390px: complete artwork is preserved in source, but fine calligraphy readability requires real rendering. Status: NOT TESTED. Do not invent a mobile crop; propose an asset-safe alternative if rendered evidence demonstrates a problem.
- High, patronage at all widths: explicit right-column placement and reduced edge fade implement the approved intent, but background integration, facial visibility and balance are not visually accepted. Status: NOT TESTED.
- High, official information: governor personal-name wording, dates, rules and committee-name verification remain OPEN. Preserve the current caveats; do not copy a name from the reference or filename.
- Medium, page density: the former 96px section padding and separate facts/audience scenes are removed. This is source-confirmed layout work, not a proven full-page visual result. Status: NOT TESTED in browser.
- Medium, five-member jury: all five real images and contain rendering remain; row balance and the narrow source portrait require browser inspection. Status: NOT TESTED.
- Medium, award logo edges: existing source and bytes are unchanged; final-background edge acceptance remains OPEN.
- High, inherited dependency security release gate: existing audit findings are outside this visual-only scope and remain OPEN; no automatic package fixes or release claim.

Decision: Phase B source implementation is reviewable; Phase C visual verification is BLOCKED pending supported browser access. No final visual acceptance, PR, merge or production release is claimed.
