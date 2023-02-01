<template>
  <v-list-item
    :prepend-icon="icon"
    :to="fileClickHref"
    :active="false"
  >
    <v-list-item-title>{{ file.name }}</v-list-item-title>
  </v-list-item>
</template>

<script setup>
import { computed} from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({ file: { type: Object, required: true } });
const router = useRouter();
const route = useRoute();

const icon = computed(() => {
  if (props.file.isDirectory) {
    return "mdi-folder";
  } else if (props.file.isFile) {
    const fileType = props.file.name.split(".").slice(-1)[0];
    switch (fileType) {
      case "pdf":
        return "mdi-file-pdf-box";
      default:
        return "mdi-file";
    }
  } else {
    return "mdi-file-hidden";
  }
});

const fileClickHref = computed(() => {
let nextPath;
  if (!route.query.path) {
    nextPath = props.file.name;
  } else {
    nextPath = [...route.query.path.split("/"), props.file.name].join("/");
  }

  if (props.file.isDirectory) {
    return router.resolve({ name: "files", query: { path: nextPath } }).href;
  } else if (props.file.isFile) {
    const fileType = props.file.name.substr(
      props.file.name.lastIndexOf(".") + 1
    );
    switch (fileType) {
      case "pdf":
        return router.resolve({ name: "pdf", query: { path: nextPath } }).href;
      default:
        return route.fullPath;
    }
  } else {
    return route.fullPath;
  }
});

</script>

<style>

</style>