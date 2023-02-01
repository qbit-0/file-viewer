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
            :to="folderUpHref"
          >
            {{ currentDirPath }}
          </v-btn>
        </v-container>
        <FileItem
          v-for="file in files"
          :key="file.name"
          :file="file"
        />
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, watch, ref, computed } from "vue";
import { fetchDir } from "@/api";
import FileItem from "@/components/FileItem.vue";

const router = useRouter();
const route = useRoute();
const files = ref([]);

const currentDirPath = computed(() => {
  if (!route.query.path) {
    return "/";
  } else {
    return "/" + route.query.path;
  }
});

const updateDir = async () => {
  const data = await fetchDir(route.query.path);
  files.value = data;
};

onMounted(() => {
  updateDir();
});

watch(route, () => {
  updateDir();
});

const folderUpHref = computed(() => {
  if (route.query.path) {
    return router.resolve({
      name: "files",
      query: { path: route.query.path.split("/").slice(0, -1).join("/") },
    }).href;
  } else {
    return route.fullPath;
  }
});
</script>

<style>
.no-uppercase {
  text-transform: unset !important;
}
</style>
