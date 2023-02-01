<template>
  <v-main>
    <v-container>
      <h1>Simple File Viewer</h1>
    </v-container>
    <FileViewer />
  </v-main>
  <v-footer>
    <v-container>
      <p>
        Created by <a href="https://duypham.tech/">Duy Pham</a>. Github: <a href="https://github.com/qbit-0/file-viewer-frontend">Frontend</a>,  
        <a href="https://github.com/qbit-0/file-viewer-backend">Backend</a>
      </p>
    </v-container>
  </v-footer>
</template>

<script setup>
  import FileViewer from '@/components/FileViewer.vue';
</script>