# ABTF 2026 Platform Architecture

## Route map

| Section        | Public route              | Primary data source                            |
| -------------- | ------------------------- | ---------------------------------------------- |
| Live broadcast | `/ABTF2026/live`          | `liveStreamConfig`                             |
| Program        | `/ABTF2026/program`       | `programEntries`                               |
| Gallery        | `/ABTF2026/gallery`       | `galleryEntries`                               |
| Advertising    | `/ABTF2026/advertising`   | `advertisingPlacements`                        |
| News           | `/ABTF2026/news`          | `newsEntries`                                  |
| Exhibitors     | `/ABTF2026/exhibitors`    | `exhibitorLocations`                           |
| Visitor guide  | `/ABTF2026/visitor-guide` | `exhibitorLocations` and `exhibitionBuildings` |

All current content adapters live in `src/data/abtf-platform.ts`. UI components consume typed records from `src/types/abtf-platform.ts`, so the local arrays can later be replaced by an API or CMS adapter without changing route structure or presentation components.

## Font priority

The supplied Asal Arabic ITF family is loaded with `next/font/local` and mapped as follows:

| File       | CSS weight |
| ---------- | ---------: |
| Light      |        300 |
| Regular    |        400 |
| Medium     |        500 |
| Bold       |        700 |
| Extra Bold |        800 |
| Black      |        900 |

Fallback order: Asal Arabic ITF, Noto Sans Arabic, Tahoma, Arial, sans-serif.

## Future integrations

### Live broadcast

Set `liveStreamConfig.sourceUrl` to the approved video source. The player is already separated from the offline state. HLS playback may later use the provider's native embed or an HLS client when cross-browser support requirements are confirmed.

### Program

Populate `programEntries` with stable IDs, ISO dates, start/end times, location, speaker, and state. Entries are rendered chronologically by the program route and can later come from a CMS.

### Gallery

Add optimized image assets and records to `galleryEntries`. Each record preserves its title, alternative text, and optional capture date.

### Advertising

`advertisingPlacements` defines the controlled inventory. Future campaign records should include placement ID, creative asset, destination URL, start/end timestamps, priority, and publication state. Advertising must remain visually labeled and separate from official content.

### News

Populate `newsEntries`. The listing route and `/ABTF2026/news/[slug]` detail route are ready for approved records.

### Exhibitor directory

Populate `exhibitorLocations` with the approved name, category, building, booth, floor, and coordinates. The directory search and category filtering work against the same typed records used by the visitor guide.

### Visitor GPS wayfinding

The visitor guide never requests location permission until the user selects an exhibitor with approved coordinates and explicitly presses the route button. It then:

1. Requests high-accuracy browser geolocation.
2. Uses the visitor coordinates as origin.
3. Uses the exhibitor coordinates as destination.
4. Opens walking directions in the map provider.

The four-building model is already present. Indoor floor-plan routing can later replace or augment external GPS directions when building maps, entrances, paths, and booth coordinates are supplied.

## Operating constraints

- Do not publish invented exhibitors, events, news, coordinates, or venue details.
- Keep empty states visible until approved data is available.
- Preserve `/ABTF2026` and all child routes as noindex/nofollow until the project is authorized for public indexing.
- Optimize uploaded imagery before publication and require meaningful Arabic alternative text.
- Validate every content update with formatting, lint, TypeScript, production build, and responsive browser QA.
