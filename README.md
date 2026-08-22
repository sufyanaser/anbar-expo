# ANBAR EXPO

Official digital platform for exhibitions and international events held in Anbar.

ANBAR EXPO is the digital platform for managing and presenting exhibitions and international events held in Anbar, designed as a scalable umbrella for multiple exhibition categories and editions.

## Product vision

ANBAR EXPO is not tied to a single fair. It provides a shared institutional shell for current and future exhibitions while giving every event an independent route, status, bilingual title, and content model.

The V1 scope is intentionally focused on public information architecture:

- Institutional Arabic-first landing page
- Event directory and static event detail pages
- Exhibitor, visitor, media, partner, and platform information routes
- Typed local event data without speculative dates, locations, sponsors, or statistics
- SEO, accessibility, responsive behavior, and CI validation

Payments, ticketing, accounts, dashboards, booth booking, CRM, authentication, and a complex CMS are outside V1.

## Architecture

The application uses the Next.js App Router and React Server Components by default. Client-side JavaScript is limited to the responsive navigation. Event content is sourced from typed local data and rendered as static pages with `generateStaticParams`.

```text
src/
├── app/                 # Routes, metadata, sitemap, robots, manifest, OG image
├── components/
│   ├── events/          # Event presentation and status components
│   ├── layout/          # Header, footer, responsive container
│   ├── sections/        # Reusable public-page sections
│   └── ui/              # Owned shadcn/ui source
├── data/                # Typed site and event records
├── lib/                 # Shared utilities
└── types/               # Domain types
```

The event data model is designed to grow toward later routes such as registration, schedules, exhibitor lists, media, and maps without introducing those systems prematurely.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS 4
- shadcn/ui with Radix primitives
- ESLint and Prettier
- GitHub Actions

## Local development

Requirements:

- Node.js 20.9 or newer
- npm 10 or newer

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev          # Start the development server
npm run lint         # Run ESLint with zero warnings allowed
npm run typecheck    # Run TypeScript without emitting output
npm run build        # Create the production build
npm run start        # Run the production build
npm run format       # Format the repository with Prettier
npm run format:check # Verify formatting without writing files
```

## Content updates

Edit `src/data/events.ts` to add or update an event. Do not publish unconfirmed dates, locations, participant counts, countries, partners, sponsors, or statistics. Optional fields should remain absent until the information is officially approved.

The canonical production origin is `https://anbarexpo.com`. The `www` hostname should redirect to the apex domain at the hosting or Cloudflare layer after production deployment is verified.

### ABTF 2026 content administration

The embedded Sanity Studio is available at `/admin`. The **أسئلة المشاركة التجارية** singleton controls:

- Page title, introduction, summary facts, and end-of-page call to action
- Ordered questions, rich-text answers, approval status, highlights, notes, and per-question visibility
- Cards, accordion, or compact-grid presentation styles
- Status legend visibility and the homepage quick-access card

Run `npm run cms:seed:participation-faq` once to create the initial FAQ document without overwriting an existing managed version.

## Environment variables

V1 requires no runtime environment variables. If external services are introduced later, document each variable in `.env.example` and keep secrets outside Git.

## Deployment

Vercel is the recommended V1 host because it supports the Next.js runtime directly.

1. Import `sufyanaser/anbar-expo` into Vercel.
2. Use `main` as the production branch.
3. Confirm the Vercel deployment URL passes the complete verification flow.
4. Add `anbarexpo.com` and `www.anbarexpo.com` to the Vercel project.
5. Apply only the DNS records Vercel requires in Cloudflare.
6. Redirect `www.anbarexpo.com` to `https://anbarexpo.com`.
7. Use Cloudflare SSL/TLS Full (Strict) after origin certificate validation.

Do not configure the custom domain before the production deployment is stable.

## Branch strategy

- `develop` is the source of truth for active development.
- `main` contains production-ready, validated code only.
- Feature work is integrated into `develop` after lint, typecheck, and build pass.
- Production promotion occurs from a validated `develop` state to `main`.
- Never commit, push, merge, or release after a failed validation command.

## Continuous integration

`.github/workflows/ci.yml` runs install, formatting verification, lint, typecheck, and build on pushes and pull requests targeting `develop` or `main`. Deployment must not proceed if this workflow fails.

## Roadmap

### V1

- Public institutional platform
- Typed exhibition data and event pages
- SEO, accessibility, responsive QA, CI, and production deployment

### Later phases

- Managed content workflows
- Exhibitor and visitor registration
- Schedules, venue maps, and event media
- Account and dashboard experiences
- Ticketing, payments, CRM, and operational integrations when formally scoped

## License

All rights reserved. Repository access does not grant permission to reuse the ANBAR EXPO name or identity.
