<template>
  <v-list-item
    :prepend-icon="icon"
    @click="handleFileClick"
  >
    <v-list-item-title>{{ file.name }}</v-list-item-title>
  </v-list-item>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({ file: { type: Object, required: true } });
const router = useRouter();
const route = useRoute();

const icon = computed(() => {
  if (props.file.isDirectory) {
    return "mdi-folder";
  } else if (props.file.isFile) {
    const fileType = props.file.name.substr(
      props.file.name.lastIndexOf(".") + 1
    );
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

const handleFileClick = async () => {
  let nextPath;
  if (!route.query.path) {
    nextPath = props.file.name;
  } else {
    nextPath = [...route.query.path.split("/"), props.file.name].join("/");
  }

  if (props.file.isDirectory) {
    router.push({ name: "files", query: { path: nextPath } });
  } else if (props.file.isFile) {
    const fileType = props.file.name.substr(
      props.file.name.lastIndexOf(".") + 1
    );
    switch (fileType) {
      case "pdf":
        router.push({ name: "pdf", query: { path: nextPath } });
        break;
      default:
        break;
    }
  }
};
</script>
