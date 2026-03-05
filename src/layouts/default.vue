<template>
  <v-app>
    <v-app-bar border color="background" flat>
      <v-container class="d-flex align-center">
        <v-app-bar-title class="font-weight-bold">JT.DEV</v-app-bar-title>
        <v-spacer />
        <v-btn href="#proyectos" variant="text">Proyectos</v-btn>
        <v-btn href="https://linkedin.com/in/tu-perfil" icon="mdi-linkedin" target="_blank" variant="text" />
        <v-btn href="https://github.com/jltamayocabello-droid" icon="mdi-github" target="_blank" variant="text" />
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column pa-8" color="background">
      <div class="text-caption text-medium-emphasis">
        © {{ new Date().getFullYear() }} — Jorge Tamayo | Desarrollado con Vue 3 & Vuetify
      </div>
    </v-footer>
  </v-app>
</template>
