import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";
import "./global.css";
import {
  addIcons,
  BiBarChartFill,
  BiHouse,
  FaHeart,
  FaRegularBuilding,
  FaStar,
  IoEyeSharp,
  LaBellSolid,
  LaUserCircle,
  LaUserSolid,
  MdSavealtRound,
  MdSpacedashboardOutlined,
  OhVueIcon,
  OiSearch,
  RiSettings2Line,
  SiTarget
} from "./libs/ohVueIcons";
import router from "./router/router";

addIcons(
  BiBarChartFill,
  BiHouse,
  FaHeart,
  FaRegularBuilding,
  FaStar,
  IoEyeSharp,
  LaBellSolid,
  LaUserCircle,
  LaUserSolid,
  MdSavealtRound,
  MdSpacedashboardOutlined,
  OhVueIcon,
  OiSearch,
  RiSettings2Line,
  SiTarget
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