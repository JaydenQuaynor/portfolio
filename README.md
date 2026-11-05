# Jayden Quaynor — Product Engineer

Personal portfolio at [jaydenquaynor.com](https://jaydenquaynor.com). A single page with selected results, product and client case studies, work history, and a downloadable resume.

## Content

- `app/site.ts`: name, positioning, contact links, and canonical site URL.
- `app/work.ts`: case studies, project status, outcomes, and stacks.
- `app/page.tsx`: recruiter introduction, resume/contact links, attributed results, and experience.
- `app/components/WorkIndex.tsx`: company logos, featured product previews, project archive, and accessible case-study panels.
- `public/Jayden-Quaynor-Resume.pdf`: current resume download.
- `docs/content-sources.md`: provenance and limits for the October 2026 update.

Surplus and Viralinn lead with product interface previews. Company logos open their case studies and state the kind of work delivered. The expandable archive retains every project. Project rows open detail panels with the problem, product decisions, shipped work, outcomes, and lessons. Panels support Escape, keyboard focus containment, and focus restoration. Surplus is explicitly labeled as a TestFlight beta.

## Branding

Warm white, dark text, orange accents, and product-specific orange and violet preview surfaces. A top-bar toggle switches to dark mode and saves the preference locally. The glass header and product previews have a pointer-following white edge glow on pointer devices, with reduced-motion support. The existing JQ monogram remains the favicon. `app/opengraph-image.tsx` generates the matching light social share image. Metadata, canonical URL, sitemap, robots, and structured data use the shared site constants. Asset sources are recorded in `docs/content-sources.md`.

## Development

Next.js 15 App Router, React 19, TypeScript, and plain CSS. No application database or API keys are required.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Check the home page, project panels, resume link, icons, manifest, and share image on desktop and mobile before publishing.
