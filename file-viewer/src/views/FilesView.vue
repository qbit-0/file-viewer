<template>
  <v-main>
    <v-container>
      <h1>Simple File Viewer</h1>
    </v-container>
    <FileViewer />
  </v-main>
  <v-footer>
    <v-container>
      <h3>Created by <a href="https://duypham.tech/">Duy Pham</a>.</h3>
    </v-container>
  </v-footer>
</template>

<script setup>
  import FileViewer from '@/components/FileViewer.vue';
</script>