import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

/*element-plus*/
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(createPinia().use(piniaPluginPersistedState));
app.use(ElementPlus);
app.use(router);
app.mount("#app");
