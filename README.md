# Jayden Quaynor — Product Engineer

Personal portfolio at [jaydenquaynor.com](https://jaydenquaynor.com). Built to show how I turn ambiguous ideas and complicated operations into shipped software, and to give a hiring manager everything they need in one scroll: case studies, work history, skills, education, and a downloadable resume.

## Structure

Single page, rendered by `app/components/PortfolioExperience.tsx`:

1. **Hero** — positioning, availability, resume download
2. **Proof band** — four defensible numbers
3. **Case studies** — Viralinn, Capital Collab, Found[ERS]. Each shows the operating problem, the product decision, what shipped, my actual role, and a live link.
4. **Additional launches** — BPT Overhead, PROVN Sports, OpalKadia, OTR Health Club, GaaS Studios, Truce AI
5. **Experience** — companies, titles, dates, and what I did
6. **Skills** — grouped, on a dark slab
7. **About + Education** — UConn, BS Computer Science
8. **Footer** — contact and site map

Everything in the Experience, Skills, and Education sections is sourced from the resume in `public/Jayden-Quaynor-Resume.pdf`. Keep them in sync.

## Design

- Light mineral-gray canvas with near-black ink, chartreuse as the single signature accent, cobalt reserved for links
- Familjen Grotesk (display), Manrope (body), IBM Plex Mono (labels)
- Restrained left-aligned type scale, rounded hairline cards, dark contrast slabs for rhythm
- Real product captures, no mockups
- Responsive from 375px up, `prefers-reduced-motion` support, visible focus states throughout

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Hand-written CSS in `app/globals.css` (no CSS framework)
- `next/image` and `next/font`

## Configuration

Site-wide constants live in `app/site.ts` — name, role, location, email, social URLs, resume path, and `SITE_URL`. `SITE_URL` drives metadata, canonical, sitemap, robots, and JSON-LD; override it with `NEXT_PUBLIC_SITE_URL` if deploying to a preview domain.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run build
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/jaydenquaynor)
- [GitHub](https://github.com/JaydenQuaynor)
- [Email](mailto:JaydenQuaynor@gmail.com)
