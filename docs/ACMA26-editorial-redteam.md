# ACMA26 — Editorial balance and red-team review

Base: production `433dff781612de4cb32024fcb0083dba5a1194cc`. Scope: the full ACMA26 public page, its navigation, directory entry, images and disabled participation guide. This is a design, accessibility and functional review, not a penetration test of Sanity/admin or a verification of the organizer's legal documents.

## Findings and corrections

1. Excessive card treatment flattened the hierarchy: leadership words, fields, rules, scores, timeline, steps and FAQ all looked like repeated panels. Replaced those panels with editorial columns, typography and thin dividers. Fact cards, committee-name cards, portrait frames and the form group remain purposeful.
2. About showed only calligraphy. Restored the complete trophy using the existing official project photograph, paired with the already-corrected calligraphy. No official mark redraw or new trophy generation.
3. Committee-name cards were unnecessarily tall. Measured new height: 76px, retaining one horizontal row. Added a small-screen swipe hint; keyboard arrow scrolling and visible focus tested.
4. The slogan lacked a distinctive identity. Owner rejected earlier calligraphic and geometric options, then explicitly approved the gold single-line design grounded in the official calligraphy. `slogan-approved.webp` is a 2172×370 derivative of the approved generated asset, trimmed only above/below to remove empty background. It has full alternative text. Original generation used the official corrected mark as a style reference and the exact phrase “فكرة تترك أثراً وإبداع يستحق التقدير”, one line.
5. Internal editorial notes appeared as public content. Removed the committee publication checklist from the page; clarified the existing rules and intake notices for visitors without changing names, dates, criteria or approved words.

## Current evidence

- Local browser: 320, 390, 768 and 1440px document width equals viewport width. Main h2 headings remain one line with no overflow.
- Committee card height: 76px; arrow-key scrolling changes RTL scrollLeft; focus outline is visible.
- Skip link moves focus to `award-title`; mobile menu opens; FAQ expands.
- All ten participation controls are disabled. Source contains no form action, submit handler, browser persistence or intake endpoint in ACMA26 components.
- All local anchor targets exist; images have alt attributes. Decorative platform mark intentionally has empty alt.
- Text-token contrast on #08172c: gold 9.45:1, muted text 10.38:1, ivory 15.79:1. This checks token pairs, not every possible photograph/background combination.
- ESLint, TypeScript, repository Prettier and whitespace checks pass.
- Original artwork pixel invariant still passes: 2,094 modified pixels; zero modifications outside the alif bounds.

## Remaining limits

- Official committee spelling and the relationship between 1 December intake closure and 31 December work completion still require organizer document verification before applications are opened. Dates and names were preserved.
- No screen-reader session, real-device touch test, backend intake test or full WCAG conformance claim. Intake is deliberately closed.
- New Preview build, published-browser acceptance and production release are recorded in the delivery report after completion.

Screenshots from this review run are saved in the task's `ACMA26-review-2` folder. A step-by-step Arabic report accompanies the delivery.
