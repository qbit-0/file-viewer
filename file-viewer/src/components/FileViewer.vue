<template>
  <v-container>
    <v-card
      prepend-icon="mdi-file-tree-outline"
      title="Files"
    >
      <v-list>
        <v-container>
          <v-btn
            class="no-uppercase"
            prepend-icon="mdi-arrow-up-bold"
            variant="plain"
            @click="handleFolderUp($route, $router)"
          >
            {{ $route.path }}
          </v-btn>
        </v-container>
        <v-list-item prepend-icon="mdi-folder">
          <router-link to="/folder1/folder2">
            <v-list-item-title>folder1</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-list-item prepend-icon="mdi-file-pdf-box">
          <v-list-item-title>file1.pdf</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
const handleFolderUp = (route, router) => {
  router.push({ name: "home", params: { path: route.params.path.slice(0, -1)} });
}
</script>

<style>
  .no-uppercase {
    text-transform: unset !important;
  }
</style>