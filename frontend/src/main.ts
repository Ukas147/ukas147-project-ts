import { createApp } from "vue";
import "./global.css";
import App from "./App.vue";
import router from "./router/router";
import {
  OhVueIcon,
  addIcons,
  MdSpacedashboardOutlined,
  RiSettings2Line,
  LaUserCircle,
  LaBellSolid,
  OiSearch,
  BiHouse
} from "./libs/ohVueIcons";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueApexCharts from "vue3-apexcharts";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

addIcons(
  MdSpacedashboardOutlined,
  RiSettings2Line,
  LaUserCircle,
  LaBellSolid,
  OiSearch,
  BiHouse
);

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router);
app.use(ElementPlus);
app.use(VueApexCharts);
app.component("v-icon", OhVueIcon);
app.mount("#app");