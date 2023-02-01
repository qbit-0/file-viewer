/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "@/router";
import axios from "axios";
import VueAxios from "vue-axios";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify);
  app.use(router);
  app.use(VueAxios, axios);
}
