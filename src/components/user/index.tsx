import { UserOutlined } from "@ant-design/icons-vue";
import { Avatar, Dropdown, Menu, type MenuProps } from "ant-design-vue";
import { defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  setup() {
    const userActions: () => MenuProps["items"] = () => [
      {
        key: "user",
        label: "user",
      },
      {
        key: "logout",
        label: "退出登录",
        onClick: () => {
          console.log("logout");
        },
      },
    ];
    return { userActions };
  },
  render() {
    const { userActions } = this;
    return (
      <div class="user">
        <Dropdown
          arrow
          overlay={<Menu items={userActions()}></Menu>}
          placement="bottomLeft"
        >
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#87d068" }}
          />
        </Dropdown>
      </div>
    );
  },
});
