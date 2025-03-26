import config from "./config.json";
export interface MenuItem {
  key: string;
  label: string;
  meta?: Record<string, any>;
  children?: MenuItem[];
}
const getMenu = () => {
  const oriMenu = JSON.parse(JSON.stringify(config.menu));
  const formatMenu = (subMenu: MenuItem[], parentKey = ""): MenuItem[] => {
    return subMenu.map((item: MenuItem) => {
      const key = parentKey ? `${parentKey}/${item.key}` : `/${item.key}`;
      if (item.children) {
        return {
          key,
          label: item.label,
          meta: item.meta,
          children: formatMenu(item.children, key),
        };
      }
      return {
        key,
        meta: item.meta,
        label: item.label,
      };
    });
  };
  const menu = formatMenu(oriMenu);
  return menu;
};

const currentMenu = () => {
  const path = location.hash.slice(1).replace(/\?.*/, "");
  const menus = getMenu();
  const findMenu = (menu: MenuItem[]): MenuItem | undefined => {
    for (const item of menu) {
      if (item.key === path) {
        return item;
      }
      if (item.children) {
        const find = findMenu(item.children);
        if (find) {
          return find;
        }
      }
    }
  };
  return findMenu(menus);
};

const firstMenu = () => {
  const menus = getMenu();
  const findMenu = (menu: MenuItem[]): MenuItem | undefined => {
    for (const item of menu) {
      if (item.children) {
        return findMenu(item.children);
      }
      return item;
    }
  };
  return findMenu(menus)!.key;
};

export const useMenu = () => {
  // 获取原始菜单
  const getOrigin = () => config.menu;

  // 获取完整菜单
  const get = () => getMenu();

  // 获取当前菜单
  const current = () => currentMenu();

  // 获取第一个菜单
  const first = () => firstMenu();

  return {
    getOrigin,
    get,
    current,
    first,
  };
};
