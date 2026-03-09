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

      <div
        class="d-flex flex-column flex-sm-row justify-center align-center ga-4 ga-sm-8 mt-6 mb-10 w-100 px-4 px-sm-0"
      >
        <v-btn
          class="w-100 w-sm-auto"
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
          class="w-100 w-sm-auto"
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
          class="w-100 w-sm-auto"
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
        <v-btn
          class="scroll-bounce"
          color="primary"
          href="#about-section"
          icon="mdi-chevron-double-down"
          :ripple="false"
          variant="plain"
        />
      </div>
    </v-container>
  </section>

  <!-- ===========================
       ABOUT ME & SKILLS SECTION
  ============================ -->
  <section id="about-section" class="about-section py-16">
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
            <div
              class="d-flex flex-column align-center ga-4 ms-4 mx-4 mt-4 mb-4"
            >
              <img
                alt="Coding animation"
                class="about-gif rounded-lg"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ6dWF5dDZtdmRtbzZqeHJyNjZ5MXc3cWN5bHM2NzEydW95bGI0aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
              >
              <div class="text-justify">
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Desarrollador Front-End especializado en el ecosistema
                  <strong class="text-primary">Vue.js</strong> con un perfil
                  altamente versátil. Mi sólida trayectoria en investigación y
                  gestión documental me permite abordar problemas técnicos con
                  rigor analítico, creando arquitecturas limpias y
                  estructuradas.
                </p>
                <p class="text-body-1 text-medium-emphasis">
                  Acostumbrado a la excelencia en el servicio al usuario, enfoco
                  mis desarrollos en la empatía y la usabilidad. Soy un
                  profesional en constante formación, comprometido con la
                  <strong class="text-secondary">sobriedad digital</strong> y la
                  creación de experiencias digitales elegantes y performantes
                  que resuelvan necesidades reales con máxima eficiencia.
                </p>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <div class="section-header mb-6 ms-4 mx-4 mt-4 mb-4">
            <h3 class="text-h6 font-weight-bold mb-4">
              <v-icon class="mr-2" color="primary" icon="mdi-tools" />
              Stack Técnico
            </h3>

            <div class="mx-4 ms-12">
              <p class="text-caption text-medium-emphasis mb-2">
                <v-icon class="mr-1" icon="mdi-code-braces" size="14" />
                Desarrollo
              </p>
              <div class="d-flex flex-wrap gap-2 mb-4">
                <v-chip
                  v-for="skill in devSkills"
                  :key="skill.name"
                  class="font-weight-medium"
                  :color="skill.color"
                  size="default"
                  variant="tonal"
                >
                  <v-icon :icon="skill.icon" start />
                  {{ skill.name }}
                </v-chip>
              </div>

              <p class="text-caption text-medium-emphasis mb-2">
                <v-icon class="mr-1" icon="mdi-bookshelf" size="14" />
                Bibliotecología & Gestión
              </p>
              <div class="d-flex flex-wrap gap-2 mb-4">
                <v-chip
                  v-for="skill in librarySkills"
                  :key="skill.name"
                  class="font-weight-medium"
                  :color="skill.color"
                  size="default"
                  variant="tonal"
                >
                  <v-icon :icon="skill.icon" start />
                  {{ skill.name }}
                </v-chip>
              </div>

              <p class="text-caption text-medium-emphasis mb-2">
                <v-icon class="mr-1" icon="mdi-palette" size="14" />
                Diseño
              </p>
              <div class="d-flex flex-wrap gap-2 mb-4">
                <v-chip
                  v-for="skill in designSkills"
                  :key="skill.name"
                  class="font-weight-medium"
                  :color="skill.color"
                  size="default"
                  variant="tonal"
                >
                  <v-icon :icon="skill.icon" start />
                  {{ skill.name }}
                </v-chip>
              </div>

              <p class="text-caption text-medium-emphasis mb-2">
                <v-icon class="mr-1" icon="mdi-robot-outline" size="14" />
                Herramientas IA
              </p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="skill in aiSkills"
                  :key="skill.name"
                  class="font-weight-medium"
                  :color="skill.color"
                  size="default"
                  variant="tonal"
                >
                  <v-icon :icon="skill.icon" start />
                  {{ skill.name }}
                </v-chip>
              </div>
            </div>
          </div>

          <div class="ms-4 mx-4">
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
  <section id="proyectos" class="projects-section py-4">
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
              <v-card-title class="text-h6 font-weight-bold text-primary">
                Desarrollo de Aplicaciones Front-End Trainee
              </v-card-title>
              <v-card-subtitle class="mt-1"> SENCE · 2026 </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p class="text-body-2 text-medium-emphasis">
                Programa bootcamp intensivo de formación en el ecosistema
                moderno de desarrollo Front-End: Vue 3, Pinia, Vuetify 3, Vite,
                SASS, BEM, Bootstrap 5, Git y Deploy en plataformas cloud.
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
                <v-card
                  class="education-card pa-4 pa-sm-5 d-flex flex-column h-100"
                  color="surface"
                  elevation="2"
                  min-height="180"
                  rounded="lg"
                  width="100%"
                >
                  <div class="d-flex flex-column align-start h-100 w-100">
                    <v-chip
                      class="mb-1"
                      :color="edu.color"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ edu.years }}
                    </v-chip>
                    <div class="flex-grow-1 w-100">
                      <h4 class="text-body-1 font-weight-bold mb-1">
                        {{ edu.title }}
                      </h4>
                      <p class="text-caption text-medium-emphasis mb-0">
                        {{ edu.institution }}
                      </p>
                    </div>
                  </div>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>

          <!-- EXPERIENCIA LABORAL -->
          <v-col class="mt-12 mt-md-0" cols="12" md="6">
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
                <v-card
                  class="education-card pa-4 pa-sm-5 d-flex flex-column h-100"
                  color="surface"
                  elevation="2"
                  min-height="180"
                  rounded="lg"
                  width="100%"
                >
                  <div class="d-flex flex-column align-start h-100 w-100">
                    <v-chip
                      class="mb-1"
                      :color="job.color"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ job.years }}
                    </v-chip>
                    <div class="flex-grow-1 w-100">
                      <h4 class="text-body-1 font-weight-bold mb-1">
                        {{ job.title }}
                      </h4>
                      <p class="text-caption text-secondary mb-2">
                        {{ job.institution }}
                      </p>
                      <p
                        class="text-caption text-medium-emphasis mb-0 text-justify"
                        :class="
                          expandedJobs[job.title] ? '' : 'description-clamp'
                        "
                      >
                        {{ job.description }}
                      </p>
                      <div
                        v-if="job.description && job.description.length > 180"
                        class="d-flex justify-end mt-2"
                      >
                        <v-btn
                          class="px-0 text-none"
                          color="primary"
                          size="small"
                          variant="plain"
                          @click="
                            expandedJobs[job.title] = !expandedJobs[job.title]
                          "
                        >
                          {{
                            expandedJobs[job.title]
                              ? "Mostrar menos"
                              : "Leer más"
                          }}
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>

        <!-- CURSOS Y CERTIFICACIONES -->
        <div class="mt-16 pt-8">
          <div class="text-center mb-10">
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
                class="course-card pa-4 pa-sm-5 d-flex flex-column h-100"
                color="surface"
                elevation="2"
                min-height="140"
                rounded="lg"
              >
                <div class="d-flex align-start gap-3 h-100">
                  <v-chip
                    class="flex-shrink-0 mt-1 mb-1"
                    :color="course.color"
                    size="x-small"
                    variant="tonal"
                  >
                    {{ course.year }}
                  </v-chip>
                  <div class="flex-grow-1">
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
  import { ref } from 'vue'
  import booklistImg from '@/assets/images/BookList.png'

  import showcaseImg from '@/assets/images/showcase.png'
  import smartbudgetImg from '@/assets/images/SmartBudget.png'
  import ProjectCard from '@/components/ProjectCard.vue'

  const expandedJobs = ref({})

  const devSkills = [
    { name: 'HTML5', color: 'orange', icon: 'mdi-language-html5' },
    { name: 'CSS3', color: 'blue', icon: 'mdi-language-css3' },
    { name: 'JavaScript', color: 'yellow', icon: 'mdi-language-javascript' },
    { name: 'Vue 3', color: 'primary', icon: 'mdi-vuejs' },
    { name: 'Pinia', color: 'secondary', icon: 'mdi-pine-tree' },
    { name: 'Vuetify 3', color: 'primary', icon: 'mdi-palette-swatch' },
    { name: 'Vue Router 4', color: 'primary', icon: 'mdi-router' },
    { name: 'Vite', color: 'secondary', icon: 'mdi-lightning-bolt' },
    { name: 'SASS', color: 'pink', icon: 'mdi-sass' },
    { name: 'BEM', color: 'grey', icon: 'mdi-code-braces-box' },
    { name: 'WordPress', color: 'blue-darken-2', icon: 'mdi-wordpress' },
    { name: 'Firebase', color: 'orange', icon: 'mdi-firebase' },
    { name: 'Bootstrap 5', color: 'purple', icon: 'mdi-bootstrap' },
    { name: 'Git & GitHub', color: 'grey', icon: 'mdi-github' },
    { name: 'Netlify', color: 'teal', icon: 'mdi-cloud-upload' },
    { name: 'Vercel', color: 'grey-lighten-1', icon: 'mdi-triangle' },
  ]

  const librarySkills = [
    { name: 'Alma (Ex Libris)', color: 'green', icon: 'mdi-bookshelf' },
    {
      name: 'Ex Libris Leganto',
      color: 'green',
      icon: 'mdi-book-open-page-variant',
    },
    { name: 'Zotero', color: 'green', icon: 'mdi-bookmark-multiple' },
    { name: 'Microsoft 365', color: 'orange', icon: 'mdi-microsoft' },
    { name: 'Microsoft Access', color: 'orange', icon: 'mdi-database' },
  ]

  const designSkills = [
    { name: 'Adobe Photoshop', color: 'green', icon: 'mdi-image-edit' },
    { name: 'Adobe Illustrator', color: 'primary', icon: 'mdi-draw' },
    { name: 'Adobe InDesign', color: 'primary', icon: 'mdi-book-open-variant' },
  ]

  const aiSkills = [
    { name: 'Gemini', color: 'blue', icon: 'mdi-creation' },
    { name: 'Perplexity', color: 'green', icon: 'mdi-head-lightbulb' },
    { name: 'Microsoft Copilot', color: 'pink', icon: 'mdi-robot-outline' },
  ]

  const differentiators = [
    'Lógica reutilizable y mantenible mediante Composition API y Composables, reduciendo la deuda técnica.',
    'Gestión de flujos de datos centralizados y eficientes, optimizando la reactividad.',
    'Desarrollo basado en sobriedad digital, priorizando el alto rendimiento y la eficiencia de recursos.',
    'Estándares de Clean Code para entregar productos escalables, limpios y fáciles de testear.',
  ]

  const projects = [
    {
      title: '🚀 Product Showcase',
      challenge:
        'Desarrollar una SPA de alto impacto visual para un departamento de E-commerce, capaz de gestionar un catálogo dinámico con stock en tiempo real. El reto principal fue integrar una base de datos NoSQL y un sistema de autenticación, asegurando una experiencia de usuario fluida con estética Glassmorphism y protección de rutas administrativas.',
      decisions: [
        'Vue 3 & Pinia: Arquitectura modular con <script setup> para gestionar estados complejos como el carrito de compras y la sincronización de inventario.',
        'Firebase (BaaS): Implementación de Firestore para persistencia NoSQL en tiempo real y Firebase Auth para el control de sesiones seguras.',
        'Seguridad por Roles: Uso de Navigation Guards para restringir el acceso a funciones administrativas según el perfil de usuario validado.',
        'UI/UX Avanzada: Estética Glassmorphism mediante Bootstrap 5 personalizado y componentes de Vuetify para notificaciones contextuales (Snackbars).',
        'Lógica de Negocio: Desarrollo de un buscador inteligente y validaciones de stock dinámicas para optimizar la conversión en el flujo de compra',
      ],
      tags: ['Vue 3', 'Pinia', 'Firebase', 'Vuetify', 'Vite'],
      image: showcaseImg,
      demo: 'https://product-showcase-vue.netlify.app/',
      repo: 'https://github.com/jltamayocabello-droid/m7_abp_product-showcase',
    },
    {
      title: '📚 Booklist SPA',
      challenge:
        'Modernizar una plataforma estática de gestión editorial convirtiéndola en una Single Page Application (SPA) reactiva. El reto principal fue implementar un sistema de permisos por roles (Admin/Usuario), asegurar la persistencia de datos en el navegador y garantizar una navegación fluida sin recargas de página, integrando una API externa para portadas en tiempo real.',
      decisions: [
        'Vue 3 (Composition API): Implementación modular con <script setup> para una lógica de componentes reutilizable y escalable.',
        'Pinia & Persistencia: Gestión de estado global con sincronización en localStorage para mantener sesiones y datos del catálogo.',
        'Seguridad & Router: Control de acceso mediante Navigation Guards y rutas dinámicas para proteger funciones críticas según el rol.',
        'Arquitectura de Notificaciones: Diseño de un Flash Store dedicado para alertas globales, optimizando la comunicación con el usuario sin saturar las URLs.',
        'Integración de API Externa: Consumo de Open Library API para portadas dinámicas, reduciendo el peso del bundle y automatizando la carga de activos.',
      ],
      tags: ['Vue 3', 'Pinia', 'Vue Router 4', 'Vite', 'Vercel'],
      image: booklistImg,
      demo: 'https://m6-abp-booklist-spa.vercel.app/',
      repo: 'https://github.com/jltamayocabello-droid/m6_abp_booklist-spa',
    },
    {
      title: '💰 SmartBudget',
      challenge:
        'Transformar un prototipo de alta fidelidad (Figma) en una plataforma de gestión financiera de alto rendimiento. Se requería una arquitectura Mobile-First capaz de manejar visualizaciones complejas (balances, tokens y billeteras) manteniendo una carga ultrarrápida, una estructura de código mantenible y una experiencia de usuario (UX) fluida en dispositivos con recursos limitados.',
      decisions: [
        'SASS (Arquitectura 7-1): Implementé una estructura modular para centralizar variables y componentes, optimizando el mantenimiento y la compilación de estilos.',
        'Metodología BEM: Adopté este estándar para crear componentes independientes y reutilizables, eliminando conflictos de especificidad en el CSS.',
        'Bootstrap 5 (Modern Stack): Seleccioné esta versión por su alto rendimiento al prescindir de jQuery, utilizando su sistema de grillas para un desarrollo responsivo ágil.',
        'Optimización de Rendimiento: Reduje el peso del bundle mediante la compresión de activos y la limpieza de código, garantizando una navegación ligera y eficiente.',
      ],
      tags: ['SASS', 'BEM', 'Bootstrap 5', 'Flexbox', 'CSS Grid'],
      image: smartbudgetImg,
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
      description:
        'Gestión integral de colecciones y atención directa a usuarios mediante procesos de catalogación, clasificación y control de inventarios físicos y digitales. Administración del ciclo de adquisición, circulación y bibliografías mínimas, con soporte técnico en catálogos y bases de datos, junto con la generación de informes estadísticos para optimizar la disponibilidad y preservación del material.',
      years: '2018–2024',
      color: 'primary',
    },
    {
      title: 'Asesorías y Orientación Metodológica',
      institution: 'Taller de Investigación Social',
      description:
        'Asesoría y orientación metodológica para tesistas e investigadores en el diseño de proyectos, definición de objetivos y selección de marcos metodológicos. Responsable del apoyo en el procesamiento de datos, aplicación de normas de citación y gestión de herramientas de búsqueda académica para asegurar el rigor científico y la calidad de la producción investigativa.',
      years: '2017–2018',
      color: 'primary',
    },
    {
      title: 'Asistente de Atención de Usuarios',
      institution:
        'Biblioteca Campus Oriente, Pontificia Universidad Católica de Chile',
      description:
        'Responsable de la gestión integral de circulación y atención al usuario, ejecutando procesos de préstamo, devolución y catalogación básica de colecciones.',
      years: '2016–2017',
      color: 'primary',
    },
    {
      title: 'Edición de Textos y Transcripciones',
      institution:
        'Bernabé Santelices (Premio Nacional de Ciencias Naturales 2012)',
      description:
        'Preparación y transcripción de textos académicos siguiendo normativas internacionales (ISO/APA). Se recopilan, transcriben, editan y encuadernan investigaciones para la conformación de portafolio académico.',
      years: '2016–2017',
      color: 'primary',
    },
    {
      title: 'Ayudante de Investigación',
      institution: 'Programa de Historia de las Ideas Políticas en Chile, UDP',
      description:
        'Asistente de Investigación en el área de historia de las ideas políticas, responsable del análisis de la evolución institucional y debates públicos de los siglos XIX y XX. Ejecución de tareas de recopilación, sistematización de fuentes primarias y análisis cualitativo/cuantitativo para la comprensión del pensamiento político y la esfera pública chilena.',
      years: '2010–2012',
      color: 'primary',
    },
    {
      title: 'Documentación de Colecciones Audiovisuales',
      institution: 'Museo de la Educación Gabriela Mistral (MEGM)',
      description:
        'Documentación de colecciones del fondo audiovisual donado por la Cineteca Nacional a MEGM. Tarea realizada en el contexto de la Licenciatura en Historia.',
      years: 'Mar–Jun 2011',
      color: 'grey',
    },
    {
      title: 'Documentación y Catalogación de Fotografías',
      institution: 'Centro Nacional Fotográfico (CENFOTO), UDP',
      description:
        'Documentación y catalogación de fotografías y álbumes del siglo XIX comprados por UDP y conservadas en comodato en CENFOTO. Tarea realizada en el contexto de la Licenciatura en Historia.',
      years: 'Jul–Dic 2010',
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
      year: '2024',
      title:
        'Introducción a la Ciencia Abierta: Una Aproximación a los Datos de Investigación y Publicación en Abierto',
      provider: 'Bibliotecas de la Pontificia Universidad Católica de Chile',
      color: 'grey',
    },
    {
      year: '2024',
      title: 'Gestión del Talento Humano',
      provider: 'Coursera · Universidad Nacional Autónoma de México',
      color: 'grey',
    },
    {
      year: '2023',
      title: 'Nivel 2 "Maximiza el potencial de Microsoft 365"',
      provider: 'NoventiQ · Dirección de Transformación Digital, Pontificia Universidad Católica de Chile',
      color: 'grey',
    },
    {
      year: '2022',
      title: 'Identidad y Bienestar Digital',
      provider: 'Escuela de Competencias Digitales PUC',
      color: 'grey',
    },
    {
      year: '2022',
      title: 'Fundamentos de la Escritura ',
      provider: 'Coursera · Tecnológico de Monterrey',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'MOOC: Diseño y Formulación de Proyectos para Bibliotecas',
      provider: 'UNIACC',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Taller de Historia Local y Memoria',
      provider:
        'Memorias de la Río, Núcleo de historia social popular y autoeducación popular, Universidad de Chile',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Competencias Digitales: Bases de Datos. Access',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Competencias Digitales: Conceptos y Herramientas Básicas',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Competencias Digitales: Herramientas de Ofimática',
      provider: 'Coursera · Universitat Autónoma de Barcelona',
      color: 'grey',
    },
    {
      year: '2021',
      title: 'Photoshop desde Cero',
      provider: 'SASI · VGroup',
      color: 'grey',
    },
    {
      year: '2020',
      title: 'Ciberseguridad',
      provider: 'Escuela de Cumplimiento, SENCE',
      color: 'grey',
    },
    {
      year: '2020',
      title:
        'Autoliderazgo y gestión de emociones para avanzar en desafíos complejos',
      provider: 'Coursera · Universidad de Los Andes, Colombia',
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

.description-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

.about-gif {
  width: 100%;
  max-width: 500px;
  min-width: 140px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}

/* Forzar que las tarjetas del timeline ocupen todo el ancho disponbile */
:deep(.v-timeline-item__body) {
  width: 100%;
}
</style>
