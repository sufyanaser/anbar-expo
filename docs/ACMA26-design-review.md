# ACMA26 editorial redesign

## Scope and baseline

The owner approved the Gate B layout on 28 October 2026. Design branch: `design/acma26-cinematic-editorial`. Verified baseline: `f32d08dcaac76bf96b88f0bd3fcb130b00dc410d`. PR #17 is merged. The original local remediation checkout was left untouched; a separate checkout was reconstructed from the exact current develop tree and signed commit, with every tracked blob verified.

## Design decisions

- Preserve the supplied panorama as one composition. No duplicate trophy, calligraphy overlay, new objects or generated people. Intrinsic dimensions and `object-fit: contain` preserve the full artwork at every viewport. Mobile uses the complete panorama followed by readable HTML context and actions.
- Keep a semantic H1 and RTL. Use the existing local Qomra weights. Retain all eligibility, field descriptions, scoring, dates, committee names and FAQ caveats; do not silently resolve official-content conflicts.
- Midnight navy, ivory and restrained gold remain the identity. Gold identifies headings, specialty labels, dividing lines and primary navigation. Existing media icons remain because they identify the four participation disciplines.
- Use a single spacing scale and open editorial layouts. Replace the repeated trophy detail image with its existing statement; retain the approved logo as a small identity detail.
- The governor portrait is encoded without cropping or retouching. A CSS edge mask softens the image boundary; its acceptance remains subject to real browser review. No personal name is inferred from the filename. The existing sponsorship attribution and title are preserved pending authoritative name approval.
- The five jury members keep their exact existing names and specialties in a separate data file. `imageSrc: null` renders a labelled neutral placeholder with no face or stock imagery. A future image uses the same fixed 4:5 slot with `object-fit: contain`. Desktop has five columns, tablet three, mobile two and 320px one. No carousel hides members or adds keyboard requirements.
- Participation stays disabled, without submission, storage or API changes. Native details provides mobile navigation and FAQ interaction without additional JavaScript. Reduced-motion styles remove transitions. Content is never hidden pending an animation.
- Design intent: ENERGY 2 / RHYTHM 3 / MOTION 1. The panoramic award image is the primary focal point; portrait, editorial fields and jury grid establish distinct secondary rhythms. The only atmospheric gradient supports the portrait; the hero fade joins the lower edge to the navy background.

## Asset provenance

See `ACMA26-design-assets.json` for original filenames, dimensions, source/output SHA-256 and encoding details. The original PNG files remain separately retained. WebP derivatives use quality 94 at original dimensions; this is format compression, not pixel-identical lossless encoding. No cropping, regeneration, face edits, path changes or new artwork. Existing hero, calligraphy, logo, detail and card assets remain unchanged on disk.

## Validation and open items

The branch-only workflow is necessary because local dependency installation is previously blocked by DNS and EPERM, and the existing Quality CI does not run on design-branch pushes. It uses the unchanged lockfile, read-only repository permissions, and pinned checkout/setup actions. No credentials or environments are added. This is technical evidence, not visual acceptance or publication approval.

| Gate | Status |
| --- | --- |
| Original remediation preservation | PASS: separate checkout, source files untouched |
| Baseline tree/commit integrity | PASS: tracked blobs, tree and signed commit verified |
| Original supplied-image inspection | PASS: both source images visually inspected |
| Five real-browser viewports and screenshots | NOT TESTED: supported browser tools unavailable |
| Desktop/mobile interaction and console | NOT TESTED |
| Final-background portrait and logo edge acceptance | OPEN |
| Governor personal name and authoritative rules/dates | OPEN |
| Dependency security release gate | OPEN: prior audit findings not changed by design work |
| Technical checks on design head | PENDING: record independent CI results |

Red-team priorities: High: verify hero readability at 320px and all five browser widths; validate governor portrait integration and official attribution. Medium: review logo edge artifacts and five-member grid balance. Mobile hierarchy, overflow, focus, contrast and CLS require rendered browser evidence; source inspection is not a substitute.

No production readiness claim, merge, deployment or participation activation. Draft PR requires completed implementation and verification; visual QA remains an explicit gate.
