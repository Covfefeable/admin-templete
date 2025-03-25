import { computed, defineComponent } from "vue";
import Layout from "./components/layout";
import { RouterView, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const isLoginPage = computed(() => route.path === "/login");
    return { isLoginPage };
  },
  render() {
    const { isLoginPage } = this;
    return isLoginPage ? (
      <RouterView />
    ) : (
      <Layout>
        <RouterView />
      </Layout>
    );
  },
});
