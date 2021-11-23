import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Icon from "./components/Icon.vue";
import "@/assets/tailwind.scss";

// import all svg icons
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
const svgIcons = require.context("./assets/icons", true, /\.svg$/);
requireAll(svgIcons);

const app = createApp(App);

// router
app.use(router);

// register global component
app.component("Icon", Icon);

app.mount("#app");
