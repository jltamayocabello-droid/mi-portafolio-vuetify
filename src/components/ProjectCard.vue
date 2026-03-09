<template>
  <v-card
    border
    class="mx-auto my-4 d-flex flex-column h-100"
    elevation="10"
    rounded="xl"
  >
    <v-img cover height="250" :src="image" />

    <v-card-item class="px-4 px-sm-6 pt-4 pt-sm-6 pb-2">
      <v-card-title class="text-h5 text-primary">{{ title }}</v-card-title>
      <div class="d-flex flex-wrap gap-2 mt-2">
        <v-chip
          v-for="tech in tags"
          :key="tech"
          class="mr-1"
          color="secondary"
          size="x-small"
          variant="flat"
        >
          {{ tech }}
        </v-chip>
      </div>
    </v-card-item>

    <v-card-text class="flex-grow-1 px-4 px-sm-6 py-2">
      <div class="mb-4">
        <strong class="text-white">El Desafío:</strong>
        <p
          class="text-body-2 text-medium-emphasis text-justify"
          :class="{ 'challenge-clamp': !verMas }"
        >
          {{ challenge }}
        </p>
        <div class="d-flex justify-end mt-1 mb-2">
          <v-btn
            class="text-none px-0"
            color="primary"
            size="small"
            variant="plain"
            @click="verMas = !verMas"
          >
            {{ verMas ? "Mostrar menos" : "Leer más" }}
          </v-btn>
        </div>
      </div>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel bg-color="surface" title="Decisiones Técnicas">
          <v-expansion-panel-text class="text-caption">
            <p
              v-for="(decision, i) in decisions"
              :key="i"
              class="mb-2 text-justify"
            >
              • {{ decision }}
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>

    <v-card-actions class="justify-center px-4 px-sm-6 pb-4 pt-2">
      <v-btn
        color="primary"
        :href="demo"
        prepend-icon="mdi-rocket"
        target="_blank"
        variant="tonal"
      >Demo</v-btn>
      <v-btn
        :href="repo"
        prepend-icon="mdi-github"
        target="_blank"
        variant="text"
      >Código</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  const verMas = ref(false)

  defineProps({
    title: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    decisions: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      default: null,
    },
    repo: {
      type: String,
      default: null,
    },
  })
</script>

<style scoped>
.challenge-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
