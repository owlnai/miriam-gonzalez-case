<template>
  <div>
    <section class="section-spacing" :aria-label="$t('contact.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('contact.title')"
          :subtitle="$t('contact.subtitle')"
        />

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <!-- Info -->
          <div>
            <p class="text-ink-600 leading-relaxed mb-8">
              {{ $t('contact.message') }}
            </p>

            <div class="space-y-4">
              <a
                href="https://x.com/miriamgonp"
                target="_blank"
                rel="noopener"
                class="card-base flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <span class="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center shrink-0">
                  <Icon name="ph:x-logo-fill" class="w-5 h-5 text-white" />
                </span>
                <div>
                  <p class="font-semibold text-ink-900 text-sm group-hover:text-ocean-700 transition-colors">{{ $t('contact.twitter_label') }}</p>
                  <p class="text-xs text-ink-600">@miriamgonp</p>
                </div>
              </a>

              <a
                href="https://gofund.me/3e25cae99"
                target="_blank"
                rel="noopener"
                class="card-base flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <span class="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center shrink-0">
                  <Icon name="ph:heart-fill" class="w-5 h-5 text-white" />
                </span>
                <div>
                  <p class="font-semibold text-ink-900 text-sm group-hover:text-ocean-700 transition-colors">{{ $t('contact.gofundme_label') }}</p>
                  <p class="text-xs text-ink-600">gofund.me/3e25cae99</p>
                </div>
              </a>
            </div>

            <!-- For professionals -->
            <div class="mt-10 card-base bg-ocean-50/40 border-ocean-200/50">
              <h3 class="font-display font-semibold text-ink-900 text-sm mb-2">
                {{ locale === 'es' ? 'Para oncólogos e investigadores' : 'For oncologists and researchers' }}
              </h3>
              <p class="text-xs text-ink-600 leading-relaxed">
                {{ locale === 'es'
                  ? 'Si estás interesado/a en el caso desde una perspectiva clínica o de investigación, podemos compartir la documentación clínica completa (resumen clínico v4, panel propuesto, referencias) de forma confidencial.'
                  : 'If you\'re interested in the case from a clinical or research perspective, we can share the complete clinical documentation (clinical summary v4, proposed panel, references) confidentially.'
                }}
              </p>
            </div>
          </div>

          <!-- Contact form (Formspree) -->
          <div>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              class="card-base space-y-5"
            >
              <div>
                <label for="name" class="block text-sm font-medium text-ink-800 mb-1.5">
                  {{ locale === 'es' ? 'Nombre' : 'Name' }}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autocomplete="name"
                  class="w-full px-4 py-2.5 bg-ink-50 border border-ink-200 rounded-xl text-sm text-ink-800 placeholder:text-ink-600 focus:outline-none focus:ring-2 focus:ring-gold-600/50 focus:border-gold-600 transition-all"
                  :placeholder="locale === 'es' ? 'Tu nombre' : 'Your name'"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-ink-800 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  class="w-full px-4 py-2.5 bg-ink-50 border border-ink-200 rounded-xl text-sm text-ink-800 placeholder:text-ink-600 focus:outline-none focus:ring-2 focus:ring-gold-600/50 focus:border-gold-600 transition-all"
                  placeholder="email@ejemplo.com"
                />
              </div>

              <div>
                <label for="role" class="block text-sm font-medium text-ink-800 mb-1.5">
                  {{ locale === 'es' ? '¿Cuál es tu perfil?' : 'What\'s your role?' }}
                </label>
                <select
                  id="role"
                  name="role"
                  class="w-full px-4 py-2.5 bg-ink-50 border border-ink-200 rounded-xl text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-gold-600/50 focus:border-gold-600 transition-all"
                >
                  <option value="" disabled selected>{{ locale === 'es' ? 'Selecciona...' : 'Select...' }}</option>
                  <option value="oncologist">{{ locale === 'es' ? 'Oncólogo/a' : 'Oncologist' }}</option>
                  <option value="researcher">{{ locale === 'es' ? 'Investigador/a' : 'Researcher' }}</option>
                  <option value="journalist">{{ locale === 'es' ? 'Periodista' : 'Journalist' }}</option>
                  <option value="patient">{{ locale === 'es' ? 'Paciente / Familiar' : 'Patient / Family' }}</option>
                  <option value="tech">{{ locale === 'es' ? 'Profesional tech' : 'Tech professional' }}</option>
                  <option value="other">{{ locale === 'es' ? 'Otro' : 'Other' }}</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-ink-800 mb-1.5">
                  {{ locale === 'es' ? 'Mensaje' : 'Message' }}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  class="w-full px-4 py-2.5 bg-ink-50 border border-ink-200 rounded-xl text-sm text-ink-800 placeholder:text-ink-600 focus:outline-none focus:ring-2 focus:ring-gold-600/50 focus:border-gold-600 transition-all resize-y"
                  :placeholder="locale === 'es' ? '¿Cómo puedes ayudar o qué información tienes?' : 'How can you help or what information do you have?'"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-3 bg-ink-900 hover:bg-ink-800 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                {{ locale === 'es' ? 'Enviar mensaje' : 'Send message' }}
              </button>

              <p class="text-2xs text-ink-600 text-center">
                {{ locale === 'es'
                  ? 'Tus datos solo se usan para responder a tu mensaje. No se comparten con terceros.'
                  : 'Your data is only used to respond to your message. It is not shared with third parties.'
                }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
