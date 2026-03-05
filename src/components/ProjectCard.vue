<template>
  <v-card border class="mx-auto my-4 pb-4" elevation="10" rounded="xl">
    <v-img cover height="250" :src="image" />

    <v-card-item>
      <v-card-title class="text-h5 text-primary">{{ title }}</v-card-title>
      <div class="d-flex gap-2 mt-2">
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

    <v-card-text>
      <div class="mb-4">
        <strong class="text-white">El Desafío:</strong>
        <p class="text-body-2 text-medium-emphasis">{{ challenge }}</p>
      </div>

      <v-expansion-panels variant="accordion">
        <v-expansion-panel bg-color="surface" title="Decisiones Técnicas">
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
  defineProps([
    'title',
    'challenge',
    'decisions',
    'tags',
    'image',
    'demo',
    'repo',
  ])
</script>
