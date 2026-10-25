# ACMA26 — جائزة صنّاع الإبداع

Independent Arabic-first award landing page at `/ACMA26`, linked from the homepage directory. Organizer: لجنة الثقافة والإعلام التابعة لمحافظة الأنبار. English name: Anbar Creativity Makers Award.

## Assets

WebP derivatives of user-supplied assets; no logo redraw or AI replacement:

- `logo.webp`: GOLDEN LOGO.png, resized with transparency preserved.
- `title-gold.svg`: exact vector paths extracted from user-supplied `Typo.pdf`; a continuous metallic gold gradient is applied through a mask, with no lettering redraw.
- `hero-full.webp`: ChatGPT_Image_Oct_24,_2026,_20261025235736.jpg; full portrait, contained without cropping on desktop and mobile.
- `portrait.webp`: ChatGPT_Image_Oct_24,_2026,_20261025235733.jpg.
- `setting.webp`: Award_product_photography_session_20261025235742.jpg, full supplied frame.
- `craft-detail.webp`: lower-right detail frame from Commercial_product_photography_f…_20261025235749.jpg.
- `hero.webp` (previous hero retained): Photographing_award_against_blac…_20261024041024.jpg.
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

## Continuous navy composition

The page uses a shared deep navy canvas (#071321). The original complete black-background trophy photograph (`hero.webp`) is blended with CSS `screen` into that canvas, preserving the source trophy and engraving. No regenerated image is used. Both trophy placements use `object-fit: contain`; horizontal edge masks affect only background margins. The previous separate logo panel, photographic interlude crop and two-image gallery are replaced by one full-trophy image integrated alongside the lower statement. Header, content, form, and footer share the navy palette.
