import { createRouter, createWebHistory } from "vue-router";
import FilesView from "../views/FilesView.vue";
import PDFView from "../views/PDFView.vue";

const routes = [
  { path: "/", redirect: "/files" },
  { path: "/files", name: "files", component: FilesView },
  { path: "/pdf", name: "pdf", component: PDFView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
