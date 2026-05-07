# Miriam González Pérez — Oncología de Precisión

Web informativa sobre el caso de Miriam González Pérez: cáncer de mama metastásico con diferenciación neuroendocrina (~80%) y amplificación FGFR1 ×13.

## Stack

- **Nuxt 3** — framework
- **Nuxt Content v3** — contenido en Markdown (futuro, secciones actualizables)
- **@nuxtjs/i18n** — internacionalización ES/EN
- **Tailwind CSS** — estilos
- **@nuxt/icon** — iconos (Phosphor Icons via Iconify)
- **Formspree** — formulario de contacto sin backend

## Setup

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Deploy

```bash
npm run generate
```

Sube la carpeta `.output/public/` a Vercel, Netlify, o Cloudflare Pages.

Para deploy automático con Vercel:
1. Conecta el repo de GitHub
2. Framework preset: Nuxt.js
3. Cada push a `main` redespliega automáticamente

## Estructura

```
pages/
  index.vue         → Landing (hero + GoFundMe + perfil molecular + tesis)
  ciencia.vue       → Página científica completa
  equipo.vue        → Equipo (anónimo, por profesión)
  timeline.vue      → Cronología semana a semana
  historia.vue      → Historia personal (placeholder para texto de amiga)
  contacto.vue      → Contacto + formulario Formspree

components/
  SiteNav.vue       → Navegación sticky con i18n toggle
  SiteFooter.vue    → Footer
  SectionHero.vue   → Hero de la landing
  SectionCampaign.vue → Sección GoFundMe
  MolecularProfile.vue → Tabla de perfil molecular
  TimelineEntry.vue → Entrada individual del timeline
  TeamCard.vue      → Tarjeta de miembro del equipo
  PageHeader.vue    → Cabecera reutilizable de página

locales/
  es.json           → Cadenas en español
  en.json           → Cadenas en inglés
```

## Cómo actualizar contenido

### Opción actual (datos en componentes)
Los datos del timeline, equipo y ciencia están directamente en los archivos `.vue` como `computed()`. Para actualizar:
1. Edita el archivo correspondiente
2. Commit + push → redeploy automático

### Opción futura (Markdown)
Cuando el volumen de actualizaciones crezca, migrar los datos a archivos `.md` en `content/es/` y `content/en/` usando Nuxt Content. Esto permitiría que personas no técnicas editen contenido directamente desde GitHub.

## TODO

- [ ] Añadir `og-image.jpg` en `public/`
- [ ] Texto completo de Alba en `pages/historia.vue`. Se irá creando poco a poco
- [ ] Configurar dominio en Google Search Console (miriam)
- [ ] Añadir meta tags de Open Graph específicos por página
- [ ] Pensar forma de que el timeline se pueda actualizar solo a partir de publicaciones en redes relevantes o algo similar.
- [ ] AEO u optimización de búsqueda agéntica
