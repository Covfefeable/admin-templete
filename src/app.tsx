import { defineComponent } from "vue";
import Layout from "./components/layout";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return {};
  },
  render() {
    return (
      <Layout>
        <RouterView />
      </Layout>
    );
  },
});
