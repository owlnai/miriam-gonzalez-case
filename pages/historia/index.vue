<template>
  <div>
    <section class="section-spacing" :aria-label="$t('story.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('story.title')"
          :subtitle="$t('story.subtitle')"
        />

        <!-- Chapter list (shown when content exists) -->
        <div v-if="chapters && chapters.length > 0" class="max-w-2xl">
          <nav :aria-label="locale === 'es' ? 'Capítulos' : 'Chapters'" class="space-y-3 mb-12">
            <NuxtLink
              v-for="chapter in chapters"
              :key="chapter._path"
              :to="localePath(`/historia/${chapter.stem?.split('/').pop()}`)"
              class="card-base flex items-start justify-between gap-4 hover:border-gold-300 transition-colors group"
            >
              <div class="flex-1 min-w-0">
                <span class="text-xs font-mono text-ink-400 mb-1 block">
                  {{ locale === 'es' ? 'Capítulo' : 'Chapter' }} {{ chapter.order }}
                </span>
                <h2 class="font-semibold text-ink-900 text-sm mb-1 group-hover:text-gold-700 transition-colors">
                  {{ chapter.title }}
                </h2>
                <p v-if="chapter.subtitle" class="text-xs text-ink-500 mb-1.5">{{ chapter.subtitle }}</p>
                <p class="text-xs text-ink-500 leading-relaxed line-clamp-2">{{ chapter.excerpt }}</p>
              </div>
              <Icon name="ph:arrow-right" class="shrink-0 w-4 h-4 text-ink-400 group-hover:text-gold-600 transition-colors mt-0.5" aria-hidden="true" />
            </NuxtLink>
          </nav>
        </div>

        <!-- Placeholder until the friend writes the content -->
        <article class="prose prose-ink max-w-2xl">
           <div class="card-base border-l-4 border-l-gold-400 mb-10">
            <p class="text-sm text-ink-600 italic leading-relaxed">
              {{ locale === 'es'
                ? 'Esta sección está siendo escrita por una persona cercana a Miriam. Contará su historia desde antes del diagnóstico: quién es más allá del cáncer, cómo llegó hasta aquí, y por qué importa lo que está haciendo. Estará disponible pronto.'
                : 'This section is being written by someone close to Miriam. It will tell her story from before the diagnosis: who she is beyond cancer, how she got here, and why what she\'s doing matters. Coming soon.'
              }}
            </p>
          </div>
          <!-- Story content -->
          <div class="space-y-6 text-ink-700">
            <p>
              {{ locale === 'es'
                ? 'Hace tres años, Míriam se dedicaba a tiempo completo a programar y crear contenido sobre tecnología. En cuestión de meses, su vida dio un giro radical.'
                : 'Three years ago, Miriam was working full-time as a software developer and creating content about technology. Within a matter of months, her life took a radical turn.'
              }}
            </p>
            <p>
              {{ locale === 'es'
                ? 'Todo empezó con un dolor de espalda, sesiones de fisioterapia y médicos de cabecera que no buscaban una solución. Como el dolor no remitía y el sistema sanitario no le ofrecía respuestas, decidió solicitar por su cuenta una resonancia magnética. Un jueves de enero de 2024, encontró en su bandeja de entrada el resultado de la prueba: «probable metástasis vertebrales». Un par de semanas después, llegó el diagnóstico final: «Carcinoma de mama con diferenciación neuroendocrina en estadio IV».'
                : 'It all began with back pain, physiotherapy sessions and GPs who couldn\'t find a solution. As the pain persisted and the healthcare system offered no answers, she decided to arrange an MRI scan herself. One Thursday in January 2024, she found the test results in her inbox: «probable vertebral metastases». A couple of weeks later, the definitive diagnosis arrived: «Stage IV breast cancer with neuroendocrine differentiation».'
              }}
            </p>
            <p>
              {{ locale === 'es'
                ? 'Durante dos años, Míriam ha ido reconstruyendo su vida pieza por pieza con tratamientos que le han dado tiempo y calma, pero con fecha de caducidad. En 2026, todo ha avanzado a gran velocidad. ¿Y si esos avances, sumados a las particularidades de su cáncer, abrieran puertas que antes parecían cerradas?'
                : 'For two years, Miriam has been rebuilding her life piece by piece with treatments that have given her time and peace of mind, but with an end date. In 2026, everything has moved forward at breakneck speed. What if these advances, combined with the specific nature of her cancer, opened doors that previously seemed closed?'
              }}
            </p>
            <p>
              {{ locale === 'es'
                ? 'En esta historia queremos contarte el caso de Míriam, su proceso y su rutina para que conozcas de verdad lo que implica vivir con cáncer en fase 4.'
                : 'In this story, we want to tell you about Míriam\'s case, her journey and her daily routine so that you can truly understand what it means to live with stage 4 cancer.'
              }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => locale.value === 'es'
    ? 'La historia de Miriam — Miriam González'
    : 'Miriam\'s Story — Miriam González',
  description: () => locale.value === 'es'
    ? 'La historia personal de Miriam González: vida con cáncer de mama metastásico en fase 4, su proceso con los tratamientos y la búsqueda de una solución de precisión.'
    : 'The personal story of Miriam González: life with stage 4 metastatic breast cancer, her treatment journey, and the search for a precision solution.',
  ogTitle: () => locale.value === 'es'
    ? 'La historia de Miriam — Miriam González'
    : 'Miriam\'s Story — Miriam González',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

const { data: chapters } = await useAsyncData(
  `historia-index-${locale.value}`,
  async () => {
    if (locale.value === 'en') {
      const enChapters = await queryCollection('story').order('order', 'ASC').all()
      if (enChapters.length) return enChapters
    }
    return queryCollection('historia').order('order', 'ASC').all()
  },
  { watch: [locale] },
)
</script>
