<template>
  <iframe
    height="100%"
    width="100%"
    :src="`${filePath}`"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({fileName: {type: String, required: true}});
const filePath = computed(() => {
  return `lib/pdfjs-3.3.122-dist/web/viewer.html?file=../../../${props.fileName}`;
});
</script>