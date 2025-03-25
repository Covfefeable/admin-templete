import { createApp } from "vue";
import "./style.less";
import { routes } from "vue-router/auto-routes";
import App from "./app";
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // Add your authentication logic here
  console.log(to, from);
  next();
});

createApp(App).use(router).use(createPinia()).mount("#app");
