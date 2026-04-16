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
          date: '2024 — Diagnóstico',
          title: 'Diagnóstico de cáncer de mama metastásico',
          description: 'Miriam ingresa por urgencias sin poder andar. Se diagnostica cáncer de mama ER+/HER2- con metástasis óseas exclusivas y alta actividad metabólica en PET. Se identifica diferenciación neuroendocrina (~80%) y amplificación FGFR1 ×13 en TSO500.',
          highlight: true,
        },
        {
          date: '2024 — Primera línea',
          title: 'Tratamiento: Letrozol + Ribociclib',
          description: 'Inicio de primera línea con letrozol, ribociclib, supresión ovárica y ácido zoledrónico. Ribociclib se suspende precozmente por toxicidad grave.',
          highlight: false,
        },
        {
          date: 'Enero 2025 — Segunda línea',
          title: 'Tratamiento: Fulvestrant + Abemaciclib',
          description: 'Cambio a segunda línea. Se añade abemaciclib con fulvestrant.',
          highlight: false,
        },
        {
          date: 'Marzo 2026 — Progresión',
          title: 'Progresión ósea y hepatotoxicidad',
          description: 'Se suspende abemaciclib por DILI G2-3 y progresión ósea confirmada en PET. Preocupación estructural en fémur y pelvis.',
          highlight: true,
        },
        {
          date: 'Abril 2026 — Semana 1',
          title: 'Se forma el equipo y empieza la búsqueda',
          description: 'Miriam comienza a investigar su caso con IA. Se forma un equipo multidisciplinar espontáneo. Contacto con oncólogo molecular en Suiza. Primer hilo en X sobre oncología de precisión y uso de IA.',
          highlight: true,
          link: 'https://x.com/miriamgonp',
          linkLabel: 'Ver en X',
        },
        {
          date: '8-9 Abril 2026',
          title: 'Documentación clínica con IA',
          description: 'Se genera el resumen clínico completo para segundas opiniones usando modelos de lenguaje. Se diseña el panel de rebiopsia propuesto.',
          highlight: false,
        },
        {
          date: '10 Abril 2026',
          title: 'Avalancha de puertas abiertas',
          description: 'VHIO acepta evaluar el caso. El jefe de onco-radioterapia de la Arrixaca lleva el caso a comité tumoral. Oncólogo peruano valida el enfoque con publicación en LinkedIn. Biopsia líquida Guardant360 realizada. GoFundMe activado. Oncóloga de Houston se ofrece a investigar.',
          highlight: true,
        },
        {
          date: '11 Abril 2026',
          title: 'Evidencia clave y contacto con WIN',
          description: 'Se identifican hallazgos bibliográficos clave (Drago 2019, NCT04483505) que refuerzan la estrategia. Contacto con Esmeralda (oncóloga tratante). Dr. Buccella valida todo públicamente en X. Se empieza a preparar la web.',
          highlight: true,
        },
      ]
    : [
        {
          date: '2024 — Diagnosis',
          title: 'Metastatic breast cancer diagnosis',
          description: 'Miriam is admitted through the ER unable to walk. Diagnosed with ER+/HER2- breast cancer with bone-only metastases and high metabolic activity on PET. Neuroendocrine differentiation (~80%) and FGFR1 ×13 amplification identified on TSO500.',
          highlight: true,
        },
        {
          date: '2024 — First line',
          title: 'Treatment: Letrozole + Ribociclib',
          description: 'First-line with letrozole, ribociclib, ovarian suppression and zoledronic acid. Ribociclib discontinued early due to severe toxicity.',
          highlight: false,
        },
        {
          date: 'January 2025 — Second line',
          title: 'Treatment: Fulvestrant + Abemaciclib',
          description: 'Switch to second line. Abemaciclib added with fulvestrant.',
          highlight: false,
        },
        {
          date: 'March 2026 — Progression',
          title: 'Bone progression and hepatotoxicity',
          description: 'Abemaciclib discontinued due to DILI G2-3 and confirmed bone progression on PET. Structural concern in femur and pelvis.',
          highlight: true,
        },
        {
          date: 'April 2026 — Week 1',
          title: 'The team forms and the search begins',
          description: 'Miriam starts investigating her case with AI. A spontaneous multidisciplinary team forms. Contact with molecular oncologist in Switzerland. First X thread on precision oncology and AI use.',
          highlight: true,
          link: 'https://x.com/miriamgonp',
          linkLabel: 'See on X',
        },
        {
          date: 'April 8-9, 2026',
          title: 'Clinical documentation with AI',
          description: 'Complete clinical summary generated for second opinions using language models. Proposed re-biopsy panel designed.',
          highlight: false,
        },
        {
          date: 'April 10, 2026',
          title: 'Avalanche of open doors',
          description: 'VHIO agrees to evaluate the case. Head of radiation oncology at Arrixaca takes the case to tumor board. Peruvian oncologist validates approach with LinkedIn publication. Guardant360 liquid biopsy performed. GoFundMe activated. Houston oncologist offers to investigate.',
          highlight: true,
        },
        {
          date: 'April 11, 2026',
          title: 'Key evidence and WIN contact',
          description: 'Key literature findings identified (Drago 2019, NCT04483505) reinforcing the strategy. Contact with Esmeralda (treating oncologist). Dr. Buccella publicly validates on X. Website preparation begins.',
          highlight: true,
        },
      ]
)
</script>
