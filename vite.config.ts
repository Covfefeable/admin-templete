import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    VueRouter({
      routesFolder: ["./src/pages"],
      exclude: ["**/components/**"],
      extensions: [".tsx"],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "~src",
        replacement: "/src",
      },
      {
        find: "~components",
        replacement: "/src/components",
      },
      {
        find: "~assets",
        replacement: "/src/assets",
      },
      {
        find: "~utils",
        replacement: "/src/utils",
      },
      {
        find: "~store",
        replacement: "/src/store",
      },
    ],
  },
  server: {
    host: true /** 启动ip访问地址 */,
    port: 3000,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:1338",
        changeOrigin: true,
      },
    },
  },
});
