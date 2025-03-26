import { defineComponent, onMounted, ref } from "vue";
import { Breadcrumb, BreadcrumbItem } from "ant-design-vue";
import "./index.less";
import { useMenu, type MenuItem } from "../../config/menu";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menu = useMenu();
    router.beforeEach((_to, _from, next) => {
      next();
      setTimeout(setMenuBreadcrumb, 16);
    });

    const breadcrumbs = ref<string[]>([]);
    const setMenuBreadcrumb = () => {
      breadcrumbs.value = [];
      const menus = menu.getOrigin();
      const curpath = route.path;
      const pathArr = curpath.split("/").filter(Boolean);
      const findNameByPath = (path: string, menus: MenuItem[]) => {
        const curMenu = menus.find((item) => item.key === path);
        if (curMenu) {
          breadcrumbs.value.push(curMenu.label);
          if (curMenu.children && breadcrumbs.value.length < pathArr.length) {
            findNameByPath(pathArr[breadcrumbs.value.length], curMenu.children);
          }
        }
      };

      findNameByPath(pathArr[0], menus);
    };

    onMounted(() => {
      setMenuBreadcrumb();
    });
    return { breadcrumbs };
  },
  render() {
    const { breadcrumbs } = this;
    return (
      <div class="breadcrumb">
        <Breadcrumb>
          {breadcrumbs.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      </div>
    );
  },
});
