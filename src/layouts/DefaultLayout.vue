<template>
  <v-app>
    <v-app-bar border color="background" flat>
      <v-container class="d-flex align-center">
        <v-app-bar-title class="font-weight-bold">JT.DEV</v-app-bar-title>
        <v-spacer />
        <div class="d-none d-md-flex align-center">
          <v-btn href="#formacion" variant="text">
            <v-icon icon="mdi-school" start />
            Trayectoria
          </v-btn>
          <v-btn href="#proyectos" variant="text">
            <v-icon icon="mdi-briefcase" start />
            Proyectos Destacados
          </v-btn>
          <v-btn
            href="https://www.linkedin.com/in/jorge-tamayo-c/"
            icon="mdi-linkedin"
            target="_blank"
            variant="text"
          />
          <v-btn
            href="https://github.com/jltamayocabello-droid"
            icon="mdi-github"
            target="_blank"
            variant="text"
          />
          <v-btn
            href="mailto:jltamayocabello@gmail.com"
            icon="mdi-email-outline"
            variant="text"
          />
        </div>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item
          href="#formacion"
          prepend-icon="mdi-school"
          title="Trayectoria"
          @click="drawer = false"
        />
        <v-list-item
          href="#proyectos"
          prepend-icon="mdi-briefcase"
          title="Proyectos Destacados"
          @click="drawer = false"
        />
        <v-divider />
        <v-list-item
          href="https://www.linkedin.com/in/jorge-tamayo-c/"
          prepend-icon="mdi-linkedin"
          target="_blank"
          title="LinkedIn"
        />
        <v-list-item
          href="https://github.com/jltamayocabello-droid"
          prepend-icon="mdi-github"
          target="_blank"
          title="GitHub"
        />
        <v-list-item
          href="mailto:jltamayocabello@gmail.com"
          prepend-icon="mdi-email-outline"
          title="Contacto"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <v-footer class="d-flex flex-column pa-8" color="background">
      <!-- Contacto-->
      <div
        class="d-flex flex-wrap justify-center ga-5 ga-md-10 align-center w-100 text-caption text-medium-emphasis"
      >
        <div class="d-flex flex-column align-center">
          <strong>Contacto: </strong>
          <a href="mailto:jltamayocabello@gmail.com" style="color: inherit">
            <v-icon icon="mdi-email-outline" size="13" />
            jltamayocabello@gmail.com
          </a>
          <a href="tel:+56981986512" style="color: inherit">
            <v-icon icon="mdi-phone" size="13" />
            +56 9 81986512
          </a>
        </div>
        <v-divider
          class="d-none d-md-flex align-self-center"
          style="height: 24px"
          vertical
        />
        <!-- Redes Sociales -->
        <div class="d-flex gap-2">
          <v-btn
            color="success"
            density="comfortable"
            href="https://wa.me/56981986512"
            icon="mdi-whatsapp"
            target="_blank"
            variant="text"
          />
          <v-btn
            color="blue-lighten-3"
            density="comfortable"
            href="https://www.linkedin.com/in/jorge-tamayo-c/"
            icon="mdi-linkedin"
            target="_blank"
            variant="text"
          />
          <v-btn
            density="comfortable"
            href="https://github.com/jltamayocabello-droid"
            icon="mdi-github"
            target="_blank"
            variant="text"
          />
        </div>
        <v-divider
          class="d-none d-md-flex align-self-center"
          style="height: 24px"
          vertical
        />
        <v-btn
          color="primary"
          density="comfortable"
          icon="mdi-chevron-up"
          variant="elevated"
          @click="scrollToTop"
        />
      </div>
      <div
        class="text-caption text-medium-emphasis mt-4 text-center w-100 px-4"
      >
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          rel="noopener noreferrer"
          style="color: inherit; text-decoration: none"
          target="_blank"
        >
          <v-icon
            class="mr-1"
            icon="mdi-creative-commons"
            size="16"
            style="vertical-align: text-bottom"
          />
        </a>
        {{ new Date().getFullYear() }} — Portafolio desarrollado con Vue 3 &amp;
        Vuetify
      </div>
    </v-footer>
  </v-app>
</template>
<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)

  function scrollToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>
