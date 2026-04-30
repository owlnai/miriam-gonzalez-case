<template>
  <div>
    <section class="section-spacing" :aria-label="$t('science.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('science.title')"
          :subtitle="$t('science.subtitle')"
          tag="BC-NED + FGFR1 × 13"
        />

        <!-- Molecular Profile -->
        <h2 class="sr-only">{{ locale === 'es' ? 'Perfil molecular' : 'Molecular profile' }}</h2>
        <MolecularProfile class="mb-12" />

        <!-- The core problem -->
        <section class="card-base mb-8 border-l-4 border-l-gold-400">
          <h2 class="font-display font-semibold text-ink-900 text-lg mb-3">
            {{ locale === 'es' ? '¿Por qué este tumor no encaja en las guías?' : 'Why doesn\'t this tumor fit the guidelines?' }}
          </h2>
          <p class="text-sm text-ink-700 leading-relaxed mb-4">
            {{ locale === 'es'
              ? 'Formalmente es un cáncer de mama luminal (HR+), pero con un ~80% de diferenciación neuroendocrina y una amplificación FGFR1 ×13. Las guías recomiendan tratarlo como un luminal estándar, minimizando el componente neuroendocrino. La literatura y el sentido clínico sugieren que este subtipo híbrido (BC-NED) tiene peor pronóstico y puede requerir estrategias completamente diferentes.'
              : 'Formally it is a luminal breast cancer (HR+), but with ~80% neuroendocrine differentiation and an FGFR1 ×13. Guidelines tend to recommend treating it as standard luminal, minimizing the neuroendocrine component. Literature and clinical reasoning suggest this hybrid subtype (BC-NED) has worse prognosis and may require completely different strategies.'
            }}
          </p>
          <p class="text-sm text-ink-700 leading-relaxed font-medium">
            {{ locale === 'es'
              ? 'La tesis: la biología, no el órgano de origen, debería guiar el tratamiento.'
              : 'The thesis: biology, not the organ of origin, should guide treatment.'
            }}
          </p>
        </section>

        <!-- Treatment history -->
        <h2 class="heading-display text-2xl text-ink-950 mb-6 mt-14">
          {{ locale === 'es' ? 'Historia de tratamientos' : 'Treatment history' }}
        </h2>
        <div class="space-y-4 mb-14">
          <div v-for="tx in treatments" :key="tx.line" class="card-base flex items-start gap-4">
            <span
              class="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
              :class="tx.active ? 'bg-gold-100 text-gold-800' : 'bg-ink-100 text-ink-500'"
            >
              {{ tx.line }}
            </span>
            <div>
              <h4 class="font-semibold text-ink-900 text-sm">{{ tx.regimen }}</h4>
              <p class="text-xs text-ink-600 mt-1 leading-relaxed">{{ tx.outcome }}</p>
            </div>
          </div>
        </div>

        <!-- Key literature -->
        <h2 class="heading-display text-2xl text-ink-950 mb-6">
          {{ locale === 'es' ? 'Evidencia científica clave' : 'Key scientific evidence' }}
        </h2>
        <div class="space-y-4 mb-14">
          <div v-for="paper in papers" :key="paper.ref" class="card-base">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="tag-ocean">{{ paper.ref }}</span>
                </div>
                <h4 class="font-semibold text-ink-900 text-sm mb-1.5">{{ paper.finding }}</h4>
                <p class="text-xs text-ink-600 leading-relaxed">{{ paper.relevance }}</p>
              </div>
              <a
                v-if="paper.link"
                :href="paper.link"
                target="_blank"
                rel="noopener"
                :aria-label="(locale === 'es' ? 'Ver referencia ' : 'View reference ') + paper.ref + (locale === 'es' ? ' (nueva pestaña)' : ' (new tab)')"
                class="shrink-0 mt-1 text-ocean-500 hover:text-ocean-700 transition-colors"
              >
                <Icon name="ph:arrow-square-out" class="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <section v-if="false">
        <!-- Proposed panel -->
          <h2 id="panel-title" class="heading-display text-2xl text-ink-950 mb-6">
            {{ locale === 'es' ? 'Panel propuesto para la rebiopsia' : 'Proposed re-biopsy panel' }}
          </h2>
          <div class="card-base overflow-hidden mb-14">
            <div class="overflow-x-auto -mx-6 sm:-mx-8 px-6 sm:px-8">
              <table class="w-full text-sm" aria-labelledby="panel-title">
                <caption class="sr-only">{{ locale === 'es' ? 'Panel de rebiopsia propuesto: componentes, métodos, dianas e implicación clínica' : 'Proposed re-biopsy panel: components, methods, targets and clinical implication' }}</caption>
                <thead>
                  <tr class="border-b-2 border-ink-200">
                    <th scope="col" class="text-left py-2 pr-3 font-semibold text-ink-800 text-xs whitespace-nowrap">
                      {{ locale === 'es' ? 'Componente' : 'Component' }}
                    </th>
                    <th scope="col" class="text-left py-2 pr-3 font-semibold text-ink-800 text-xs whitespace-nowrap">
                      {{ locale === 'es' ? 'Método' : 'Method' }}
                    </th>
                    <th scope="col" class="text-left py-2 pr-3 font-semibold text-ink-800 text-xs">
                      {{ locale === 'es' ? 'Dianas' : 'Targets' }}
                    </th>
                    <th scope="col" class="text-left py-2 font-semibold text-ink-800 text-xs">
                      {{ locale === 'es' ? 'Implicación' : 'Implication' }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in panelRows"
                    :key="i"
                    class="border-b border-ink-100 last:border-0"
                    :class="i % 2 === 0 ? 'bg-ocean-50/20' : ''"
                  >
                    <td class="py-2.5 pr-3 text-xs font-medium text-ink-900 whitespace-nowrap">{{ row.component }}</td>
                    <td class="py-2.5 pr-3 text-xs text-ink-600 whitespace-nowrap">{{ row.method }}</td>
                    <td class="py-2.5 pr-3 text-xs text-ink-600">{{ row.targets }}</td>
                    <td class="py-2.5 text-xs text-ink-600">{{ row.implication }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        <!-- N-of-1 goal -->
        <div class="card-base bg-ink-950 text-white border-0 mb-16">
          <div class="flex items-center gap-2.5 mb-4">
            <span class="w-9 h-9 rounded-xl bg-gold-500/20 flex items-center justify-center">
              <Icon name="ph:target-fill" class="w-5 h-5 text-gold-400" />
            </span>
            <h3 class="font-display font-semibold text-lg">
              {{ locale === 'es' ? 'Objetivo: Ensayo N-of-1' : 'Goal: N-of-1 Trial' }}
            </h3>
          </div>
          <p class="text-sm text-ink-300 leading-relaxed mb-3">
            {{ locale === 'es'
              ? 'Un ensayo donde Míriam es la única unidad de análisis, con decisiones terapéuticas guiadas por su perfil molecular específico y no por "HR+ genérico". La ruta: rebiopsia con panel avanzado → MTB internacional en WIN Consortium para ensayo N-of-1 molecularmente dirigido con IA.'
              : 'A trial where Miriam is the sole unit of analysis, with therapeutic decisions guided by her specific molecular profile rather than "generic HR+". The path: re-biopsy with advanced panel → MTB at WIN Consortium international board for a molecularly-directed N-of-1 trial with AI.'
            }}
          </p>
          <p class="text-sm text-ink-400 leading-relaxed mb-3">
            {{ locale === 'es'
              ? 'WIN Consortium (Worldwide Innovative Network in Oncology) es una red internacional que conecta centros de excelencia en oncología de precisión con el objetivo de diseñar estrategias diagnósticas y terapéuticas personalizadas.'
              : 'WIN Consortium (Worldwide Innovative Network in Oncology) is an international network connecting centres of excellence in precision oncology to design personalised diagnostic and therapeutic strategies.'
            }}
          </p>
          <p class="text-sm text-gold-400 font-medium">
            {{ locale === 'es'
              ? 'Esto sentaría un precedente: la oncología de precisión adaptada a cada paciente, sin burocracia con el tumor principal.'
              : 'This would set a precedent: precision oncology adapted to each patient, without bureaucracy around the primary tumor.'
            }}
          </p>
        </div>

        <!-- Science articles from content/ -->
        <div v-if="articles && articles.length > 0">
          <h2 class="heading-display text-2xl text-ink-950 mb-6">
            {{ locale === 'es' ? 'Análisis detallados' : 'Detailed analyses' }}
          </h2>
          <div class="space-y-4">
            <NuxtLink
              v-for="article in articles"
              :key="article._path"
              :to="localePath(`/ciencia/${article.stem?.split('/').pop()}`)"
              class="card-base flex items-start justify-between gap-4 hover:border-gold-300 transition-colors group"
            >
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap items-center gap-1.5 mb-2">
                  <span v-for="tag in article.tags" :key="tag" class="tag-ocean text-xs">{{ tag }}</span>
                </div>
                <h3 class="font-semibold text-ink-900 text-sm mb-1 group-hover:text-ocean-700 transition-colors">{{ article.title }}</h3>
                <p class="text-xs text-ink-500 leading-relaxed line-clamp-2">{{ article.excerpt }}</p>
              </div>
              <Icon name="ph:arrow-right" class="shrink-0 w-4 h-4 text-ink-400 group-hover:text-ocean-600 transition-colors mt-0.5" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => locale.value === 'es'
    ? 'Perfil Molecular BC-NED + FGFR1 ×13 — Ciencia | Miriam González'
    : 'Molecular Profile BC-NED + FGFR1 ×13 — Science | Miriam González',
  description: () => locale.value === 'es'
    ? 'Análisis científico completo del caso: cáncer de mama con ~80% diferenciación neuroendocrina, amplificación FGFR1 ×13, CCND1 ×20. Historia de tratamientos, rebiopsia propuesta y ensayos clínicos relevantes.'
    : 'Full scientific analysis: breast cancer with ~80% neuroendocrine differentiation, FGFR1 ×13 amplification, CCND1 ×20. Treatment history, proposed rebiopsy, and relevant clinical trials.',
  ogTitle: () => locale.value === 'es'
    ? 'Perfil Molecular BC-NED + FGFR1 ×13 | Miriam González'
    : 'Molecular Profile BC-NED + FGFR1 ×13 | Miriam González',
  ogDescription: () => locale.value === 'es'
    ? 'Análisis científico del caso: BC-NED, FGFR1 ×13, CCND1 ×20. Metástasis óseas, ECOG 0, sin crisis visceral. Rebiopsia molecular avanzada como siguiente paso.'
    : 'Scientific case analysis: BC-NED, FGFR1 ×13, CCND1 ×20. Bone metastases, ECOG 0, no visceral crisis. Advanced molecular rebiopsy as the next step.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

const { data: articles } = await useAsyncData(
  `ciencia-index-${locale.value}`,
  async () => {
    if (locale.value === 'en') {
      const enArticles = await queryCollection('science_articles')
        .order('date', 'DESC')
        .all()
      if (enArticles.length) return enArticles
    }
    return queryCollection('ciencia_articles').order('date', 'DESC').all()
  },
  { watch: [locale] },
)

const treatments = computed(() =>
  locale.value === 'es'
    ? [
        { line: '1L', regimen: 'Letrozol + Ribociclib + Zoladex (goserelina) + ác. zoledrónico', outcome: 'Ribociclib suspendido tras el 1er ciclo por toxicidad. Zoladex se mantiene.', active: false },
        { line: '2L', regimen: 'Fulvestrant + Abemaciclib + Zoladex (goserelina) + ác. zoledrónico', outcome: 'Al confirmarse progresión, se sustituye letrozol por fulvestrant y ribociclib por abemaciclib. Zoladex y ácido zoledrónico se mantienen.', active: false },
        { line: '→', regimen: 'Progresión ósea + suspensión de abemaciclib (marzo 2026)', outcome: 'PET-TAC confirma nuevos focos óseos en pelvis y fémur derecho. El abemaciclib se suspende por progresión ósea y toxicidad hepática (DILI G2-3). Zoladex y ácido zoledrónico continúan. ECOG 0. Sin crisis visceral.', active: true },
      ]
    : [
        { line: '1L', regimen: 'Letrozole + Ribociclib + Zoladex (goserelin) + zoledronic acid', outcome: 'Ribociclib discontinued after the 1st cycle due to toxicity. Zoladex continued.', active: false },
        { line: '2L', regimen: 'Fulvestrant + Abemaciclib + Zoladex (goserelin) + zoledronic acid', outcome: 'On confirmed progression, letrozole is replaced by fulvestrant and ribociclib by abemaciclib. Zoladex and zoledronic acid are maintained.', active: false },
        { line: '→', regimen: 'Bone progression + abemaciclib discontinuation (March 2026)', outcome: 'PET-CT confirms new bone foci in pelvis and right femur. Abemaciclib is discontinued due to bone progression and hepatic toxicity (DILI G2-3). Zoladex and zoledronic acid continue. ECOG 0. No visceral crisis.', active: true },
      ]
)

const papers = computed(() =>
  locale.value === 'es'
    ? [
        { ref: 'Frontiers in Medicine, 2025', finding: 'Carcinoma de mama neuroendocrino (NEBC): El perfil FGFR1 es el driver principal', relevance: 'Esta serie de casos es la publicación más reciente sobre el perfil genómico del NEBC. Confirma que las alteraciones en las vías FGFR1/2 y PI3K/AKT/mTOR son canónicas en este subtipo extremadamente inusual, validando la estrategia clínica de atacar la amplificación de FGFR1 en el caso de Míriam.', link: 'https://doi.org/10.3389/fmed.2025.1551309' },
        { ref: 'Ignite Proteomics y Dana-Farber Cancer Institute (2025-2026)', finding: 'Proteómica funcional: Analizar proteínas, no solo ADN', relevance: 'Estudios recientes demuestran que el perfil de proteínas (RPPA) predice respuestas terapéuticas de forma más precisa que la genómica estándar. Resulta vital en tumores complejos para identificar qué proteínas activas impulsan la resistencia a los tratamientos, más allá de las mutaciones en el ADN.', link: null },
        { ref: 'Ozaki et al., 2022 — Cancers (DOI: 10.3390/cancers14010196)', finding: 'Neoplasias neuroendocrinas de mama: clasificación WHO y pronóstico', relevance: 'Revisión comprensiva que sintetiza la clasificación WHO 2019 y aporta datos de supervivencia en el espectro neuroendocrino del cáncer de mama. Contextualiza la rareza y el peor pronóstico asociado a este componente en el caso de Míriam.', link: 'https://doi.org/10.3390/cancers14010196' },
        { ref: 'Formisano et al., 2019 — Nat. Commun. (DOI: 10.1038/s41467-019-09068-2)', finding: 'Amplificación FGFR1: mecanismo central de resistencia a inhibidores CDK4/6', relevance: 'Estudio mecanístico que identificó FGFR1 como driver central de resistencia a ribociclib y fulvestrant en tumores ER+ metastásicos. Explica directamente la progresión clínica temprana observada en la primera línea de tratamiento.', link: 'https://doi.org/10.1038/s41467-019-09068-2' },
      ]
    : [
        { ref: 'Frontiers in Medicine, 2025', finding: 'Neuroendocrine breast carcinoma (NEBC): The FGFR1 profile is the main driver', relevance: 'This case series is the most recent publication on the genomic profile of NEBC. It confirms that alterations in the FGFR1/2 and PI3K/AKT/mTOR pathways are canonical in this extremely rare subtype, validating the clinical strategy of targeting Miriam\'s FGFR1 amplification.', link: 'https://doi.org/10.3389/fmed.2025.1551309' },
        { ref: 'Ignite Proteomics y Dana-Farber Cancer Institute (2025-2026)', finding: 'Functional proteomics: Analyzing proteins, not just DNA', relevance: 'Recent studies show that protein profiling (RPPA) predicts therapeutic responses more accurately than standard genomics. It is vital in complex tumors to identify which active proteins are driving treatment resistance, going beyond DNA mutations alone.', link: null },
        { ref: 'Ozaki et al., 2022 — Cancers (DOI: 10.3390/cancers14010196)', finding: 'Neuroendocrine neoplasms of the breast: WHO classification and prognosis', relevance: 'Comprehensive review synthesising the WHO 2019 classification and providing survival data across the neuroendocrine spectrum of breast cancer. It contextualizes the rarity and poorer prognosis associated with this component in Miriam\'s case.', link: 'https://doi.org/10.3390/cancers14010196' },
        { ref: 'Formisano et al., 2019 — Nat. Commun. (DOI: 10.1038/s41467-019-09068-2)', finding: 'FGFR1 amplification: central resistance mechanism to CDK4/6 inhibitors', relevance: 'Mechanistic study identifying FGFR1 amplification as a central driver of resistance to therapies like ribociclib and fulvestrant in metastatic ER+ tumors. It directly explains the early clinical progression observed in the first line of treatment.', link: 'https://doi.org/10.1038/s41467-019-09068-2' },
      ]
)

const panelRows = computed(() =>
  locale.value === 'es'
    ? [
        { component: 'NGS amplio (tejido)', method: 'Panel ≥500 genes', targets: 'ESR1, PIK3CA, AKT1, PTEN, RB1, TP53, FGFR1-4, CCND1, NF1', implication: 'Selección de terapia/ensayo por biomarcador' },
        { component: 'ctDNA (líquida)', method: 'Ensayo validado plasma', targets: 'ESR1 (pref.), PIK3CA, TP53, RB1, FGFR pathway', implication: 'Heterogeneidad clonal; ESR1 superior en plasma' },
        { component: 'IHQ extendida', method: 'IHQ en tejido', targets: 'ER, PR, HER2 (ultralow), FGFR1 prot., SSTR2, CgA, SYN', implication: 'HER2-low→T-DXd; FGFR1→FGFR trial; SSTR2→PRRT' },
        { component: 'IHQ funcional', method: 'Fosfo-IHQ', targets: 'p-AKT (Thr308/Ser473), p-ERK1/2', implication: 'Activación real de vías PI3K/MAPK' },
        { component: 'RPPA (si viable)', method: 'Proteómica funcional', targets: 'p-4EBP1, p-S6RP, p-p70S6K', implication: 'Clustering jerárquico PI3K/MAPK' },
        { component: 'DOTATATE PET/CT', method: 'Si SSTR2+ en IHQ', targets: 'Krenning score', implication: 'Elegibilidad PRRT (Krenning ≥3)' },
      ]
    : [
        { component: 'Broad NGS (tissue)', method: 'Panel ≥500 genes', targets: 'ESR1, PIK3CA, AKT1, PTEN, RB1, TP53, FGFR1-4, CCND1, NF1', implication: 'Biomarker-matched therapy/trial selection' },
        { component: 'ctDNA (liquid)', method: 'Validated plasma assay', targets: 'ESR1 (preferred), PIK3CA, TP53, RB1, FGFR pathway', implication: 'Clonal heterogeneity; ESR1 superior in plasma' },
        { component: 'Extended IHC', method: 'Tissue IHC', targets: 'ER, PR, HER2 (ultralow), FGFR1 prot., SSTR2, CgA, SYN', implication: 'HER2-low→T-DXd; FGFR1→FGFR trial; SSTR2→PRRT' },
        { component: 'Functional IHC', method: 'Phospho-IHC', targets: 'p-AKT (Thr308/Ser473), p-ERK1/2', implication: 'Real PI3K/MAPK pathway activation' },
        { component: 'RPPA (if feasible)', method: 'Functional proteomics', targets: 'p-4EBP1, p-S6RP, p-p70S6K', implication: 'Hierarchical PI3K/MAPK clustering' },
        { component: 'DOTATATE PET/CT', method: 'If SSTR2+ on IHC', targets: 'Krenning score', implication: 'PRRT eligibility (Krenning ≥3)' },
      ]
)


</script>
