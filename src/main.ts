import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.scss";

// import all svg icons
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
const svgIcons = require.context("./assets/icons", true, /\.svg$/);
requireAll(svgIcons);

createApp(App).use(router).mount("#app");
