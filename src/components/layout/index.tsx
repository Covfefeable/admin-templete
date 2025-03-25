import { Layout, Menu } from "ant-design-vue";
import Sider from "ant-design-vue/es/layout/Sider";
import { computed, defineComponent } from "vue";
import Logo from "../logo";
import { Content, Footer, Header } from "ant-design-vue/es/layout/layout";
import { useRouter } from "vue-router";
import type { SelectInfo } from "ant-design-vue/es/menu/src/interface";
import { useMenu } from "../../config/menu";

export default defineComponent({
  setup() {
    const router = useRouter();
    const menu = useMenu()

    const curretPath = computed(() => router.currentRoute.value.path);
    const menus = menu.get();
    const onSelect = (item: SelectInfo) => {
      router.push(item.key as string);
      console.log(menu.current());
    };

    const goHome = () => {
      router.push(menu.first());
    };

    return { curretPath, menus, onSelect, goHome };
  },
  render() {
    const { curretPath, menus, onSelect, goHome } = this;
    const slots = this.$slots;
    return (
      <Layout hasSider class="glb-layout">
        <Sider class="sider">
          <div class="admin-title">
            <Logo onClick={goHome}/>
            <span>Admin Template</span>
          </div>
          <Menu theme="dark" mode="inline" items={menus} onSelect={onSelect} selectedKeys={[curretPath]} />
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
