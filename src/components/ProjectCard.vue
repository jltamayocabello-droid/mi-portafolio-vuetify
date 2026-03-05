<template>
  <v-card class="mx-auto my-4 pb-4" elevation="10" border rounded="xl">
    <v-img :src="image" height="250" cover></v-img>

    <v-card-item>
      <v-card-title class="text-h5 text-primary">{{ title }}</v-card-title>
      <div class="d-flex gap-2 mt-2">
        <v-chip
          v-for="tech in tags"
          :key="tech"
          size="x-small"
          color="secondary"
          variant="flat"
          class="mr-1"
        >
          {{ tech }}
        </v-chip>
      </div>
    </v-card-item>

    <v-card-text>
      <div class="mb-4">
        <strong class="text-white">El Desafío:</strong>
        <p class="text-body-2 text-medium-emphasis">{{ challenge }}</p>
      </div>

      <v-expansion-panels variant="accordion">
        <v-expansion-panel title="Decisiones Técnicas" bg-color="surface">
          <v-expansion-panel-text class="text-caption">
            <p v-for="(decision, i) in decisions" :key="i" class="mb-2">
              • {{ decision }}
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>

    <v-card-actions>
      <v-btn
        :href="demo"
        target="_blank"
        prepend-icon="mdi-rocket"
        color="primary"
        variant="tonal"
        >Demo</v-btn
      >
      <v-btn
        :href="repo"
        target="_blank"
        prepend-icon="mdi-github"
        variant="text"
        >Código</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps([
  "title",
  "challenge",
  "decisions",
  "tags",
  "image",
  "demo",
  "repo",
]);
</script>
