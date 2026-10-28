# ACMA26 — جائزة صنّاع الإبداع

Independent Arabic-first award landing page at `/ACMA26`, linked from the homepage directory. Organizer: لجنة الثقافة والإعلام التابعة لمحافظة الأنبار. English name: Anbar Creativity Makers Award.

## Assets

WebP derivatives of user-supplied assets; no logo redraw or AI replacement:

- `logo.webp`: GOLDEN LOGO.png, resized with transparency preserved.
- `hero.webp`: Photographing_award_against_blac…_20261024041024.jpg.
- `detail.webp`: ChatGPT_Image_Oct_24,_2026,_20261024041129.jpg.
- `card.webp`: ChatGPT Image Oct 24, 2026, 03_54_08 AM-1.png.

Original AI/PDF working files are not shipped to the public site. Gold styling is a page treatment derived from supplied imagery, not a declaration of approved brand color values.

## Participation status

The participation fields are an explicitly disabled preview. No personal information is submitted, stored in the browser, or sent to an API. No fake confirmation or application number is generated. There is no intake endpoint or persistence configured.

Before enabling applications:

1. Obtain the official categories, eligibility, criteria, dates, and approved rules document.
2. Approve the participation and privacy notices, including retention and access responsibilities.
3. Configure private application storage and authorized organizer access.
4. Implement server validation, abuse prevention, duplicate handling, secure attachments, and confirmed receipt IDs.
5. Verify successful submission, storage, retrieval, failures, and retry behavior end to end.

Do not enable the submit control independently of those steps. Dates, venue, categories, sponsors, and rules remain unannounced rather than invented.

## Review status (2026-10-28)

The ACMA26 landing page design was approved for implementation. The participation form remains disabled pending a secure intake workflow. Official committee spellings, sponsorship attribution, timeline wording and complete rules require document-level verification before public activation. Formatting was applied with Prettier on the feature branch; CI quality checks must pass before merging.

## Controlled identity remediation (2026-10-28)

Base: `450af3b72140d00ce93c9a7ef0bed1022f0c149a`. Working branch: `fix/acma26-identity-remediation`.

- `calligraphy.svg` contains the original 34 filled paths from the supplied `Typo.pdf`, retaining the PDF path coordinates and 33 transforms. The outer transform converts the PDF coordinate system to SVG. Only the fill is changed to the page gold, `#d9b873`.
- Original PDF SHA-256: `8df900fde243facdc730da9e7ca6a3337ea764a036385aaa0175164172ad987e`.
- SVG SHA-256: `9163be0878ab9b94c35dcfb43c03c021f53377e71e4df84280d41619cc525fce`.
- A 1600px thresholded raster comparison of the PDF and SVG yielded an intersection-over-union of 0.993243. This is asset evidence, not browser evidence.
- The visible hero title uses that SVG; the Arabic heading text remains available to assistive technologies. The full trophy asset and its `contain` treatment are unchanged.
- The technical jury strip now has a keyboard focus target, an accessible region label and visible focus styling. All five members are retained. Keyboard and touch behavior still require a browser test.
- Participation and FAQ section numbers are corrected to 09 and 10. The disabled category placeholder now refers to the four fields shown on the page. Intake remains disabled.
- The original logo derivative is retained. A trial color-only edge repair was rejected after asset inspection because it did not resolve the inherited edge artifacts adequately without risking the approved appearance. Source artwork was not modified.

### Verification gate

`git diff --check` passes. The four required npm commands were attempted, each exiting with code 1 because its executable was unavailable: Prettier, ESLint, TypeScript and Next.js. Dependency installation could not complete: npm registry DNS was unavailable, and the offline attempt encountered an `EPERM` directory error.

Browser QA at 1920, 1440, 768, 390 and 320px: **Not Tested**. No page screenshots, Console results, runtime performance measurements or rendered before/after comparison are claimed. Background blending remains unchanged pending browser evidence.

Status: **Blocked**. No remediation commit, push, Draft PR, merge or deployment should proceed until required technical checks pass. The logo edge issue, official-content verification and browser acceptance remain open.
