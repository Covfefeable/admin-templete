import { createApp } from "vue";
import "./main.less";
import { routes } from "vue-router/auto-routes";
import App from "./app";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import { useMenu } from "./config/menu";
import { useUserStore } from "./store/user-store";

const pinia = createPinia()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, _from, next) => {
  // Add your authentication logic here
  const userStore = useUserStore();
  if (!userStore.isAuthenticated && to.path !== '/login') {
    next("/login")
    return
  }
  if (to.path === "/") {
    next(useMenu().first());
  } else {
    next();
  }
});

const app = createApp(App)
app.use(router).use(pinia)

// const userStore = useUserStore()
// const res = await userApi.checkLogin()
// if (res.ok && res.data) {
//   userStore.setUser(res.data)
// }

app.mount("#app");
