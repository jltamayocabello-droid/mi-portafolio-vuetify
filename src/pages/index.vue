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
          href="https://linkedin.com/in/jorge-tamayo"
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
              Desarrollador Front-End con vocación por crear experiencias
              digitales elegantes y performantes. Me especializo en el
              ecosistema <strong class="text-primary">Vue.js</strong>, aplicando
              buenas prácticas de arquitectura y diseño centrado en el usuario.
            </p>
            <p class="text-body-1 text-medium-emphasis">
              Apasionado por la
              <strong class="text-secondary">optimización</strong>, la sobriedad
              digital y el código limpio que escala. Creo que la mejor interfaz
              es la que el usuario no nota, porque simplemente funciona.
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
                class="px-0"
                prepend-icon="mdi-check-circle"
                :title="point"
              />
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
      emoji: '🚀',
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
      demo: 'https://github.com/jltamayocabello-droid',
      repo: 'https://github.com/jltamayocabello-droid',
    },
    {
      emoji: '📚',
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
      demo: 'https://github.com/jltamayocabello-droid',
      repo: 'https://github.com/jltamayocabello-droid',
    },
    {
      emoji: '💰',
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
      demo: 'https://github.com/jltamayocabello-droid',
      repo: 'https://github.com/jltamayocabello-droid',
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
