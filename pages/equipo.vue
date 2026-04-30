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
              ? 'Este equipo no se planificó. Se formó de manera orgánica cuando profesionales de distintos campos (tecnología, medicina, IA, investigación) vieron un caso que les interpeló y decidieron aportar lo que sabían. No hay jerarquía formal. Hay un objetivo compartido: que la biología de este tumor guíe el tratamiento.'
              : 'This team wasn\'t planned. It formed organically when professionals from different fields (technology, medicine, AI, research) saw a case that challenged them and decided to contribute what they knew. There is no formal hierarchy. There is a shared goal: let this tumor\'s biology guide treatment.'
            }}
          </p>
        </div>

        <h3 class="font-display font-semibold text-ink-800 text-sm uppercase tracking-wider mb-6">
          {{ locale === 'es' ? 'El equipo de Miriam' : 'Miriam\'s team' }}
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
          {{ locale === 'es' ? 'Apoyo integral' : 'Integrative Support' }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-4 stagger-children">
          <TeamCard
            v-for="member in integrativeSupport"
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

useSeoMeta({
  title: () => locale.value === 'es'
    ? 'El equipo — Miriam González'
    : 'The Team — Miriam González',
  description: () => locale.value === 'es'
    ? 'El equipo internacional que trabaja en el caso de Miriam: oncólogos, especialistas en FGFR1, investigadores de IA médica y colaboradores de 4 países.'
    : 'The international team working on Miriam\'s case: oncologists, FGFR1 specialists, medical AI researchers, and collaborators from 4 countries.',
  ogTitle: () => locale.value === 'es'
    ? 'El equipo — Miriam González'
    : 'The Team — Miriam González',
  ogType: 'website',
  twitterCard: 'summary',
})

const coreTeam = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'La paciente', description: 'Ingeniera de software y divulgadora tecnológica. Investiga activamente su caso combinando oncología de precisión e inteligencia artificial. Coordina toda la iniciativa.', icon: 'ph:user-circle-fill', color: 'gold' as const },
        { role: 'Expertos en IA y documentación clínica', description: 'Expertos en inteligencia artificial. Generan y estructuran la documentación clínica del caso con modelos de lenguaje avanzados, conectando la parte técnica con la médica.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Experta en bioinformática y decisiones clínicas', description: 'Bioingeniera con amplia experiencia en oncología. Ayuda a interpretar los datos moleculares y a definir los próximos pasos del plan diagnóstico y terapéutico.', icon: 'ph:strategy-fill', color: 'gold' as const },
        { role: 'Web y comunicación', description: 'Se encarga de la web, mantiene la información actualizada y cuida que todo sea comprensible para cualquier visitante.', icon: 'ph:code-fill', color: 'ocean' as const },
        { role: 'Estrategia y navegación sanitaria', description: 'Experiencia directa navegando el sistema sanitario español para acceder a tratamientos complejos. Aporta asesoramiento estratégico y conocimiento del contexto regulatorio.', icon: 'ph:compass-fill', color: 'ink' as const },
        { role: 'Parte humana del caso', description: 'Se encarga de contar la historia de Míriam desde dentro: quién es más allá del diagnóstico, cómo vive, qué la mueve y por qué este caso importa más allá de la oncología.', icon: 'ph:pen-nib-fill', color: 'gold' as const },
      ]
    : [
        { role: 'The patient', description: 'Software engineer and tech communicator. Actively researches her own case combining precision oncology and artificial intelligence. Coordinates the entire initiative.', icon: 'ph:user-circle-fill', color: 'gold' as const },
        { role: 'AI & Clinical Documentation Experts', description: 'Artificial intelligence experts. Generate and structure the clinical documentation using advanced language models, bridging the technical and medical domains.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Bioinformatics & Clinical Decision Expert', description: 'Bioengineer with extensive oncology experience. Helps interpret molecular data and define the next steps in the diagnostic and therapeutic plan.', icon: 'ph:strategy-fill', color: 'gold' as const },
        { role: 'Web & Communication', description: 'Manages the website, keeps information up to date, and ensures everything is understandable for any visitor.', icon: 'ph:code-fill', color: 'ocean' as const },
        { role: 'Strategy & Healthcare Navigation', description: 'Direct experience navigating the Spanish healthcare system to access complex treatments. Provides strategic advice and knowledge of the regulatory context.', icon: 'ph:compass-fill', color: 'ink' as const },
        { role: 'The human side of the story', description: 'Responsible for telling Miriam\'s story from the inside: who she is beyond the diagnosis, what drives her, and why this case matters beyond oncology.', icon: 'ph:pen-nib-fill', color: 'gold' as const },
      ]
)

const medicalNetwork = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'Oncóloga de precisión (EE.UU.)', description: 'Reconocida mundialmente como una de las 25 voces más influyentes en medicina de precisión. Directora asociada de investigación clínica en oncología de precisión, con más de 950 publicaciones científicas y responsable de llevar 8 fármacos a la aprobación de la FDA. Interesada en el caso de Miriam para su discusión en redes internacionales de oncología de precisión.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Oncólogo molecular (Europa)', description: 'Especialista en oncología molecular con reconocimiento internacional. Apoya la estrategia de análisis molecular, coordina con laboratorios de referencia y valida el enfoque clínico del caso.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Especialista en oncología radioterápica (España)', description: 'Lleva el caso a comité tumoral multidisciplinar. Conexión directa con ensayos de terapia avanzada relevantes para este perfil.', icon: 'ph:atom-fill', color: 'ocean' as const },
        { role: 'Oncóloga tratante (España)', description: 'Oncóloga que sigue el caso desde el diagnóstico. Abierta a nuevos enfoques y en constante actualización con los últimos avances en oncología de precisión.', icon: 'ph:stethoscope-fill', color: 'ink' as const },
      ]
    : [
        { role: 'Precision Oncologist (USA)', description: 'Globally recognized as one of the 25 most influential voices in precision medicine. Associate Director of Clinical Research in precision oncology, with over 950 scientific publications and responsible for bringing 8 drugs to FDA approval. Interested in Miriam\'s case for discussion in international precision oncology networks.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Molecular Oncologist (Europe)', description: 'Internationally recognized specialist in molecular oncology. Supports the molecular analysis strategy, coordinates with reference laboratories, and validates the clinical approach.', icon: 'ph:stethoscope-fill', color: 'gold' as const },
        { role: 'Radiation Oncology Specialist (Spain)', description: 'Brings the case to the multidisciplinary tumor committee. Direct connection to advanced therapy trials relevant to this profile.', icon: 'ph:atom-fill', color: 'ocean' as const },
        { role: 'Treating Oncologist (Spain)', description: 'Treating oncologist who has followed the case since diagnosis. Open to new approaches and continuously updating her knowledge on the latest precision oncology advances.', icon: 'ph:stethoscope-fill', color: 'ink' as const },
      ]
)

const integrativeSupport = computed(() =>
  locale.value === 'es'
    ? [
        { role: 'Oncología metabólica (España)', description: 'Especialista en el abordaje metabólico del cáncer. Diseña el protocolo de suplementación y soporte metabólico de Míriam.', icon: 'ph:flask-fill', color: 'ocean' as const },
        { role: 'Doctor en Ciencias del Deporte y oncología del ejercicio (España)', description: 'Investigador principal en la Fundación OncSport — Never Surrender. Diseña y supervisa el programa de entrenamiento individualizado de Miriam, adaptado a su situación de metástasis ósea. El objetivo es mantenerla en ECOG 0 — es decir, con plena capacidad funcional — lo que es determinante para acceder a ensayos clínicos y tolerar los tratamientos que vienen.', icon: 'ph:barbell-fill', color: 'ocean' as const },
        { role: 'Nutricionista oncológica', description: 'Especializada en nutrición para pacientes oncológicos. Lleva el seguimiento nutricional de Míriam a lo largo del tratamiento.', icon: 'ph:plant-fill', color: 'gold' as const },
        { role: 'Psicología oncológica (Asociación AACC)', description: 'Psicóloga especializada en acompañamiento emocional a personas con cáncer. Colabora desde la Asociación AACC.', icon: 'ph:heart-fill', color: 'gold' as const },
        { role: 'Psicología y altas capacidades', description: 'Psicóloga con especialización en altas capacidades. Acompaña a Míriam integrando la dimensión cognitiva con el proceso oncológico.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Fisioterapia y acupuntura (medicina tradicional china)', description: 'Fisioterapeuta con formación en medicina tradicional china. Complementa el programa de ejercicio y movilidad de Míriam.', icon: 'ph:hand-palm-fill', color: 'ink' as const },
      ]
    : [
        { role: 'Metabolic Oncology (Spain)', description: 'Specialist in the metabolic approach to cancer. Designs Miriam\'s supplementation and metabolic support protocol.', icon: 'ph:flask-fill', color: 'ocean' as const },
        { role: 'Doctor of Sport Sciences & Exercise Oncology (Spain)', description: 'Principal investigator at Fundación OncSport — Never Surrender. Designs and supervises Miriam\'s individualised training programme, adapted to her bone metastasis situation. The goal is to keep her at ECOG 0 — meaning full functional capacity — which is critical for accessing clinical trials and tolerating upcoming treatments.', icon: 'ph:barbell-fill', color: 'ocean' as const },
        { role: 'Oncology Nutritionist', description: 'Specialised in nutrition for oncology patients. Monitors Miriam\'s nutritional follow-up throughout treatment.', icon: 'ph:plant-fill', color: 'gold' as const },
        { role: 'Oncology Psychology (AACC Association)', description: 'Psychologist specialised in emotional support for people with cancer. Collaborates through the AACC Association.', icon: 'ph:heart-fill', color: 'gold' as const },
        { role: 'Psychology & High Abilities', description: 'Psychologist specialising in high abilities. Supports Míriam by integrating the cognitive and emotional dimensions of her process.', icon: 'ph:brain-fill', color: 'ocean' as const },
        { role: 'Physiotherapy & Acupuncture (Traditional Chinese Medicine)', description: 'Physiotherapist trained in traditional Chinese medicine. Complements Miriam\'s exercise and mobility programme.', icon: 'ph:hand-palm-fill', color: 'ink' as const },
      ]
)
</script>
