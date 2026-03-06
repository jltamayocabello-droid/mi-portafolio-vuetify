<template>
  <!-- ===========================
       HERO SECTION
  ============================ -->
  <section class="hero-section">
    <v-container
      class="d-flex flex-column align-center justify-center fill-height text-center py-16"
    >
      <div class="hero-avatar-wrapper mb-6">
        <v-avatar class="hero-avatar elevation-8" size="120">
          <v-icon color="primary" icon="mdi-code-braces" size="60" />
        </v-avatar>
      </div>

      <v-chip
        class="mb-4 text-caption font-weight-bold"
        color="primary"
        size="small"
        variant="tonal"
      >
        <v-icon icon="mdi-map-marker" start />
        Santiago, Chile · Disponible para proyectos
      </v-chip>

      <h1 class="text-h3 text-sm-h2 font-weight-black mb-4 hero-title">
        Jorge <span class="text-primary">Tamayo</span>
      </h1>
      <p class="text-h5 text-sm-h4 font-weight-black mb-4 hero-title">
        Desarrollador Front-End
      </p>
      <p class="text-h5 text-sm-h4 font-weight-black mb-4 hero-title">
        Historiador e Investigador independiente | Asistente de biblioteca
      </p>
      <v-divider class="my-4" color="primary" thickness="2" width="50%" />

      <div class="d-flex flex-wrap gap-3 justify-center mt-4 mb-10">
        <v-btn
          class="me-4"
          color="primary"
          href="#proyectos"
          prepend-icon="mdi-rocket-launch"
          rounded="lg"
          size="large"
          variant="flat"
        >
          Ver Proyectos
        </v-btn>
        <v-btn
          class="me-4"
          href="https://github.com/jltamayocabello-droid"
          prepend-icon="mdi-github"
          rounded="lg"
          size="large"
          target="_blank"
          variant="outlined"
        >
          GitHub
        </v-btn>
        <v-btn
          class="me-4"
          color="primary"
          href="https://www.linkedin.com/in/jorge-tamayo-c/"
          prepend-icon="mdi-linkedin"
          rounded="lg"
          size="large"
          target="_blank"
          variant="outlined"
        >
          LinkedIn
        </v-btn>
      </div>

      <!-- Divider animado -->
      <div class="hero-scroll-indicator">
        <v-icon
          class="scroll-bounce"
          color="primary"
          icon="mdi-chevron-double-down"
        />
      </div>
    </v-container>
  </section>

  <!-- ===========================
       ABOUT ME & SKILLS SECTION
  ============================ -->
  <section class="about-section py-16">
    <v-container>
      <div class="section-header text-center mb-12">
        <v-chip class="mb-4" color="secondary" size="small" variant="tonal">
          <v-icon icon="mdi-account" start />
          Sobre mí
        </v-chip>
        <h2 class="text-h4 font-weight-bold">¿Quién soy?</h2>
      </div>

      <v-row align="center" justify="center">
        <v-col class="mb-6 mb-md-0" cols="12" md="6">
          <v-card
            class="pa-6 about-card"
            color="surface"
            elevation="4"
            rounded="xl"
          >
            <p class="text-body-1 text-medium-emphasis mb-4">
              Desarrollador Front-End especializado en el ecosistema
              <strong class="text-primary">Vue.js</strong> con un perfil
              altamente versátil. Mi sólida trayectoria en investigación y
              gestión documental me permite abordar problemas técnicos con rigor
              analítico, creando arquitecturas limpias y estructuradas.
            </p>
            <p class="text-body-1 text-medium-emphasis">
              Acostumbrado a la excelencia en el servicio al usuario, enfoco mis
              desarrollos en la empatía y la usabilidad. Soy un profesional en
              constante formación, comprometido con la
              <strong class="text-secondary">sobriedad digital</strong> y la
              creación de experiencias digitales elegantes y performantes que
              resuelvan necesidades reales con máxima eficiencia.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <div class="section-header mb-6">
            <h3 class="text-h6 font-weight-bold mb-4">
              <v-icon class="mr-2" color="primary" icon="mdi-tools" />
              Stack Técnico
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="skill in skills"
                :key="skill.name"
                class="font-weight-medium"
                :color="skill.color"
                size="default"
                variant="tonal"
              >
                <v-icon v-if="skill.icon" :icon="skill.icon" start />
                {{ skill.name }}
              </v-chip>
            </div>
          </div>

          <div>
            <h3 class="text-h6 font-weight-bold mb-4">
              <v-icon class="mr-2" color="secondary" icon="mdi-star" />
              Lo que me diferencia
            </h3>
            <v-list bg-color="transparent" density="compact">
              <v-list-item
                v-for="point in differentiators"
                :key="point"
                base-color="primary"
                class="px-0 align-start"
                prepend-icon="mdi-check-circle"
              >
                <v-list-item-title class="text-wrap">
                  {{ point }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- ===========================
       PROJECTS SECTION
  ============================ -->
  <section id="proyectos" class="projects-section py-16">
    <v-container>
      <div class="section-header text-center mb-12">
        <v-chip class="mb-4" color="primary" size="small" variant="tonal">
          <v-icon icon="mdi-briefcase" start />
          Portafolio
        </v-chip>
        <h2 class="text-h4 font-weight-bold">Proyectos Destacados</h2>
        <p class="text-body-1 text-medium-emphasis mt-2">
          Casos reales con arquitectura sólida, decisiones técnicas justificadas
          y foco en la experiencia del usuario.
        </p>
      </div>

      <v-row justify="center">
        <v-col
          v-for="project in projects"
          :key="project.title"
          cols="12"
          lg="4"
          md="6"
        >
          <ProjectCard v-bind="project" />
        </v-col>
      </v-row>

      <!-- Coming soon -->
      <v-row class="mt-8" justify="center">
        <v-col cols="12" lg="6" md="8">
          <v-card
            class="pa-8 text-center coming-soon-card"
            color="surface"
            elevation="2"
            rounded="xl"
          >
            <v-icon class="mb-4" color="primary" icon="mdi-rocket" size="48" />
            <h3 class="text-h6 font-weight-bold mb-2">✨ Próximamente</h3>
            <p class="text-body-2 text-medium-emphasis">
              Nuevos proyectos explorando el mundo del Backend y la integración
              con IA.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- ===========================
       EDUCATION & EXPERIENCE
  ============================ -->
    <section id="formacion" class="education-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <v-chip class="mb-4" color="secondary" size="small" variant="tonal">
            <v-icon icon="mdi-school" start />
            Trayectoria
          </v-chip>
          <h2 class="text-h4 font-weight-bold">Formación & Experiencia</h2>
          <p class="text-body-1 text-medium-emphasis mt-2">
            Un perfil interdisciplinario con sólida base en humanidades, gestión
            del conocimiento y tecnología.
          </p>
        </div>

        <!-- FORMACIÓN TECH -->
        <div class="text-center mb-10">
          <v-chip class="mb-6" color="primary" size="default" variant="tonal">
            <v-icon icon="mdi-code-braces" start />
            Formación Tecnológica
          </v-chip>
          <v-card
            class="mx-auto pa-6"
            color="surface"
            elevation="8"
            max-width="600"
            rounded="xl"
            style="border: 1px solid rgba(79, 192, 141, 0.3)"
          >
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" rounded="lg" size="48">
                  <v-icon icon="mdi-vuejs" size="28" />
                </v-avatar>
              </template>
              <v-card-title class="text-h6 font-weight-bold text-primary">
                Desarrollo de Aplicaciones Front-End Trainee
              </v-card-title>
              <v-card-subtitle class="mt-1"> SENCE · 2026 </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p class="text-body-2 text-medium-emphasis">
                Programa intensivo de formación en el ecosistema moderno de
                desarrollo Front-End: Vue 3, Pinia, Vuetify 3, Vite, SASS, BEM,
                Git y Deploy en plataformas cloud.
              </p>
            </v-card-text>
          </v-card>
        </div>

        <v-row>
          <!-- FORMACIÓN ACADÉMICA -->
          <v-col cols="12" md="6">
            <div class="mb-6">
              <v-chip
                class="mb-6"
                color="secondary"
                size="small"
                variant="tonal"
              >
                <v-icon icon="mdi-book-open-variant" start />
                Formación Académica
              </v-chip>
            </div>
            <v-timeline align="start" density="compact" side="end">
              <v-timeline-item
                v-for="edu in academicBackground"
                :key="edu.title"
                :dot-color="edu.color"
                size="small"
              >
                <template #opposite>
                  <span class="text-caption text-medium-emphasis">{{
                    edu.years
                  }}</span>
                </template>
                <v-card
                  class="education-card pa-4"
                  color="surface"
                  elevation="2"
                  rounded="lg"
                >
                  <h4 class="text-body-1 font-weight-bold">{{ edu.title }}</h4>
                  <p class="text-caption text-medium-emphasis mb-0">
                    {{ edu.institution }}
                  </p>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>

          <!-- EXPERIENCIA LABORAL -->
          <v-col cols="12" md="6">
            <div class="mb-6">
              <v-chip class="mb-6" color="primary" size="small" variant="tonal">
                <v-icon icon="mdi-briefcase-outline" start />
                Experiencia Laboral
              </v-chip>
            </div>
            <v-timeline align="start" density="compact" side="end">
              <v-timeline-item
                v-for="job in workExperience"
                :key="job.title + job.years"
                :dot-color="job.color"
                size="small"
              >
                <template #opposite>
                  <span class="text-caption text-medium-emphasis">{{
                    job.years
                  }}</span>
                </template>
                <v-card
                  class="education-card pa-4"
                  color="surface"
                  elevation="2"
                  rounded="lg"
                >
                  <h4 class="text-body-1 font-weight-bold">{{ job.title }}</h4>
                  <p class="text-caption text-secondary mb-1">
                    {{ job.institution }}
                  </p>
                  <p class="text-caption text-medium-emphasis mb-0">
                    {{ job.description }}
                  </p>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>

        <!-- CURSOS Y CERTIFICACIONES -->
        <div class="mt-12 mb-12 py-12">
          <div class="text-center mb-8">
            <h3 class="text-h5 font-weight-bold">Aprendizaje Continuo</h3>
            <v-chip class="mb-4" color="secondary" size="small" variant="tonal">
              <v-icon icon="mdi-certificate-outline" start />
              Cursos & Certificaciones
            </v-chip>
          </div>
          <v-row justify="center">
            <v-col
              v-for="course in courses"
              :key="course.title"
              cols="12"
              lg="4"
              md="6"
            >
              <v-card
                class="pa-4 h-100 course-card"
                color="surface"
                elevation="2"
                rounded="lg"
              >
                <div class="d-flex align-start gap-3">
                  <v-chip
                    class="flex-shrink-0 mt-1"
                    :color="course.color"
                    size="x-small"
                    variant="tonal"
                  >
                    {{ course.year }}
                  </v-chip>
                  <div>
                    <p class="text-body-2 font-weight-medium mb-1">
                      {{ course.title }}
                    </p>
                    <p class="text-caption text-medium-emphasis mb-0">
                      {{ course.provider }}
                    </p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
  </section>
</template>

<script setup>
  import ProjectCard from '@/components/ProjectCard.vue'

  const skills = [
    { name: 'Vue 3', color: 'primary', icon: 'mdi-vuejs' },
    { name: 'Pinia', color: 'secondary', icon: null },
    { name: 'Vuetify 3', color: 'primary', icon: null },
    { name: 'Vue Router 4', color: 'primary', icon: null },
    { name: 'Vite', color: 'secondary', icon: 'mdi-lightning-bolt' },
    { name: 'SASS', color: 'pink', icon: null },
    { name: 'BEM', color: 'grey', icon: null },
    { name: 'Firebase', color: 'orange', icon: 'mdi-firebase' },
    { name: 'Bootstrap 5', color: 'purple', icon: null },
    { name: 'Git & GitHub', color: 'grey', icon: 'mdi-github' },
  ]

  const differentiators = [
    'Composition API + Composables para lógica reutilizable',
    'Gestión de estado eficiente con Pinia',
    'Diseño Mobile First con sobriedad digital',
    'Código limpio, modular y escalable',
  ]

  const projects = [
    {
      title: '🚀 Product Showcase SPA',
      challenge:
        'Se requería construir una interfaz rápida y escalable para mostrar un catálogo de productos obteniendo datos en tiempo real de una API externa, asegurando que la experiencia del usuario no se viera interrumpida por tiempos de carga.',
      decisions: [
        'Vue 3 (Composition API): Elegido para mejorar la modularidad del código y reutilizar la lógica de llamadas a la API mediante Composables.',
        'Pinia (vs. Vuex): Opté por Pinia por su integración nativa con Composition API y la eliminación de mutaciones innecesarias, logrando un código más limpio y eficiente.',
        'Axios / Firebase: Utilizado para el consumo de datos y la API REST, implementando interceptores para el manejo global de errores.',
        'Sobriedad Digital: Optimización del peso de assets y evitando renderizados innecesarios en el DOM.',
      ],
      tags: ['Vue 3', 'Pinia', 'Firebase', 'Vuetify', 'Vite'],
      image:
        'https://placehold.co/800x450/1E1E1E/4FC08D?text=Product+Showcase+SPA',
      demo: 'https://product-showcase-vue.netlify.app/',
      repo: 'https://github.com/jltamayocabello-droid/m7_abp_product-showcase',
    },
    {
      title: '📚 Booklist SPA',
      challenge:
        'Se requería construir una interfaz rápida y escalable para gestionar un catálogo bibliográfico dinámico, permitiendo a los usuarios buscar, filtrar y registrar libros en tiempo real, asegurando que la experiencia del usuario no se viera interrumpida por tiempos de carga.',
      decisions: [
        'Vue 3 (Composition API): Elegido para mejorar la modularidad del código y manejar la lógica compleja de filtrado y búsqueda mediante Composables, separando la vista de la lógica de negocio.',
        'Pinia (vs. Vuex): Opté por Pinia por su integración nativa con Composition API, logrando un estado centralizado mucho más limpio y eficiente para el listado de libros.',
        'Sobriedad Digital: Optimización del peso de assets y evitando renderizados innecesarios en el DOM.',
      ],
      tags: ['Vue 3', 'Pinia', 'Vue Router 4', 'Vite', 'Vercel'],
      image: 'https://placehold.co/800x450/1E1E1E/ffe162?text=Booklist+SPA',
      demo: 'https://m6-abp-booklist-spa.vercel.app/',
      repo: 'https://github.com/jltamayocabello-droid/m6_abp_booklist-spa',
    },
    {
      title: '💰 SmartBudget',
      challenge:
        'Se requería construir una interfaz rápida, escalable y visualmente atractiva para visualizar finanzas personales, asegurando que la experiencia del usuario (UX) fuera impecable en cualquier dispositivo (Mobile First) y sin tiempos de carga pesados.',
      decisions: [
        'SASS y BEM: Elegidos para mantener una arquitectura CSS modular, semántica y libre de colisiones. La metodología BEM permitió crear bloques de componentes altamente reutilizables.',
        'Bootstrap 5: Utilizado estratégicamente para el sistema de grillas base, acelerando el desarrollo responsivo y asegurando la compatibilidad entre navegadores.',
        'Sobriedad Digital: Optimización del peso de assets, comprimiendo estilos y evitando renderizados innecesarios, reduciendo drásticamente el consumo de recursos en dispositivos móviles.',
      ],
      tags: ['SASS', 'BEM', 'Bootstrap 5', 'Flexbox', 'CSS Grid'],
      image: 'https://placehold.co/800x450/1E1E1E/4FC08D?text=SmartBudget',
      demo: 'https://jltamayocabello-droid.github.io/m3-abp-smartbudget/',
      repo: 'https://github.com/jltamayocabello-droid/m3-abp-smartbudget',
    },
  ]

  const academicBackground = [
    {
      title: 'Diplomado de Honores en Pensamiento Contemporáneo',
      institution: 'Instituto de Humanidades, Universidad Diego Portales (UDP)',
      years: '2011',
      color: 'secondary',
    },
    {
      title: 'Licenciatura en Historia',
      institution: 'Universidad Diego Portales (UDP)',
      years: '2008–2011',
      color: 'secondary',
    },
  ]

  const workExperience = [
    {
      title: 'Asistente de Atención de Usuarios y Gestión de Colecciones',
      institution: 'Biblioteca Gauss, Pontificia Universidad Católica de Chile',
      description: 'Gestión de colecciones y atención a usuarios',
      years: '2018–2024',
      color: 'primary',
    },
    {
      title: 'Asesorías y Orientación Metodológica',
      institution: 'Taller de Investigación Social',
      description:
        'Asesorías y orientación metodológica para tesistas e investigadores',
      years: '2017–2018',
      color: 'primary',
    },
    {
      title: 'Asistente de Edición de Textos y Transcripciones',
      institution:
        'Trabajo para Bernabé Santelices (Premio Nacional de Ciencias Naturales 2012)',
      description:
        'Transcripción, preparación de textos (ISO/APA) y encuadernación',
      years: '2016–2017',
      color: 'primary',
    },
    {
      title: 'Ayudante de Investigación',
      institution: 'Programa de Historia de las Ideas Políticas en Chile, UDP',
      description: 'Ayudante de investigación',
      years: '2010–2012',
      color: 'primary',
    },
    {
      title: 'Documentación y Catalogación de Fotografías',
      institution: 'Centro Nacional Fotográfico (CENFOTO), UDP',
      description:
        'Documentación y catalogación de fotografías y álbumes (2008) en el contexto de la Licenciatura en Historia',
      years: 'Jul–Dic 2010',
      color: 'grey',
    },
    {
      title: 'Documentación de Colecciones Audiovisuales',
      institution: 'Museo de la Educación Gabriela Mistral (MEGM)',
      description:
        'Documentación de colecciones del fondo audiovisual (Cineteca Nacional) en el contexto de la Licenciatura en Historia',
      years: 'Mar–Jun 2011',
      color: 'grey',
    },
  ]

  const courses = [
    {
      year: '2025',
      title: 'Inmersión IA con Google Gemini',
      provider: 'Alura · Google',
      color: 'primary',
    },
    {
      year: '2025',
      title: 'Aprende Data Science: Cuenta Historias con los Datos',
      provider: 'Microsoft · LinkedIn',
      color: 'secondary',
    },
    {
      year: '2025',
      title: 'Aprende Data Science: Conceptos Básicos',
      provider: 'Microsoft · LinkedIn',
      color: 'secondary',
    },
    {
      year: '2025',
      title: 'Aprende Análisis de Datos: Ampliación y Aplicación',
      provider: 'Microsoft · LinkedIn',
      color: 'secondary',
    },
    {
      year: '2025',
      title: 'Aprende Análisis de Datos: Fundamentos',
      provider: 'Microsoft · LinkedIn',
      color: 'secondary',
    },
    {
      year: '2025',
      title: 'Introducción a las Habilidades Profesionales en Análisis de Datos',
      provider: 'Microsoft · LinkedIn',
      color: 'secondary',
    },
    {
      year: '2021',
      title: 'MOOC: Diseño y Formulación de Proyectos para Bibliotecas',
      provider: 'UNIACC',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Bases de Datos: Access',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Herramientas de Ofimática',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Conceptos y Herramientas Básicas (Comp. Digitales)',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Photoshop desde Cero',
      provider: 'SASI · VGroup',
      color: 'grey',
    },
  ]
</script>

<style scoped>
/* Hero */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(79, 192, 141, 0.08) 0%,
    transparent 60%
  );
}

.hero-avatar-wrapper {
  position: relative;
}

.hero-avatar {
  background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
  border: 2px solid rgba(79, 192, 141, 0.3);
}

.hero-title {
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  max-width: 560px;
  line-height: 1.65;
}

.scroll-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* About */
.about-section {
  background: rgba(30, 30, 30, 0.3);
}

.about-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Projects */
.projects-section {
  background: radial-gradient(
    ellipse at 50% 100%,
    rgba(255, 225, 98, 0.04) 0%,
    transparent 60%
  );
}

.coming-soon-card {
  border: 1px dashed rgba(79, 192, 141, 0.3);
}

/* Section headers */
.section-header h2 {
  letter-spacing: -0.01em;
}
</style>
