# CLAUDE.md

## About this Project

This is an informational website about **Miriam González Pérez**: a patient with metastatic HR+/HER2- breast cancer with neuroendocrine differentiation (~80%) and FGFR1 ×13 / CCND1 ×20 / 11q13 cluster amplification. The goal is to explain the case to the scientific community, raise funds for an advanced molecular rebiopsy (GoFundMe), and publicly document the process of a patient using AI and an international expert network to navigate precision oncology.

The website has two audiences: scientists/physicians (science page, molecular profile, clinical trials) and general public/donors (story, GoFundMe, timeline).

## Stack & Technical Decisions

### Framework: Nuxt 3 + SSG
- **Nuxt 3** with static generation (`npm run generate`). No backend. No database. No custom API.
- Deploy on Vercel/Netlify/Cloudflare Pages connected to GitHub. Every push to `main` triggers automatic redeployment.
- We chose SSG over SSR because content changes infrequently (weekly updates) and we want free serverless hosting.

### i18n: Spanish + English from Day 1
- `@nuxtjs/i18n` with `prefix_except_default` strategy (Spanish without prefix, English at `/en/`).
- UI strings live in `locales/es.json` and `locales/en.json`.

### Tailwind CSS
- Custom warm palette: `ink` (warm grays), `ocean` (deep blue for scientific content).
- Typography: **Fraunces** (serif, display/headings), **Source Sans 3** (sans, body), **JetBrains Mono** (mono, scientific data).
- `@tailwindcss/typography` plugin for prose on the story page.
- Custom utility classes in `assets/css/main.css`: `.section-container`, `.card-base`, `.tag-gold`, `.tag-ocean`, `.heading-display`, `.link-underline`, `.animate-fade-up`, `.stagger-children`.

### Icons
- `@nuxt/icon` with Phosphor Icons (prefix `ph:`). Examples: `ph:heart-fill`, `ph:flask-fill`, `ph:stethoscope-fill`.

### Contact Form
- Netlify Forms integrated (no backend, no Formspree). The form lives in `pages/contacto.vue`.

### Nuxt Content v3
- `@nuxt/content` v3 active. Collections defined in `content.config.ts`.
- 6 collections: `timeline_es`, `timeline_en`, `historia`, `story`, `ciencia_articles`, `science_articles`.
- Timeline: `.yml` files in `content/es/timeline.yml` and `content/en/timeline.yml`.
- Story and science: `.md` files in `content/es/historia/`, `content/en/story/`, `content/es/ciencia/`, `content/en/science/`.
- Articles/chapters are linked between languages with `translationKey` in frontmatter.
- Language-specific slugs: ES `/ciencia/analisis-fgfr1`, EN `/en/science/fgfr1-analysis` — custom routes configured in `nuxt.config.ts` under `i18n.pages`.
- If you modify `content.config.ts`, run `npx nuxt prepare` to regenerate types.

## Project Structure

```
pages/
  index.vue              → Landing: hero + GoFundMe section + molecular profile + thesis
  ciencia/
    index.vue            → Complete science page + article list
    [slug].vue           → Individual science article (ES: /ciencia/slug, EN: /en/science/slug)
  equipo.vue             → Anonymous team by profession, 3 blocks
  timeline.vue           → Timeline — consumes content/es|en/timeline.yml
  historia/
    index.vue            → Chapter list + placeholder until text arrives
    [slug].vue           → Individual chapter with prev/next pagination
  contacto.vue           → Netlify Forms contact + links + box for oncologists

content/
  es/
    timeline.yml         → Timeline entries in Spanish
    historia/            → Chapters in Spanish (.md)
    ciencia/             → Scientific articles in Spanish (.md)
  en/
    timeline.yml         → Timeline entries in English
    story/               → Chapters in English (.md)
    science/             → Scientific articles in English (.md)

components/
  SiteNav.vue       → Sticky nav, scroll-aware, mobile hamburger, i18n toggle
  SiteFooter.vue    → 3-column footer
  SectionHero.vue   → Hero with stats, CTAs, gradient background
  SectionCampaign.vue → GoFundMe section (what we're funding, why, transparency)
  MolecularProfile.vue → Biomarker table with highlighting
  TimelineEntry.vue → Timeline entry with dot, vertical line, highlight
  TeamCard.vue      → Card with icon, role, description
  PageHeader.vue    → Reusable header (tag + title + subtitle)
```

## Design Decisions

- **Editorial-warm tone**, not clinical or charity-template. The case is scientifically serious but the communication is human and accessible.
- Molecular data (biomarker table, rebiopsy panel) uses `font-mono` and colored tags to visually distinguish important findings.
- Timeline entries with `highlight: true` have a golden dot; normal entries have gray.
- The team is presented **without names** (only profession + country/city). This is intentional: collaborator privacy.
- The story section has a **placeholder with teaser text**. Alba Silvente will write the final content. Don't remove the teaser until the real text arrives.

## Important Clinical Data (don't break these when editing)

These data are medically accurate and should not be modified without verification:

- FGFR1 amplified ×13 (not ×12, not ×14)
- CCND1 amplified ×20
- FGF3/FGF4/FGF19 amplified ×18
- Neuroendocrine differentiation ~80% (not 70%, not 90%)
- Initial Ki67: 60%
- HER2 negative (0), with mention of ultralow
- Discordant RP: 5% local vs 100% external
- Low TMB, low MSI
- No pathogenic SNVs or INDELs, no fusions
- PIK3CA and ESR1 not detected in primary tissue
- ECOG 0 (April 2026)
- Exclusively bone metastases
- Drago 2019 = PMC6825550 (don't confuse with other Drago)
- Spanish trial = NCT04483505 (9.1 vs 1.9 months, FGFR1 protein by IHC)
- PRRT in breast = NCT04529044

## How to Add Content

### New Timeline Entry
Add an object to the `entries` array in `content/es/timeline.yml` and `content/en/timeline.yml` (same object in both files):
```yaml
  - date: 'April 2026 — Week X'
    title: Milestone Title
    description: >
      What happened.
    highlight: true  # or false if minor
    link: 'https://...'  # optional
    linkLabel: 'View on X'  # optional
```

### New Team Member
Add an object to the corresponding array (`coreTeam`, `medicalNetwork`, or `collaborators`) in `pages/equipo.vue`:
```js
{
  role: 'Professional Title (City/Country)',
  description: 'What they contribute to the case.',
  icon: 'ph:icon-name-fill',
  color: 'gold' | 'ocean' | 'ink',
}
```

### New Clinical Trial
Add to the `trials` array in `pages/ciencia.vue`:
```js
{
  id: 'NCT...',
  name: 'Trial Name',
  desc: 'Status or relevance.',
  link: 'https://clinicaltrials.gov/study/NCT...',
}
```

### Alba's Text (Story)
Replace the `<article>` content in `pages/historia.vue` with the real text. Keep the `prose prose-ink` structure. If the text is long, consider migrating it to `content/es/historia.md` and `content/en/historia.md`.

## Commands

```bash
pnpm run dev        # local dev at http://localhost:3000
pnpm run generate   # generate static site to .output/public/
pnpm run preview    # preview static build
```

## Important External URLs

- GoFundMe: https://gofund.me/3e25cae99
- Miriam's Twitter: https://x.com/miriamgonp
- Drago 2019: https://pmc.ncbi.nlm.nih.gov/articles/PMC6825550/
- Spanish trial NCT04483505: https://www.nature.com/articles/s41698-025-01106-1
- PRRT in breast: https://clinicaltrials.gov/study/NCT04529044

## How to Collaborate

We welcome contributions from the community! Here's how you can help:

### Open an Issue
Have a good idea or noticed something that could be improved?
1. Go to the [Issues](https://github.com/ceciCoding/miriam-gonzalez-case/issues) tab
2. Click **New Issue**
3. Describe your idea, suggestion, or bug report
4. Submit — we'll review it and get back to you

### Pull Requests
- Fork the repository
- Create a feature branch: `git checkout -b feature/your-feature-name`
- Make your changes
- Open a pull request for review

### Code Standards
- Mobile-first CSS (use Tailwind utilities)
- BEM naming for custom CSS
- No `any` in TypeScript
- Accessibility: semantic HTML, proper labels, keyboard navigation

## Pending Tasks

- [x] ~~Replace `YOUR_FORM_ID` in contact~~ → Migrated to Netlify Forms
- [ ] Alba's complete text in story
- [x] ~~Migrate timeline to `.md`~~ → Migrated to YAML in `content/es|en/timeline.yml`
- [ ] ~~Configure custom domain~~ → **helpmiriam.com**
- [ ] Consider adding an RSS feed for timeline updates
- [ ] Analytics (Plausible or similar, not Google Analytics — consistency with privacy message)

### SEO — pending (audit April 2026)

- [ ] Create `og-image.jpg` at 1200×630px and put it in `public/` — the meta tag is already there, just missing the file
- [ ] Add favicon (`public/favicon.ico` or `public/favicon.svg`)
- [ ] Schema JSON-LD: `Person` (Miriam) + `Article` on science slugs
- [ ] Verify `helpmiriam.com` in Google Search Console and submit sitemap (`/sitemap.xml`)
- [ ] Request indexing of key pages in Search Console after next deploy