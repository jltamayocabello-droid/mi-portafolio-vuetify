<template>
  <v-app>
    <v-app-bar border color="background" flat>
      <v-container class="d-flex align-center">
        <v-app-bar-title class="font-weight-bold">JT.DEV</v-app-bar-title>
        <v-spacer />
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
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column pa-8" color="background">
      <div class="text-caption text-medium-emphasis">
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          rel="noopener noreferrer"
          style="color: inherit; text-decoration: none"
          target="_blank"
        >
          <v-icon icon="mdi-creative-commons" size="14" />
        </a>
        &nbsp;{{ new Date().getFullYear() }} | Jorge Tamayo — Desarrollado con
        Vue 3 &amp; Vuetify
      </div>
    </v-footer>
  </v-app>
</template>
