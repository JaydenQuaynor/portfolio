# Jayden Quaynor — Product Engineer

Personal portfolio at [jaydenquaynor.com](https://jaydenquaynor.com). A single page with selected results, product and client case studies, work history, and a downloadable resume.

## Content

- `app/site.ts`: name, positioning, contact links, and canonical site URL.
- `app/work.ts`: case studies, project status, outcomes, and stacks.
- `app/page.tsx`: introduction, selected results, and experience.
- `public/Jayden-Quaynor-Resume.pdf`: current resume download.
- `docs/content-sources.md`: provenance and limits for the October 2026 update.

Project rows open detail panels with the problem, product decisions, shipped work, outcomes, and lessons. Desktop rows show image previews on hover; touch devices reveal previews while scrolling. Surplus is explicitly labeled as a TestFlight beta.

## Branding

Dark slate, blue accents, and a custom JQ monogram. `public/favicon.svg` is the icon source; matching ICO, Apple touch, and manifest icons cover browser and home-screen surfaces. `app/opengraph-image.tsx` generates the social share image. Metadata, canonical URL, sitemap, robots, and structured data use the shared site constants.

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
