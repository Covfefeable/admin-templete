import { Layout, Menu } from "ant-design-vue";
import Sider from "ant-design-vue/es/layout/Sider";
import { computed, defineComponent, onBeforeMount } from "vue";
import Logo from "../logo";
import { Content, Footer, Header } from "ant-design-vue/es/layout/layout";
import { menu } from "../../config/menu";
import { useRouter } from "vue-router";
import type { SelectInfo } from "ant-design-vue/es/menu/src/interface";

export default defineComponent({
  setup() {
    const router = useRouter();

    const curretPath = computed(() => router.currentRoute.value.path);
    const onSelect = (item: SelectInfo) => {
      router.push(item.key as string);
    };

    const goHome = () => {
      router.push("/home");
    };

    onBeforeMount(() => {
      goHome();
    });
    return { curretPath, onSelect, goHome };
  },
  render() {
    const { curretPath, onSelect, goHome } = this;
    const slots = this.$slots;
    return (
      <Layout hasSider class="glb-layout">
        <Sider class="sider">
          <div class="admin-title">
            <Logo onClick={goHome}/>
            <span>Admin Template</span>
          </div>
          <Menu theme="dark" mode="inline" items={menu} onSelect={onSelect} selectedKeys={[curretPath]} />
        </Sider>
        <Layout>
          <Header class="header" />
          <Content class="content">{slots.default && slots.default()}</Content>
          <Footer class="footer">
            admin template ©{new Date().getFullYear()} Created by Covfefeable
          </Footer>
        </Layout>
      </Layout>
    );
  },
});
