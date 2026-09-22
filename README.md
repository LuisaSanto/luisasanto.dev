# Luisa Santo: personal website

Source for **https://www.luisasanto.dev/**, built with Next.js, React and TypeScript and exported to static files.

## Development

Use Node 22 from `.nvmrc`:

```sh
npm ci
npm run dev
```

For a production-style local preview:

```sh
npm run build
npm run preview
```

The preview binds to `127.0.0.1:4173`; the separate private product-engineering portfolio uses port `4174`.

## Checks and publication

```sh
npx playwright install chromium webkit
npm run check
```

GitHub Actions checks lint, types, the static build, desktop Chromium and mobile WebKit behavior before publishing pushes to `main` through the official GitHub Pages actions; pull requests run checks without deployment, and the workflow also supports manual runs.

The Pages custom domain is `www.luisasanto.dev`, HTTPS remains enforced, and `public/CNAME`, canonical URLs, the sitemap and robots policy preserve that public address.

## Content

| Path | Purpose |
|---|---|
| `src/lib/content.ts` | Career history, case studies, course credentials, research and recommendations |
| `src/app/page.tsx` | Current iOS portfolio |
| `src/app/work/[slug]/page.tsx` | Static case studies |
| `src/app/resume/page.tsx` | Accessible HTML and print-friendly CV |
| `public/luisa-santo-cv.pdf` | Photo-free downloadable CV |
| `scripts/export-resume.mjs` | Local PDF export from the resume page |
| `tests/portfolio.spec.ts` | Content, routing, accessibility, privacy and public-export checks |

To refresh the PDF, build the site, start `npm run preview`, run `npm run resume:pdf` in another terminal, stop the preview, and run the checks again so the new PDF is copied into `out/`.

## Source and attribution boundaries

- [GroupMe's 2025 Year in Review](https://groupme.com/blog/2025-year-in-review) supplies the 1.2 billion profile-view figure, which is product-wide scale rather than growth attributable to one engineer or iOS alone.
- Career history, education and the four DeepLearning.AI course credentials follow the owner's LinkedIn records; coursework is not professional licensure or a measured skill rating.
- The four [recommendation excerpts](https://www.linkedin.com/in/luisa-santo/details/recommendations/) are unchanged and distinguish authors' professional titles from their working relationships with Luisa; titles were reviewed in September 2026.
- The [Alpbach report](https://www.esa.int/Education/Designing_space_missions_to_enrich_quantum_physics_research_at_Alpbach_Summer_School) documents Team Blue's Best Technical Case recognition, a team result from an FFG-organised, ESA-co-sponsored programme rather than ESA employment.
- The [Team Blue photograph](https://www.esa.int/ESA_Multimedia/Images/2015/07/Alpbach_team_blue_2015) remains on its original publisher's site, credited to FFG/Summer School Alpbach/MA Jakob; no research photographs or institutional logos are republished.
- The AI delivery brief is illustrative, not a verbatim company prompt, and claims no invented productivity multiplier or prompting score.

No analytics, remote fonts, third-party embeds or contact-form services are included; keep private messages, internal source code, customer data, unreleased product details and confidential metrics out of this public repository.
