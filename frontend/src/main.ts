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
} from "./libs/ohVueIcons";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

addIcons(
  MdSpacedashboardOutlined,
  RiSettings2Line,
  LaUserCircle,
  LaBellSolid,
  OiSearch
);

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.component("v-icon", OhVueIcon);
app.mount("#app");
