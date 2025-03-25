import { defineComponent, reactive, ref } from "vue";
import { Form, Input, Button, Card, message } from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/user-store";
import "./index.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const isLogin = ref(true);
    const loginForm = reactive({
      username: "",
      password: "",
    });
    
    const registerForm = reactive({
      username: "",
      password: "",
      confirmPassword: "",
    });

    const handleLogin = async () => {
      try {
        const userInfo = { username: loginForm.username };
        userStore.setUser(userInfo);
        message.success("登录成功");
        router.push("/");
      } catch (error) {
        message.error("登录失败");
      }
    };

    const handleRegister = async () => {
      try {
        if (registerForm.password !== registerForm.confirmPassword) {
          message.error("两次输入的密码不一致");
          return;
        }
        message.success("注册成功");
        isLogin.value = true;
      } catch (error) {
        message.error("注册失败");
      }
    };

    const toggleForm = () => {
      isLogin.value = !isLogin.value;
    };

    return { 
      isLogin,
      loginForm,
      registerForm,
      handleLogin,
      handleRegister,
      toggleForm
    };
  },
  render() {
    const { isLogin, loginForm, registerForm, handleLogin, handleRegister, toggleForm } = this;
    return (
      <div class="login-container">
        <Card class="login-card">
          <h1 class="title">{isLogin ? "用户登录" : "用户注册"}</h1>
          {isLogin ? (
            <Form class="form" model={loginForm} onFinish={handleLogin}>
              <Form.Item class="form-item">
                <Input
                  v-model:value={loginForm.username}
                  prefix={<UserOutlined />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item class="form-item">
                <Input.Password
                  v-model:value={loginForm.password}
                  prefix={<LockOutlined />}
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" html-type="submit" class="login-button">
                  登录
                </Button>
              </Form.Item>
              <div class="register-link">
                <a onClick={toggleForm}>还没有账号？立即注册</a>
              </div>
            </Form>
          ) : (
            <Form class="form" model={registerForm} onFinish={handleRegister}>
              <Form.Item class="form-item">
                <Input
                  v-model:value={registerForm.username}
                  prefix={<UserOutlined />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item class="form-item">
                <Input.Password
                  v-model:value={registerForm.password}
                  prefix={<LockOutlined />}
                  placeholder="设置密码"
                />
              </Form.Item>
              <Form.Item class="form-item">
                <Input.Password
                  v-model:value={registerForm.confirmPassword}
                  prefix={<LockOutlined />}
                  placeholder="确认密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" html-type="submit" class="login-button">
                  注册
                </Button>
              </Form.Item>
              <div class="register-link">
                <a onClick={toggleForm}>已有账号？立即登录</a>
              </div>
            </Form>
          )}
        </Card>
      </div>
    );
  },
});
