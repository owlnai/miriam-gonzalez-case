<template>
  <div>
    <section class="section-spacing" :aria-label="$t('team.title')">
      <div class="section-container">
        <PageHeader
          :title="$t('team.title')"
          :subtitle="$t('team.subtitle')"
        />

        <!-- How it formed -->
        <div class="card-base mb-12 border-l-4 border-l-gold-400">
          <p class="text-sm text-ink-700 leading-relaxed">
            {{ locale === 'es'
              ? 'Este equipo no se planificó. Se formó de manera orgánica cuando profesionales de distintos campos — tecnología, medicina, IA, investigación — vieron un caso que les interpeló y decidieron aportar lo que sabían. No hay jerarquía formal. Hay un objetivo compartido: que la biología de este tumor guíe el tratamiento.'
              : 'This team wasn\'t planned. It formed organically when professionals from different fields — technology, medicine, AI, research — saw a case that challenged them and decided to contribute what they knew. There is no formal hierarchy. There is a shared goal: let this tumor\'s biology guide treatment.'
            }}
          </p>
        </div>

        <h3 class="font-display font-semibold text-ink-800 text-sm uppercase tracking-wider mb-6">
          {{ locale === 'es' ? 'Equipo nuclear' : 'Core team' }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-4 mb-12 stagger-children">
          <TeamCard
            v-for="member in coreTeam"
            :key="member.role"
            :member="member"
          />
        </div>

        <h3 class="font-display font-semibold text-ink-800 text-sm uppercase tracking-wider mb-6">
          {{ locale === 'es' ? 'Red médica de apoyo' : 'Medical support network' }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-4 mb-12 stagger-children">
          <TeamCard
            v-for="member in medicalNetwork"
            :key="member.role"
            :member="member"
          />
        </div>

        <h3 class="font-display font-semibold text-ink-800 text-sm uppercase tracking-wider mb-6">
          {{ locale === 'es' ? 'Colaboradores' : 'Collaborators' }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-4 stagger-children">
          <TeamCard
            v-for="member in collaborators"
            :key="member.role"
            :member="member"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const coreTeam = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'La paciente', description: 'Ingeniera de software y divulgadora tecnológica. Investiga activamente su caso con IA (Claude, OpenEvidence, Grok, Perplexity). Coordina toda la iniciativa.', icon: 'ph:user-circle-fill', color: 'gold' as const },
        { role: 'Ingeniero de IA & Datos', description: 'Gestiona la documentación clínica con modelos de lenguaje, itera informes y conecta la parte técnica con la médica.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Estratega de Oncología de Precisión', description: 'Investigadora en tecnología sanitaria. Redacta pitches médicos, coordina con centros internacionales y gestiona la estrategia de segundas opiniones.', icon: 'ph:strategy-fill', color: 'gold' as const },
        { role: 'Desarrolladora Web & Accesibilidad', description: 'Especialista en accesibilidad. Construye esta web para que toda la información sea accesible al equipo médico y a la comunidad.', icon: 'ph:code-fill', color: 'ocean' as const },
      ]
    : [
        { role: 'The patient', description: 'Software engineer and tech communicator. Actively researches her case with AI (Claude, OpenEvidence, Grok, Perplexity). Coordinates the entire initiative.', icon: 'ph:user-circle-fill', color: 'gold' as const },
        { role: 'AI & Data Engineer', description: 'Manages clinical documentation with language models, iterates reports, and bridges the technical and medical sides.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Precision Oncology Strategist', description: 'Health technology researcher. Drafts medical pitches, coordinates with international centers, and manages the second opinion strategy.', icon: 'ph:strategy-fill', color: 'gold' as const },
        { role: 'Web Developer & Accessibility', description: 'Accessibility specialist. Builds this website so all information is accessible to the medical team and the community.', icon: 'ph:code-fill', color: 'ocean' as const },
      ]
)

const medicalNetwork = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'Oncólogo molecular (Suiza)', description: 'Especialista en oncología molecular y GI. Apoya la rebiopsia, coordina con Foundation Medicine, y valida públicamente el enfoque.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Oncólogo clínico (Latinoamérica)', description: 'Experto en cáncer de mama y oncología de precisión. Publica evidencia validando el enfoque BC-NED/FGFR1.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Jefe de Onco-Radioterapia (Murcia)', description: 'Lleva el caso a comité tumoral junto con nuclear. Conexión directa con el ensayo de PRRT en mama. Miembro de WIN.', icon: 'ph:atom-fill', color: 'ocean' as const },
        { role: 'Oncóloga tratante (Murcia)', description: 'Oncóloga que lleva el caso desde el diagnóstico. Joven, abierta a nuevos enfoques, poniéndose al día con los avances.', icon: 'ph:stethoscope-fill', color: 'ink' as const },
      ]
    : [
        { role: 'Molecular Oncologist (Switzerland)', description: 'Specialist in molecular oncology and GI. Supports re-biopsy, coordinates with Foundation Medicine, and publicly validates the approach.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Clinical Oncologist (Latin America)', description: 'Breast cancer and precision oncology expert. Publishes evidence validating the BC-NED/FGFR1 approach.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Head of Radiation Oncology (Murcia)', description: 'Takes the case to tumor board with nuclear medicine. Direct connection to the PRRT breast cancer trial. WIN member.', icon: 'ph:atom-fill', color: 'ocean' as const },
        { role: 'Treating Oncologist (Murcia)', description: 'Oncologist managing the case since diagnosis. Young, open to new approaches, catching up with the latest developments.', icon: 'ph:stethoscope-fill', color: 'ink' as const },
      ]
)

const collaborators = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'Investigadora en IA biomédica (Barcelona)', description: 'Experiencia personal en investigación oncológica. Aporta contactos en VHIO y hallazgos bibliográficos clave para el caso.', icon: 'ph:magnifying-glass-fill', color: 'ocean' as const },
        { role: 'Emprendedor tech & paciente oncológico', description: 'Conecta con asociaciones de pacientes, redes de investigación y fuentes de financiación. Aporta perspectiva de paciente.', icon: 'ph:handshake-fill', color: 'gold' as const },
        { role: 'Bioinformática (Medicina Computacional)', description: 'Trabaja en plataforma de medicina computacional. Apoyo potencial en análisis de datos genómicos.', icon: 'ph:dna-fill', color: 'ocean' as const },
      ]
    : [
        { role: 'Biomedical AI Researcher (Barcelona)', description: 'Personal experience in oncology research. Provides VHIO contacts and key literature findings for the case.', icon: 'ph:magnifying-glass-fill', color: 'ocean' as const },
        { role: 'Tech Entrepreneur & Cancer Patient', description: 'Connects with patient associations, research networks, and funding sources. Brings patient perspective.', icon: 'ph:handshake-fill', color: 'gold' as const },
        { role: 'Bioinformatician (Computational Medicine)', description: 'Works on a computational medicine platform. Potential support for genomic data analysis.', icon: 'ph:dna-fill', color: 'ocean' as const },
      ]
)
</script>
