import { createApp } from "vue";
import "./main.less";
import { routes } from "vue-router/auto-routes";
import App from "./app";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import { useMenu } from "./config/menu";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, _from, next) => {
  // Add your authentication logic here
  if (to.path === "/") {
    next(useMenu().first());
  } else {
    next();
  }

});

createApp(App).use(router).use(createPinia()).mount("#app");
