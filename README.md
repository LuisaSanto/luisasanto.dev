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
| `src/app/resume/page.tsx` | Detailed CV, shown by default |
| `src/app/resume/one-page/page.tsx` | Concise CV, linked from the detailed version |
| `src/components/resume-document.tsx` | Shared accessible HTML and print layout for both CVs |
| `public/luisa-santo-cv.pdf` | One-page PDF, retaining its existing download URL |
| `public/luisa-santo-cv-detailed.pdf` | Detailed two-page PDF |
| `docs/cv/` | Matching Markdown CVs generated from the rendered HTML |
| `scripts/export-resume.mjs` | Local PDF and Markdown export for both CV versions |
| `tests/portfolio.spec.ts` | Content, routing, accessibility, privacy and public-export checks |

To refresh both CVs, build the site, start `npm run preview`, run `npm run resume:pdf` in another terminal, stop the preview, and run the checks again so both PDFs are copied into `out/`. Check that the concise PDF is one page and the detailed PDF is two pages, with readable text and no clipped or missing content, before publishing.

The work index has separate case studies for profiles, chat bubbles, progressive image loading, streaming summaries, feedback/poll responsiveness and Teams architecture. Keep implementation contributions distinct from hypothetical examples and product-wide outcomes.

## Source and attribution boundaries

- [GroupMe's 2025 Year in Review](https://groupme.com/blog/2025-year-in-review) supplies the 1.2 billion profile-view figure, which is product-wide scale rather than growth attributable to one engineer or iOS alone.
- Career history, education and the four DeepLearning.AI course credentials follow the owner's LinkedIn records; coursework is not professional licensure or a measured skill rating.
- The 63 UI tests refer to authorship in the historical end-of-2024 GroupMe suite, not current passing tests or a coverage percentage. The 17 accessibility issues are a distinct July 2026 batch across seven merged changes, not a career-total defect count. Two internship projects refer to 2024 and 2025, not all mentoring relationships.
- The four [recommendation excerpts](https://www.linkedin.com/in/luisa-santo/details/recommendations/) are unchanged and distinguish authors' professional titles from their working relationships with Luisa; titles were reviewed in September 2026.
- The [Alpbach report](https://www.esa.int/Education/Designing_space_missions_to_enrich_quantum_physics_research_at_Alpbach_Summer_School) documents Team Blue's Best Technical Case recognition, a team result from an FFG-organised, ESA-co-sponsored programme rather than ESA employment.
- The [Team Blue photograph](https://www.esa.int/ESA_Multimedia/Images/2015/07/Alpbach_team_blue_2015) remains on its original publisher's site, credited to FFG/Summer School Alpbach/MA Jakob; no research photographs or institutional logos are republished.
- The AI task brief and instruction-file examples are illustrative and public-safe, not verbatim company prompts or private instructions. They demonstrate requirements, source verification and review practices without claiming to eliminate hallucinations or measure a productivity multiplier.
- Progressive image loading and optimistic updates change the client experience, not the underlying model or network speed. No unsupported latency reduction, support-ticket reduction or individual growth attribution is claimed.

No analytics, remote fonts, third-party embeds or contact-form services are included; keep private messages, internal source code, customer data, unreleased product details, interview-preparation material and confidential metrics out of this public repository.
