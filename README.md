# Miriam González Pérez — Precision Oncology

An informational website about Miriam González Pérez's case: metastatic breast cancer with neuroendocrine differentiation (~80%) and FGFR1 amplification ×13.

## Stack

- **Nuxt 3** — framework
- **Nuxt Content v3** — Markdown content (future: updateable sections)
- **@nuxtjs/i18n** — internationalization ES/EN
- **Tailwind CSS** — styles
- **@nuxt/icon** — icons (Phosphor Icons via Iconify)
- **Netlify Forms** — contact form (no backend)

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

```bash
npm run generate
```

Upload the `.output/public/` folder to Vercel, Netlify, or Cloudflare Pages.

For automatic deployment with Vercel:
1. Connect the GitHub repo
2. Framework preset: Nuxt.js
3. Every push to `main` triggers automatic redeployment

## Structure

```
pages/
  index.vue         → Landing (hero + GoFundMe + molecular profile + thesis)
  ciencia.vue       → Complete scientific page
  equipo.vue        → Team (anonymous, by profession)
  timeline.vue      → Week-by-week timeline
  historia.vue      → Personal story (placeholder for friend's text)
  contacto.vue      → Contact + Netlify Forms

components/
  SiteNav.vue       → Sticky navigation with i18n toggle
  SiteFooter.vue    → Footer
  SectionHero.vue   → Landing hero
  SectionCampaign.vue → GoFundMe section
  MolecularProfile.vue → Molecular profile table
  TimelineEntry.vue → Individual timeline entry
  TeamCard.vue      → Team member card
  PageHeader.vue    → Reusable page header

locales/
  es.json           → Spanish strings
  en.json           → English strings
```

## How to Update Content

### Current option (data in components)
Timeline, team, and science data lives directly in `.vue` files as `computed()`. To update:
1. Edit the corresponding file
2. Commit + push → automatic redeploy

### Future option (Markdown)
When update volume grows, migrate data to `.md` files in `content/es/` and `content/en/` using Nuxt Content. This would allow non-technical people to edit content directly from GitHub.

## How to Collaborate

We welcome contributions! Here's how you can help:

### Open an Issue
If you have a good idea, feature request, or notice something that could be improved:
1. Go to the [Issues](https://github.com/ceciCoding/miriam-gonzalez-case/issues) tab
2. Click **New Issue**
3. Describe your idea or suggestion
4. Submit — we'll review it and get back to you

### Pull Requests
- Fork the repository
- Create a feature branch: `git checkout -b feature/your-feature-name`
- Make your changes
- Submit a pull request

### Code Standards
- Mobile-first CSS (use Tailwind utilities)
- BEM naming convention for custom CSS
- No `any` in TypeScript
- Accessibility: semantic HTML, proper labels, keyboard navigation

## TODO

- [ ] Add `og-image.jpg` to `public/`
- [ ] Alba's complete text in `pages/historia.vue`. Will be added gradually
- [ ] Configure domain in Google Search Console
- [ ] Add page-specific Open Graph meta tags and favicon
- [ ] Think about a way to auto-update the timeline from social media posts or similar
- [ ] AEO or agentic search optimization
- [ ] Talk to Miriam about what images she wants to use
- [ ] Research if GoFundMe API can be used instead of iframe