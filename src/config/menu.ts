import config from "./config.json";
interface MenuItem {
  key: string;
  label: string;
  children?: MenuItem[];
}

export const useMenu = () => {
  const get = () => {
    const oriMenu = JSON.parse(JSON.stringify(config.menu));
    const formatMenu = (subMenu: MenuItem[], parentKey = ""): MenuItem[] => {
      return subMenu.map((item: MenuItem) => {
        const key = parentKey ? `${parentKey}/${item.key}` : `/${item.key}`;
        if (item.children) {
          return {
            key,
            label: item.label,
            children: formatMenu(item.children, key),
          };
        }
        return {
          key,
          label: item.label,
        };
      });
    };
    const menu = formatMenu(oriMenu);
    return menu;
  };

  return {
    get,
  };
};
