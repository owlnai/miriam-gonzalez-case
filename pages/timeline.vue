<template>
  <div>
    <section class="section-spacing" :aria-label="$t('timeline.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('timeline.title')"
          :subtitle="$t('timeline.subtitle')"
        />

        <ul :aria-label="$t('timeline.title')" class="max-w-2xl">
          <TimelineEntry
            v-for="entry in timelineEntries"
            :key="entry.date"
            :entry="entry"
          />
        </ul>

        <!-- More to come -->
        <div class="mt-12 card-base bg-gold-50/40 border-gold-200/50 max-w-2xl">
          <p class="text-sm text-ink-600 leading-relaxed">
            {{ locale === 'es'
              ? 'Esta cronología se actualiza semanalmente. Puedes seguir el día a día en tiempo real en X/Twitter.'
              : 'This timeline is updated weekly. You can follow the day-to-day in real time on X/Twitter.'
            }}
          </p>
          <a
            href="https://x.com/miriamgonp"
            target="_blank"
            rel="noopener"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ocean-600 hover:text-ocean-800 transition-colors"
          >
            <Icon name="ph:x-logo-fill" class="w-4 h-4" />
            @miriamgonp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const timelineEntries = computed(() =>
  locale.value === 'es'
    ? [
        {
          date: '2021 — Antecedentes',
          title: 'Un primer aviso que quedó sin respuesta',
          description: 'Miriam acude a urgencias por un sangrado. Le realizan una ecografía. El resultado es normal. Y ahí se queda la cosa.',
          highlight: false,
        },
        {
          date: '31 de octubre de 2023 — Síntomas',
          title: 'Empieza el dolor de espalda',
          description: 'Miriam empieza a notar un dolor lumbar persistente. Semanas de fisioterapia y consultas sin una respuesta clara. Hasta que ella misma solicita una resonancia magnética.',
          highlight: false,
        },
        {
          date: '11 de enero de 2024 — Diagnóstico',
          title: 'El resultado llega por email',
          description: 'El informe de la resonancia llega por email, un jueves por la mañana. La conclusión: "probable metástasis vertebrales". Sin médico al lado. Sin contexto. Solo una pantalla. Ese mismo día, Miriam ingresa por urgencias. El martes siguiente tiene el diagnóstico completo: carcinoma de mama con diferenciación neuroendocrina estadio IV, con metástasis óseas múltiples y compresión medular en L3. Tiene 32 años. Ese mismo martes empieza la radioterapia sobre la vértebra afectada.',
          highlight: true,
        },
        {
          date: 'Enero–febrero de 2024 — Primera línea',
          title: 'Tratamiento: Letrozol + Ribociclib',
          description: 'Se inicia primera línea de tratamiento con letrozol, ribociclib, supresión ovárica y ácido zoledrónico. Tras el primer ciclo, Miriam ingresa de urgencias con dificultad respiratoria aguda. El ribociclib se suspende definitivamente.',
          highlight: false,
        },
        {
          date: 'Febrero–abril de 2024 — Ingreso urgente',
          title: '50 días hospitalizada, 10 en UCI',
          description: 'La neutropenia severa causada por el ribociclib derivó en una neumonía necrotizante bilateral con áreas de necrosis pulmonar. Miriam ingresa en UCI con insuficiencia respiratoria grave, plaquetas en niveles críticos y necesidad de soporte respiratorio de alto flujo. Se realizan fibrobroncoscopia, transfusiones y antibioterapia intensiva. La estancia total supera los 50 días. Fue el momento más grave desde el diagnóstico.',
          highlight: true,
          image: '/img/uci.jpeg',
        },
        {
          date: 'Julio de 2024 — DIPCAN',
          title: 'El tumor revela su identidad molecular',
          description: 'Miriam participa en el estudio DIPCAN, que permite realizar un análisis genómico avanzado (TSO500) sobre tejido tumoral. Los resultados cambian la comprensión del caso: diferenciación neuroendocrina del ~80%, amplificación FGFR1 ×13 y otros marcadores del cluster 11q13. Por primera vez, el tumor tiene un perfil molecular definido.',
          highlight: true,
        },
        {
          date: 'Enero de 2025 — Segunda línea',
          title: 'Tratamiento: Fulvestrant + Abemaciclib',
          description: 'Tras confirmar progresión en PET-TAC, se inicia segunda línea con fulvestrant y abemaciclib.',
          highlight: false,
        },
        {
          date: 'Marzo de 2026 — Progresión',
          title: 'Segunda línea suspendida por toxicidad grave',
          description: 'El abemaciclib se suspende por hepatotoxicidad grave (DILI G2-3) y progresión ósea confirmada en PET. Hay preocupación estructural en fémur derecho y pelvis. ECOG 0 — es decir, Miriam mantiene plena capacidad funcional: trabaja, se mueve y hace vida normal a pesar de todo.',
          highlight: false,
        },
        {
          date: 'Abril 2026 — Semana 1',
          title: 'Se forma el equipo y empieza la búsqueda',
          description: 'Miriam empieza a investigar su caso con inteligencia artificial. Un hilo en Twitter. Unos profesionales que lo ven y dicen: yo puedo ayudar. En días, se forma un equipo multidisciplinar espontáneo con especialistas de cuatro países.',
          highlight: true,
          link: 'https://x.com/miriamgonp/status/2041824144484917749',
          linkLabel: 'Ver el hilo original en Twitter →',
        },
        {
          date: '8–9 de abril de 2026 — IA',
          title: 'Documentación clínica generada con IA',
          description: 'Se genera el resumen clínico completo del caso usando modelos de lenguaje avanzados. El documento está diseñado para segundas opiniones internacionales y para comunicar el caso a especialistas de alto nivel.',
          highlight: true,
          link: 'https://x.com/javilop/status/2041905341059973294',
          linkLabel: 'Ver hilo de documentación →',
        },
      ]
    : [
        {
          date: '2021 — Background',
          title: 'A first warning that went unanswered',
          description: 'Miriam goes to the emergency room for bleeding. An ultrasound is performed. The result is normal. And that\'s where it ends.',
          highlight: false,
        },
        {
          date: 'October 31, 2023 — Symptoms',
          title: 'Back pain begins',
          description: 'Miriam begins to notice persistent lower back pain. Weeks of physiotherapy and consultations with no clear answer — until she requests an MRI herself.',
          highlight: false,
        },
        {
          date: 'January 11, 2024 — Diagnosis',
          title: 'The result arrives by email',
          description: 'The MRI report arrives by email on a Thursday morning. The conclusion: "probable vertebral metastases." No doctor present. No context. Just a screen. That same day, Miriam is admitted to the emergency room. The following Tuesday she receives the full diagnosis: stage IV breast cancer with neuroendocrine differentiation, multiple bone metastases, and spinal cord compression at L3. She is 32 years old. That same Tuesday, radiotherapy begins on the affected vertebra.',
          highlight: true,
        },
        {
          date: 'January–February 2024 — First line',
          title: 'Treatment: Letrozole + Ribociclib',
          description: 'First-line treatment begins with letrozole, ribociclib, ovarian suppression, and zoledronic acid. After the first cycle, Miriam is urgently admitted with acute respiratory failure. Ribociclib is permanently discontinued.',
          highlight: false,
        },
        {
          date: 'February–April 2024 — Urgent admission',
          title: '50 days hospitalized, 10 in ICU',
          description: 'The severe neutropenia caused by ribociclib led to bilateral necrotizing pneumonia with areas of pulmonary necrosis. Miriam is admitted to the ICU with severe respiratory failure, critically low platelet counts, and the need for high-flow respiratory support. Bronchoscopy, transfusions, and intensive antibiotic therapy are required. Total hospital stay exceeds 50 days. This was the most critical moment since diagnosis.',
          highlight: true,
          image: '/img/uci.jpeg',
        },
        {
          date: 'July 2024 — DIPCAN',
          title: 'The tumor reveals its molecular identity',
          description: 'Miriam participates in the DIPCAN study, enabling advanced genomic analysis (TSO500) on tumor tissue. The results change the understanding of the case: ~80% neuroendocrine differentiation, FGFR1 ×13 amplification, and other markers in the 11q13 cluster. For the first time, the tumor has a defined molecular profile.',
          highlight: true,
        },
        {
          date: 'January 2025 — Second line',
          title: 'Treatment: Fulvestrant + Abemaciclib',
          description: 'Following confirmed progression on PET-CT, second-line treatment begins with fulvestrant and abemaciclib.',
          highlight: false,
        },
        {
          date: 'March 2026 — Progression',
          title: 'Second line discontinued due to severe toxicity',
          description: 'Abemaciclib is discontinued due to severe hepatotoxicity (DILI G2-3) and bone progression confirmed on PET. Structural concern in the right femur and pelvis. ECOG 0 — meaning Miriam maintains full functional capacity: she works, moves, and lives a normal life despite everything.',
          highlight: false,
        },
        {
          date: 'April 2026 — Week 1',
          title: 'The team forms and the search begins',
          description: 'Miriam begins researching her own case with artificial intelligence. A thread on Twitter. A few professionals who see it and say: I can help. Within days, a spontaneous multidisciplinary team forms with specialists from four countries.',
          highlight: true,
          link: 'https://x.com/miriamgonp/status/2041824144484917749',
          linkLabel: 'See the original thread on Twitter →',
        },
        {
          date: 'April 8–9, 2026 — AI',
          title: 'Clinical documentation generated with AI',
          description: 'A complete clinical summary of the case is generated using advanced language models. The document is designed for international second opinions and to communicate the case to high-level specialists.',
          highlight: true,
          link: 'https://x.com/javilop/status/2041905341059973294',
          linkLabel: 'See documentation thread →',
        },
      ]
)
</script>
