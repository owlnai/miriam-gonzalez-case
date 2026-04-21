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
        <div class="card-base bg-ink-950 text-white border-0">
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
              ? 'Un ensayo donde Miriam es la única unidad de análisis, con decisiones terapéuticas guiadas por su perfil molecular específico y no por "HR+ genérico". La ruta: rebiopsia con panel avanzado → MTB en VHIO → puente hacia WIN Consortium para ensayo N-of-1 molecularmente dirigido con IA.'
              : 'A trial where Miriam is the sole unit of analysis, with therapeutic decisions guided by her specific molecular profile rather than "generic HR+". The path: re-biopsy with advanced panel → MTB at VHIO → bridge to WIN Consortium for a molecularly-directed N-of-1 trial with AI.'
            }}
          </p>
          <p class="text-sm text-gold-400 font-medium">
            {{ locale === 'es'
              ? 'Esto sentaría un precedente: la oncología de precisión adaptada a cada paciente, sin burocracia con el tumor principal.'
              : 'This would set a precedent: precision oncology adapted to each patient, without bureaucracy around the primary tumor.'
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const treatments = computed(() =>
  locale.value === 'es'
    ? [
        { line: '1L', regimen: 'Letrozol + Ribociclib + supresión ovárica + ác. zoledrónico', outcome: 'Suspensión precoz de ribociclib por toxicidad grave', active: false },
        { line: '2L', regimen: 'Fulvestrant + Abemaciclib + supresión ovárica + ác. zoledrónico', outcome: 'Suspendido marzo 2026 por hepatotoxicidad (DILI G2-3) y progresión ósea', active: false },
        { line: '→', regimen: 'Progresión ósea post-CDK4/6i', outcome: 'Preocupación estructural en fémur derecho y pelvis. ECOG 0. Sin crisis visceral.', active: true },
      ]
    : [
        { line: '1L', regimen: 'Letrozole + Ribociclib + ovarian suppression + zoledronic acid', outcome: 'Early ribociclib discontinuation due to severe toxicity', active: false },
        { line: '2L', regimen: 'Fulvestrant + Abemaciclib + ovarian suppression + zoledronic acid', outcome: 'Discontinued March 2026 due to hepatotoxicity (DILI G2-3) and bone progression', active: false },
        { line: '→', regimen: 'Bone progression post-CDK4/6i', outcome: 'Structural concern in right femur and pelvis. ECOG 0. No visceral crisis.', active: true },
      ]
)

const papers = computed(() =>
  locale.value === 'es'
    ? [
        { ref: 'Drago 2019', finding: 'Tumores con FGFR1 amplificado: resistentes a CDK4/6i pero sensibles a everolimus', relevance: 'Caso documentado con 71% de reducción tumoral. Everolimus no sería un bonus aleatorio sino posiblemente lo óptimo para este perfil.', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6825550/' },
        { ref: 'NCT04483505', finding: 'Triple bloqueo + inhibidor FGFR en HR+/FGFR alterado (ensayo español)', relevance: 'Funcionó en pacientes sin PIK3CA/ESR1 (9.1 vs 1.9 meses). Lo predictivo fue la proteína FGFR1 alta por IHQ, no la amplificación génica → argumento clave para la rebiopsia.', link: 'https://www.nature.com/articles/s41698-025-01106-1' },
        { ref: 'NCT04529044', finding: 'Ensayo de PRRT con péptidos receptores en cáncer de mama', relevance: 'Relevante si el perfil molecular lo confirma. Hay contacto directo con especialistas que participan en este ensayo.', link: 'https://clinicaltrials.gov/study/NCT04529044' },
      ]
    : [
        { ref: 'Drago 2019', finding: 'FGFR1-amplified tumors: resistant to CDK4/6i but sensitive to everolimus', relevance: 'Documented case with 71% tumor reduction. Everolimus would not be a random bonus but possibly the optimal choice for this profile.', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6825550/' },
        { ref: 'NCT04483505', finding: 'Triple blockade + FGFR inhibitor in HR+/FGFR-altered (Spanish trial)', relevance: 'Worked in patients without PIK3CA/ESR1 (9.1 vs 1.9 months). The predictive factor was high FGFR1 protein by IHC, not gene amplification → key argument for re-biopsy.', link: 'https://www.nature.com/articles/s41698-025-01106-1' },
        { ref: 'NCT04529044', finding: 'PRRT trial with receptor peptides in breast cancer', relevance: 'Relevant if the molecular profile confirms it. There is direct contact with specialists participating in this trial.', link: 'https://clinicaltrials.gov/study/NCT04529044' },
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
