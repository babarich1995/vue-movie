require('dotenv').config()
import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MovieDashboard from "./movie-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MovieDashboard);
appInstance.mount("#app");
