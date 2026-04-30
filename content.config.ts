import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const timelineEntrySchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
  highlight: z.boolean(),
  link: z.string().optional(),
  linkLabel: z.string().optional(),
  image: z.string().optional(),
})

const chapterSchema = z.object({
  order: z.number(),
  title: z.string(),
  subtitle: z.string().optional(),
  excerpt: z.string(),
  translationKey: z.string(),
})

const articleSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  excerpt: z.string(),
  translationKey: z.string().optional(),
  references: z
    .array(z.object({ id: z.string(), link: z.string() }))
    .optional(),
})

export default defineContentConfig({
  collections: {
    timeline_es: defineCollection({
      type: 'data',
      source: 'es/timeline.yml',
      schema: z.object({ entries: z.array(timelineEntrySchema) }),
    }),
    timeline_en: defineCollection({
      type: 'data',
      source: 'en/timeline.yml',
      schema: z.object({ entries: z.array(timelineEntrySchema) }),
    }),
    historia: defineCollection({
      type: 'page',
      source: 'es/historia/*.md',
      schema: chapterSchema,
    }),
    story: defineCollection({
      type: 'page',
      source: 'en/story/*.md',
      schema: chapterSchema,
    }),
    ciencia_articles: defineCollection({
      type: 'page',
      source: 'es/ciencia/*.md',
      schema: articleSchema,
    }),
    science_articles: defineCollection({
      type: 'page',
      source: 'en/science/*.md',
      schema: articleSchema,
    }),
  },
})
