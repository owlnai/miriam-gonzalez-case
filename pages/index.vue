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
            :to="localePath('/ciencia')"
            class="link-underline text-sm"
          >
            {{ locale === 'es' ? 'Ver la ciencia completa →' : 'See the full science →' }}
          </NuxtLink>
        </div>
        <MolecularProfile />
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
</script>
