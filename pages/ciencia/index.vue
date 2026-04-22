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
        { ref: 'Tarantino et al., 2020 — JCO', finding: 'HER2-low: definición y relevancia clínica en cáncer de mama', relevance: 'Publicación seminal que formalizó la categoría HER2-low y estableció que más del 55% de los tumores HER2-negativos son HER2-low.', link: 'https://doi.org/10.1200/JCO.19.02488' },
        { ref: 'Tarantino et al., 2023 — Ann. Oncol.', finding: 'Consenso ESMO: definición formal de HER2-ultralow (<10%)', relevance: 'Consenso internacional que define HER2-ultralow como tinción de membrana en >0% a ≤10% de las células tumorales.', link: 'https://doi.org/10.1016/j.annonc.2023.05.008' },
        { ref: 'Bardia et al., 2024 — NEJM', finding: 'T-DXd en HER2-ultralow: primera evidencia clínica de beneficio (DESTINY-Breast06)', relevance: 'Primer estudio con datos en la cohorte HER2-ultralow (n=153). PFS mediana de 13,2 vs 8,3 meses con T-DXd frente a quimioterapia.', link: 'https://doi.org/10.1056/NEJMoa2407086' },
        { ref: 'Ozaki et al., 2022 — Cancers', finding: 'Neoplasias neuroendocrinas de mama: clasificación WHO y pronóstico', relevance: 'Revisión comprensiva que sintetiza la clasificación WHO 2019 y aporta datos de supervivencia en el espectro neuroendocrino del cáncer de mama.', link: 'https://doi.org/10.3390/cancers14010196' },
        { ref: 'Formisano et al., 2019 — Nat. Commun.', finding: 'Amplificación FGFR1: mecanismo central de resistencia a CDK4/6 inhibidores en ER+', relevance: 'Estudio mecanístico que identificó FGFR1 como driver de resistencia a ribociclib+fulvestrant en tumores ER+ metastásicos.', link: 'https://doi.org/10.1038/s41467-019-09068-2' },
        { ref: 'Mao et al., 2020 — Clin. Cancer Res.', finding: 'Co-amplificación adquirida FGF3/4/19 + CCND1 (cluster 11q13) y resistencia combinada', relevance: 'Mediante análisis pre/post-resistencia en 60 pacientes, identificó alteraciones FGFR/FGF en el 37% de los casos tras resistencia a CDK4/6i.', link: 'https://doi.org/10.1158/1078-0432.CCR-19-3958' },
        { ref: 'André et al., 2022 — Nature (SAFIR02)', finding: 'Oncología de precisión guiada por genómica mejora la supervivencia en cáncer de mama metastásico', relevance: 'Ensayo randomizado en 1.462 pacientes HER2-negativos. Demostró por primera vez que la terapia guiada por genómica mejora la supervivencia libre de progresión en pacientes con alteraciones accionables.', link: 'https://doi.org/10.1038/s41586-022-05068-3' },
      ]
    : [
        { ref: 'Tarantino et al., 2020 — JCO', finding: 'HER2-low: definition and clinical relevance in breast cancer', relevance: 'Seminal publication that formalised the HER2-low category and established that more than 55% of HER2-negative tumours are HER2-low.', link: 'https://doi.org/10.1200/JCO.19.02488' },
        { ref: 'Tarantino et al., 2023 — Ann. Oncol.', finding: 'ESMO consensus: formal definition of HER2-ultralow (<10%)', relevance: 'International consensus defining HER2-ultralow as membrane staining in >0% to ≤10% of tumour cells.', link: 'https://doi.org/10.1016/j.annonc.2023.05.008' },
        { ref: 'Bardia et al., 2024 — NEJM', finding: 'T-DXd in HER2-ultralow: first clinical evidence of benefit (DESTINY-Breast06)', relevance: 'First study with data in the HER2-ultralow cohort (n=153). Median PFS of 13.2 vs 8.3 months with T-DXd versus chemotherapy.', link: 'https://doi.org/10.1056/NEJMoa2407086' },
        { ref: 'Ozaki et al., 2022 — Cancers', finding: 'Neuroendocrine neoplasms of the breast: WHO classification and prognosis', relevance: 'Comprehensive review synthesising the WHO 2019 classification with survival data across the neuroendocrine spectrum of breast cancer.', link: 'https://doi.org/10.3390/cancers14010196' },
        { ref: 'Formisano et al., 2019 — Nat. Commun.', finding: 'FGFR1 amplification: central mechanism of resistance to CDK4/6 inhibitors in ER+', relevance: 'Mechanistic study identifying FGFR1 as a resistance driver to ribociclib+fulvestrant in metastatic ER+ tumours.', link: 'https://doi.org/10.1038/s41467-019-09068-2' },
        { ref: 'Mao et al., 2020 — Clin. Cancer Res.', finding: 'Acquired co-amplification FGF3/4/19 + CCND1 (11q13 cluster) and combined resistance', relevance: 'Using pre/post-resistance analysis in 60 patients, identified FGFR/FGF alterations in 37% of cases following CDK4/6i resistance.', link: 'https://doi.org/10.1158/1078-0432.CCR-19-3958' },
        { ref: 'André et al., 2022 — Nature (SAFIR02)', finding: 'Genomics-guided precision oncology improves survival in metastatic breast cancer', relevance: 'Randomised trial in 1,462 HER2-negative patients. First demonstration that genomics-guided therapy improves progression-free survival in patients with actionable alterations.', link: 'https://doi.org/10.1038/s41586-022-05068-3' },
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
