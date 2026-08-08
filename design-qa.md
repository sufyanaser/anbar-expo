# ABTF 2026 — Design QA

## Evidence

- Source visual truth: `C:\Users\sufia\.codex\attachments\456b6f7b-10d6-422c-a1aa-bb0fa9c4911c\Image.png`
- Source logo: `C:\Users\sufia\.codex\attachments\13bab1d4-3cac-4f13-a1fa-700aa6ab232a\5.svg`
- Full comparison: `C:\Users\sufia\Documents\Codex\2026-08-08\files-mentioned-by-the-user-context\outputs\qa-abtf2026\design-qa-comparison.png`
- Desktop implementation: `C:\Users\sufia\Documents\Codex\2026-08-08\files-mentioned-by-the-user-context\outputs\qa-abtf2026\design-qa-hero-desktop.png`
- Mobile implementation: `C:\Users\sufia\Documents\Codex\2026-08-08\files-mentioned-by-the-user-context\outputs\qa-abtf2026\design-qa-hero-mobile.png`
- Mobile footer focus: `C:\Users\sufia\Documents\Codex\2026-08-08\files-mentioned-by-the-user-context\outputs\qa-abtf2026\design-qa-footer-mobile.png`

## Normalization and state

- Source pixels: 1919 × 820.
- Desktop capture: 1425 × 900 CSS pixels at device scale 1; source was proportionally reduced and centered on a 1425 × 900 navy canvas for the combined comparison.
- Mobile capture: 375 × 844 CSS pixels at device scale 1.
- Footer focus: 390 × 319 CSS pixels at device scale 1.
- States: page top for hero captures; page end for footer capture.
- Primary interactions tested: header date link reached `#opening`; brand link returned to `#top`.
- Browser checks: one `main` landmark, no horizontal overflow, no failed images, and no application runtime exceptions surfaced during navigation.

## Findings

- Fonts and typography: existing Noto Sans Arabic and Geist hierarchy remains unchanged; the image treatment preserves title contrast and wrapping at desktop and mobile widths.
- Spacing and layout rhythm: existing grid, card, date panel, and 8-point-based spacing remain intact. The footer credit forms a separate, balanced brand row.
- Colors and visual tokens: navy and gold overlays align with the existing ABTF palette. The Al Raneen mark uses an authorized monochrome white treatment for contrast.
- Image quality and asset fidelity: the supplied panorama is used directly, without generated or substitute artwork, and optimized to WebP. The supplied Al Raneen SVG is rendered from its original embedded artwork and optimized to transparent WebP without changing proportions.
- Copy and content: footer states `صُممت وتُدار هذه المنصة بواسطة الرنين للحلول الإعلامية والرقمية` and preserves the existing official-information disclaimer.

## Comparison history

1. First pass — P2: the full-height mobile background placed the skyline below the first viewport, leaving only the night sky visible behind the title.
2. Fix: introduced a mobile-specific 46rem image stage with a 64% horizontal focal point, while retaining full-section coverage from the `sm` breakpoint upward.
3. Second pass: the skyline and reflections are visible in the first mobile viewport, title contrast remains strong, and no overflow or image failures remain.
4. Desktop polish: reduced the left-side overlay density so the supplied panorama is visibly integrated while keeping the right-side Arabic title readable.

## Focused evidence

- Mobile hero confirms responsive crop, readable title, visible city detail, and intact header controls.
- Mobile footer confirms the recolored logo, Arabic attribution hierarchy, and operator descriptor without clipping.

## Remaining findings

- No actionable P0, P1, or P2 findings.
- P3: the panorama is intentionally subdued beneath the event identity to preserve text contrast; this can be made brighter later if a more photographic direction is preferred.

final result: passed
