<template>
  <div>
    <SectionHero />
    <SectionCampaign />

    <!-- Quick science preview -->
    <section class="section-spacing" :aria-label="locale === 'es' ? 'El perfil molecular' : 'The molecular profile'">
      <div class="section-container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="heading-display text-2xl sm:text-3xl text-ink-950">
            {{ locale === 'es' ? 'El perfil molecular' : 'The molecular profile' }}
          </h2>
          <NuxtLink
            :to="localePath({ name: 'ciencia' })"
            class="link-underline text-sm"
          >
            {{ locale === 'es' ? 'Ver la ciencia completa →' : 'See the full science →' }}
          </NuxtLink>
        </div>
        <MolecularProfile />
      </div>
    </section>

    <!-- In the press -->
    <section v-if="false" class="section-spacing bg-white/50" :aria-label="locale === 'es' ? 'En los medios' : 'In the press'">
      <div class="section-container">
        <h2 class="heading-display text-2xl sm:text-3xl text-ink-950 mb-10 text-center">
          {{ locale === 'es' ? 'En los medios' : 'In the press' }}
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <a
            v-for="outlet in pressOutlets"
            :key="outlet.name"
            :href="outlet.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            :aria-label="outlet.name"
          >
            <span class="font-display font-bold text-xl text-ink-600 group-hover:text-ink-900 transition-colors">
              {{ outlet.name }}
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Thesis callout -->
    <section class="py-20 bg-ink-950 text-white relative overflow-hidden" :aria-label="locale === 'es' ? 'Tesis central' : 'Core thesis'">
      <!-- Decorative dots -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;" />

      <div class="relative section-container text-center">
        <span class="tag bg-gold-500/20 text-gold-300 border-gold-500/30 mb-6 inline-flex">
          {{ locale === 'es' ? 'Tesis central' : 'Core thesis' }}
        </span>
        <blockquote class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
          {{ locale === 'es'
            ? 'Las guías clínicas clasifican tumores complejos como "HR+ estándar" cuando su biología exige un abordaje de precisión.'
            : 'Clinical guidelines classify complex tumors as "standard HR+" when their biology demands a precision approach.'
          }}
        </blockquote>
        <p class="mt-6 text-ink-400 max-w-xl mx-auto leading-relaxed">
          {{ locale === 'es'
            ? 'Objetivo: un ensayo N-of-1 que siente precedente para la oncología de precisión en subtipos ultra-raros.'
            : 'Goal: an N-of-1 trial that sets a precedent for precision oncology in ultra-rare subtypes.'
          }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => locale.value === 'es'
    ? 'Miriam González — Oncología de precisión para un tumor ultra-raro'
    : 'Miriam González — Precision Oncology for an Ultra-Rare Tumor',
  description: () => locale.value === 'es'
    ? 'BC-NED con amplificación FGFR1 ×13. Una paciente con cáncer de mama metastásico que usa IA y una red internacional de expertos para acceder a la oncología de precisión. Apoya la rebiopsia molecular.'
    : 'BC-NED with FGFR1 ×13 amplification. A metastatic breast cancer patient using AI and an international expert network to access precision oncology. Support the molecular rebiopsy.',
  ogTitle: () => locale.value === 'es'
    ? 'Miriam González — Oncología de precisión para un tumor ultra-raro'
    : 'Miriam González — Precision Oncology for an Ultra-Rare Tumor',
  ogDescription: () => locale.value === 'es'
    ? 'BC-NED con amplificación FGFR1 ×13. Apoya la rebiopsia molecular avanzada que puede cambiar su tratamiento.'
    : 'BC-NED with FGFR1 ×13 amplification. Support the advanced molecular rebiopsy that could change her treatment.',
  ogType: 'website',
  ogUrl: () => locale.value === 'es' ? 'https://helpmiriam.com' : 'https://helpmiriam.com/en',
  twitterCard: 'summary_large_image',
  twitterTitle: () => locale.value === 'es'
    ? 'Miriam González — Oncología de precisión para un tumor ultra-raro'
    : 'Miriam González — Precision Oncology for an Ultra-Rare Tumor',
  twitterDescription: () => locale.value === 'es'
    ? 'BC-NED con amplificación FGFR1 ×13. Apoya la rebiopsia molecular avanzada.'
    : 'BC-NED with FGFR1 ×13 amplification. Support the advanced molecular rebiopsy.',
})

// Update URLs when articles are published
const pressOutlets = [
  { name: 'El País', url: '#' },
  { name: 'RTVE', url: '#' },
  { name: 'breastcancer.org', url: '#' },
  { name: 'Confidencial Salud', url: '#' },
]
</script>
