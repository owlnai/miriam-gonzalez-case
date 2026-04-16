# Cómo gestionar el contenido de la web

Este documento explica cómo añadir y editar contenido desde este repo.
No hace falta tocar código. Solo archivos Markdown.

---

## Estructura del repo

```
es/
  timeline.md          → cronología completa (un solo archivo, se va ampliando)
  historia/
    01.md   → capítulo 1 → genera /historia/01-...
    02.md  → capítulo 2 → genera /historia/02-...
  ciencia/
    analisis-fgfr1.md             → artículo   → genera /ciencia/analisis-fgfr1
    perfil-neuroendocrino.md      → artículo   → genera /ciencia/perfil-...

en/
  timeline.md
  historia/
    01.md
  ciencia/
    fgfr1-analysis.md
```

> No es obligatorio tener todos los archivos en los dos idiomas.
> Si un artículo o capítulo solo existe en un idioma, la web lo muestra
> en ese idioma independientemente de lo que tenga seleccionado el usuario.
> Es mejor leer en español que no leer nada.

---

## 1. Timeline (`es/timeline.md`)

Un solo archivo. Las entradas se añaden al final. El orden en el archivo
es el orden en la web — de más antiguo arriba a más reciente abajo.

### Formato de una entrada

```yaml
- date: 10 Abril 2026
  title: Avalancha de puertas abiertas
  description: >
    VHIO acepta evaluar el caso. El jefe de onco-radioterapia de la Arrixaca
    lleva el caso a comité tumoral. Guardant360 realizado. GoFundMe activado.
  highlight: true
  link: https://x.com/miriamgonp
  linkLabel: Ver en X
```

### Campos

| Campo       | Obligatorio | Qué es |
|-------------|-------------|--------|
| `date`      | ✅ | Fecha o periodo. Texto libre: "Abril 2026", "8-9 Abril 2026", "2024 — Diagnóstico" |
| `title`     | ✅ | Título corto del hito |
| `description` | ✅ | Descripción. Usar `>` al inicio para texto que ocupa más de una línea |
| `highlight` | ✅ | `true` = hito importante (acento dorado). `false` = evento menor |
| `link`      | ❌ | URL opcional (tweet, publicación, noticia...) |
| `linkLabel` | ❌ | Texto del enlace. Obligatorio si hay `link` |

### Estructura completa del archivo

```yaml
---
entries:
  - date: 2024 — Diagnóstico
    title: Diagnóstico de cáncer de mama metastásico
    description: >
      Miriam ingresa por urgencias sin poder andar. Cáncer de mama ER+/HER2-
      con metástasis óseas exclusivas. Diferenciación neuroendocrina (~80%)
      y amplificación FGFR1 ×13 identificadas en TSO500.
    highlight: true

  - date: Marzo 2026 — Progresión
    title: Progresión ósea y hepatotoxicidad
    description: >
      Se suspende abemaciclib por DILI G2-3 y progresión ósea confirmada en PET.
      Preocupación estructural en fémur y pelvis.
    highlight: true

  - date: 10 Abril 2026
    title: Avalancha de puertas abiertas
    description: >
      VHIO acepta evaluar el caso. GoFundMe activado. Oncóloga de Houston
      se ofrece a investigar.
    highlight: true
    link: https://x.com/miriamgonp
    linkLabel: Ver en X
---
```

### Añadir una nueva entrada

Copiar este bloque al final de la lista y rellenarlo:

```yaml
  - date: 
    title: 
    description: >
      
    highlight: false
```

---

## 2. Historia (`es/historia/`)

Cada capítulo es un archivo `.md` separado. Al crear un archivo nuevo,
la web genera automáticamente una nueva página.

### Nombre del archivo

Usar número de orden + slug descriptivo:

```
01-antes-del-diagnostico.md
02-cuando-llego-el-cancer.md
03-el-equipo.md
```

El número controla el orden en el índice de la web.

### Idioma del archivo

No es obligatorio crear la versión en inglés. Si solo existe la versión
española, los usuarios en inglés verán el capítulo en español igualmente.

### Formato del archivo

```markdown
---
order: 1
title: Antes del diagnóstico
subtitle: Quién es Miriam más allá del cáncer
excerpt: Una ingeniera de software, divulgadora y podcaster que llevaba años hablando de tecnología cuando el cáncer llegó.
---

Una ingeniera de software. Divulgadora. Podcaster. Curiosa compulsiva.

Miriam no empezó a usar inteligencia artificial por su diagnóstico...

## Una nueva sección

El texto continúa aquí. Se puede usar **negrita**, *cursiva*, y cualquier
formato estándar de Markdown.

> Una cita si hace falta.
```

### Campos del frontmatter

| Campo      | Obligatorio | Qué es |
|------------|-------------|--------|
| `order`    | ✅ | Número de orden para el índice |
| `title`    | ✅ | Título del capítulo |
| `subtitle` | ❌ | Subtítulo opcional |
| `excerpt`  | ✅ | Resumen de 1-2 frases. Aparece en el índice y en redes sociales |

---

## 3. Ciencia (`es/ciencia/`)

Cada análisis o artículo generado por IA es un archivo `.md` separado.
La web genera automáticamente una página para cada uno y los lista en `/ciencia`.

### Nombre del archivo

Slug descriptivo en minúsculas con guiones:

```
analisis-fgfr1-amplificacion.md
perfil-neuroendocrino.md
resistencia-cdk4-6i.md
everolimus-drago-2019.md
```

### Idioma del archivo

Los artículos suelen generarse primero en español. No hace falta crear la
versión en inglés para publicar — los usuarios en inglés leerán el artículo
en español hasta que exista la traducción.

### Formato del archivo

```markdown
---
title: Amplificación FGFR1 ×13 como driver biológico dominante
date: 2026-04-11
tags: [FGFR1, amplificación, driver, BC-NED]
excerpt: >
  Análisis de la implicación terapéutica de la amplificación FGFR1 ×13
  en el contexto de un tumor híbrido luminal-neuroendocrino.
references:
  - id: Drago 2019
    link: https://pmc.ncbi.nlm.nih.gov/articles/PMC6825550/
  - id: NCT04483505
    link: https://www.nature.com/articles/s41698-025-01106-1
---

## El problema

La amplificación FGFR1 ×13 en este caso no es una alteración secundaria...

## Evidencia existente

El trabajo de Drago et al. (2019) documenta...

## Implicación terapéutica

Los datos sugieren que un inhibidor FGFR combinado con...

## Conclusión

En este perfil molecular específico, la estrategia óptima sería...
```

### Campos del frontmatter

| Campo        | Obligatorio | Qué es |
|--------------|-------------|--------|
| `title`      | ✅ | Título del análisis |
| `date`       | ✅ | Fecha en formato `YYYY-MM-DD` |
| `tags`       | ✅ | Lista de etiquetas para filtrar y agrupar artículos |
| `excerpt`    | ✅ | Resumen de 2-3 frases. Aparece en el índice |
| `references` | ❌ | Referencias con `id` (cómo aparece en el texto) y `link` |

---

## Datos clínicos que NO deben modificarse

Los siguientes valores son médicamente verificados. Cualquier corrección
debe consultarse con el equipo médico antes de cambiar:

| Dato | Valor correcto |
|------|----------------|
| Amplificación FGFR1 | **×13** (no ×12, no ×14) |
| Amplificación CCND1 | **×20** |
| Amplificación FGF3/FGF4/FGF19 | **×18** |
| Diferenciación neuroendocrina | **~80%** (no 70%, no 90%) |
| Ki67 inicial | **60%** |
| HER2 | **negativo (0)** |
| ECOG actual | **0** (abril 2026) |

---

## Flujo para publicar contenido nuevo

1. Crear o editar el archivo correspondiente en este repo
2. Hacer commit y push a `main`
3. La web se regenera automáticamente en los siguientes minutos

No hace falta hacer nada más en el repo de la web.
