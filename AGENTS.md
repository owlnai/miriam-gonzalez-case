# CLAUDE.md

## Qué es este proyecto

Web informativa sobre el caso de **Miriam González Pérez**: paciente con cáncer de mama metastásico HR+/HER2- con diferenciación neuroendocrina (~80%) y amplificación FGFR1 ×13 / CCND1 ×20 / cluster 11q13. El objetivo es explicar el caso a la comunidad científica, recaudar fondos para una rebiopsia molecular avanzada (GoFundMe), y documentar públicamente el proceso de una paciente que usa IA y una red internacional de expertos para navegar la oncología de precisión.

La web tiene dos audiencias: científicos/médicos (página de ciencia, perfil molecular, ensayos) y público general/donantes (historia, GoFundMe, timeline).

## Stack y decisiones técnicas

### Framework: Nuxt 3 + SSG
- **Nuxt 3** con generación estática (`npm run generate`). No hay backend. No hay base de datos. No hay API propia.
- Deploy en Vercel/Netlify/Cloudflare Pages conectado a GitHub. Cada push a `main` redespliega.
- Se eligió SSG sobre SSR porque el contenido cambia con poca frecuencia (actualizaciones semanales) y queremos hosting gratuito sin servidor.

### i18n: español + inglés desde el día 1
- `@nuxtjs/i18n` con estrategia `prefix_except_default` (español sin prefijo, inglés en `/en/`).
- Las cadenas de UI viven en `locales/es.json` y `locales/en.json`.

### Tailwind CSS
- Paleta custom warm: `ink` (grises cálidos), `ocean` (azul profundo para lo científico).
- Tipografía: **Fraunces** (serif, display/titulares), **Source Sans 3** (sans, cuerpo), **JetBrains Mono** (mono, datos científicos).
- Plugin `@tailwindcss/typography` para prosa en la página de historia.
- Clases utilitarias custom en `assets/css/main.css`: `.section-container`, `.card-base`, `.tag-gold`, `.tag-ocean`, `.heading-display`, `.link-underline`, `.animate-fade-up`, `.stagger-children`.

### Iconos
- `@nuxt/icon` con Phosphor Icons (prefijo `ph:`). Ejemplos: `ph:heart-fill`, `ph:flask-fill`, `ph:stethoscope-fill`.

### Formulario de contacto
- Netlify Forms integrado (sin backend ni Formspree). El formulario vive en `pages/contacto.vue`.

### Nuxt Content v3
- `@nuxt/content` v3 activo. Colecciones definidas en `content.config.ts`.
- 6 colecciones: `timeline_es`, `timeline_en`, `historia`, `story`, `ciencia_articles`, `science_articles`.
- Timeline: archivos `.yml` en `content/es/timeline.yml` y `content/en/timeline.yml`.
- Historia y ciencia: archivos `.md` en `content/es/historia/`, `content/en/story/`, `content/es/ciencia/`, `content/en/science/`.
- Los artículos/capítulos se enlazan entre idiomas con `translationKey` en frontmatter.
- Slugs por idioma: ES `/ciencia/analisis-fgfr1`, EN `/en/science/fgfr1-analysis` — rutas custom configuradas en `nuxt.config.ts` bajo `i18n.pages`.
- Si se modifica `content.config.ts`, correr `npx nuxt prepare` para regenerar tipos.

## Estructura del proyecto

```
pages/
  index.vue              → Landing: hero + sección GoFundMe + perfil molecular + tesis
  ciencia/
    index.vue            → Página científica completa + lista de artículos
    [slug].vue           → Artículo individual de ciencia (ES: /ciencia/slug, EN: /en/science/slug)
  equipo.vue             → Equipo anónimo por profesión, 3 bloques
  timeline.vue           → Cronología — consume content/es|en/timeline.yml
  historia/
    index.vue            → Lista de capítulos + placeholder hasta que llegue el texto
    [slug].vue           → Capítulo individual con paginación prev/next
  contacto.vue           → Formulario Netlify Forms + enlaces + caja para oncólogos

content/
  es/
    timeline.yml         → Entradas del timeline en español
    historia/            → Capítulos en español (.md)
    ciencia/             → Artículos científicos en español (.md)
  en/
    timeline.yml         → Entradas del timeline en inglés
    story/               → Capítulos en inglés (.md)
    science/             → Artículos científicos en inglés (.md)

components/
  SiteNav.vue       → Nav sticky, scroll-aware, mobile hamburger, i18n toggle
  SiteFooter.vue    → Footer 3 columnas
  SectionHero.vue   → Hero con stats, CTAs, gradient background
  SectionCampaign.vue → Sección GoFundMe (qué financiamos, por qué, transparencia)
  MolecularProfile.vue → Tabla de biomarcadores con highlighting
  TimelineEntry.vue → Entrada del timeline con dot, línea vertical, highlight
  TeamCard.vue      → Tarjeta con icono, rol, descripción
  PageHeader.vue    → Cabecera reutilizable (tag + título + subtítulo)
```

## Decisiones de diseño

- **Tono editorial-warm**, no clínico ni charity-template. El caso es científicamente serio pero la comunicación es humana y accesible.
- Los datos moleculares (tabla de biomarcadores, panel de rebiopsia) usan `font-mono` y tags con colores para distinguir visualmente los hallazgos importantes.
- Las entradas del timeline con `highlight: true` tienen dot dorado; las normales, gris.
- El equipo se presenta **sin nombres** (solo profesión + país/ciudad). Es intencional: privacidad de los colaboradores.
- La sección de historia tiene un **placeholder con texto teaser**. Alba Silvente escribirá el contenido final. No eliminar el teaser hasta que llegue el texto real.

## Datos clínicos importantes (para no romperlos al editar)

Estos datos son médicamente precisos y no deben modificarse sin verificación:

- FGFR1 amplificado ×13 (no ×12, no ×14)
- CCND1 amplificado ×20
- FGF3/FGF4/FGF19 amplificado ×18
- Diferenciación neuroendocrina ~80% (no 70%, no 90%)
- Ki67 inicial: 60%
- HER2 negativo (0), con mención a ultralow
- RP discordante: 5% local vs 100% externa
- TMB baja, MSI baja
- Sin SNVs ni INDELs patogénicas, sin fusiones
- PIK3CA y ESR1 no detectados en tejido primario
- ECOG 0 (abril 2026)
- Metástasis exclusivamente óseas
- Drago 2019 = PMC6825550 (no confundir con otros Drago)
- Ensayo español = NCT04483505 (9.1 vs 1.9 meses, FGFR1 proteína por IHQ)
- PRRT en mama = NCT04529044

## Cómo añadir contenido

### Nueva entrada al timeline
Añadir un objeto al array `entries` en `content/es/timeline.yml` y `content/en/timeline.yml` (mismo objeto en ambos archivos):
```yaml
  - date: 'Abril 2026 — Semana X'
    title: Título del hito
    description: >
      Qué pasó.
    highlight: true  # o false si es menor
    link: 'https://...'  # opcional
    linkLabel: 'Ver en X'  # opcional
```

### Nuevo miembro del equipo
Añadir un objeto al array correspondiente (`coreTeam`, `medicalNetwork`, o `collaborators`) en `pages/equipo.vue`:
```js
{
  role: 'Título profesional (Ciudad/País)',
  description: 'Qué aporta al caso.',
  icon: 'ph:icon-name-fill',
  color: 'gold' | 'ocean' | 'ink',
}
```

### Nuevo ensayo clínico
Añadir al array `trials` en `pages/ciencia.vue`:
```js
{
  id: 'NCT...',
  name: 'Nombre del ensayo',
  desc: 'Estado o relevancia.',
  link: 'https://clinicaltrials.gov/study/NCT...',
}
```

### Texto de Alba (historia)
Reemplazar el contenido del `<article>` en `pages/historia.vue` con el texto real. Mantener la estructura `prose prose-ink`. Si el texto es largo, considerar migrarlo a `content/es/historia.md` y `content/en/historia.md`.

## Comandos

```bash
pnpm run dev        # desarrollo local en http://localhost:3000
pnpm run generate   # generar sitio estático en .output/public/
pnpm run preview    # previsualizar build estática
```

## URLs externas importantes

- GoFundMe: https://gofund.me/3e25cae99
- Twitter de Miriam: https://x.com/miriamgonp
- Drago 2019: https://pmc.ncbi.nlm.nih.gov/articles/PMC6825550/
- Ensayo español NCT04483505: https://www.nature.com/articles/s41698-025-01106-1
- PRRT en mama: https://clinicaltrials.gov/study/NCT04529044

## Cosas pendientes

- [x] ~~Sustituir `YOUR_FORM_ID` en contacto~~ → Migrado a Netlify Forms
- [ ] Texto completo de Alba en historia
- [x] ~~Migrar timeline a `.md`~~ → Migrado a YAML en `content/es|en/timeline.yml`
- [ ] ~~Configurar dominio personalizado~~ → **helpmiriam.com**
- [ ] Considerar añadir un RSS feed para las actualizaciones del timeline
- [ ] Analytics (Plausible o similar, no Google Analytics — coherencia con el mensaje de privacidad)

### SEO — pendiente (auditoría abril 2026)

- [ ] Crear `og-image.jpg` de 1200×630px y ponerla en `public/` — la meta tag ya está, solo falta el archivo
- [ ] Agregar favicon (`public/favicon.ico` o `public/favicon.svg`)
- [ ] Schema JSON-LD: `Person` (Miriam) + `Article` en los slugs de ciencia
- [ ] Verificar `helpmiriam.com` en Google Search Console y enviar sitemap (`/sitemap.xml`)
- [ ] Solicitar indexación de páginas clave en Search Console tras el próximo deploy