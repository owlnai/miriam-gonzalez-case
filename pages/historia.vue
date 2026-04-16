<template>
  <div>
    <section class="section-spacing" :aria-label="$t('story.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('story.title')"
          :subtitle="$t('story.subtitle')"
        />

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

          <!-- Preview / teaser content -->
          <div class="space-y-6 text-ink-700">
            <p class="text-lg font-display font-medium text-ink-900">
              {{ locale === 'es'
                ? 'Una ingeniera de software. Divulgadora. Podcaster. Curiosa compulsiva.'
                : 'A software engineer. Communicator. Podcaster. Compulsively curious.'
              }}
            </p>
            <p>
              {{ locale === 'es'
                ? 'Miriam no empezó a usar inteligencia artificial por su diagnóstico. Llevaba años hablando de tecnología, de cómo las herramientas digitales están cambiando la forma en que entendemos el mundo. Cuando el cáncer llegó, hizo lo que siempre ha hecho: investigar, preguntar, conectar, y compartir lo que aprende.'
                : 'Miriam didn\'t start using artificial intelligence because of her diagnosis. She had been talking about technology for years, about how digital tools are changing the way we understand the world. When cancer came, she did what she\'s always done: research, ask, connect, and share what she learns.'
              }}
            </p>
            <p>
              {{ locale === 'es'
                ? 'Lo que pasó después no estaba planificado. Un hilo en Twitter. Unos cuantos profesionales que lo vieron y dijeron: yo puedo ayudar. Una IA que empezó a conectar puntos que ningún médico individual había conectado. Y de repente, un equipo internacional trabajando para que la biología de un tumor guíe el tratamiento de una persona.'
                : 'What happened next wasn\'t planned. A Twitter thread. A few professionals who saw it and said: I can help. An AI that started connecting dots that no single doctor had connected. And suddenly, an international team working to make a tumor\'s biology guide one person\'s treatment.'
              }}
            </p>
            <p class="text-ink-500 italic">
              {{ locale === 'es'
                ? '— El texto completo de esta sección llegará pronto.'
                : '— The full text of this section is coming soon.'
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
</script>
