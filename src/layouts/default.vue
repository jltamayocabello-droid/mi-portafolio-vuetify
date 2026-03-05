<template>
  <v-app>
    <v-app-bar flat border color="background">
      <v-container class="d-flex align-center">
        <v-app-bar-title class="font-weight-bold">JT.DEV</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" to="/">Inicio</v-btn>
        <v-btn variant="text" href="#proyectos">Proyectos</v-btn>
        <v-btn variant="text" icon="mdi-linkedin" href="https://linkedin.com/in/tu-perfil" target="_blank"></v-btn>
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