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
        <v-btn
          href="mailto:jltamayocabello@gmail.com"
          icon="mdi-email-outline"
          variant="text"
        />
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column pa-8" color="background">
      <div class="text-caption text-medium-emphasis">
        <strong>Contacto: </strong>
        <a href="mailto:jltamayocabello@gmail.com" style="color: inherit">
          <v-icon icon="mdi-email-outline" size="13" />
          jltamayocabello@gmail.com
        </a>
        <br>
        <a href="tel:+56981986512" style="color: inherit">
          <v-icon icon="mdi-phone" size="13" />
          +56 9 81986512
        </a>
        <!-- Redes Sociales -->
        <div class="d-flex justify-center gap-2 mt-2">
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
      </div>
      <div class="text-caption text-medium-emphasis mt-2">
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          rel="noopener noreferrer"
          style="color: inherit; text-decoration: none"
          target="_blank"
        >
          <v-icon icon="mdi-creative-commons" size="14" />
        </a>
        &nbsp;{{ new Date().getFullYear() }} — Portafolio desarrollado con Vue 3
        &amp; Vuetify
      </div>
    </v-footer>
  </v-app>
</template>
