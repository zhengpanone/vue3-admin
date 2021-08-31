<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"> </a-col>
      <a-col :xs="24" :md="12" :sm="24" :lg="10" :xl="6">
        <div class="login-container-form">
          <header>
            <img src="" alt="" />
            <h1>Vue3-Admin</h1>
          </header>
          <a-form :model="state.form">
            <a-form-item>
              <a-input
                v-model:value="state.form.username"
                size="large"
                placeholder="Username"
              >
                <template v-slot:prefix><user-outlined type="user" /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="state.form.password"
                size="large"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix><lock-outlined type="user" /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" size="large" block @click="handleSubmit"
                >Login in</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
import { Login } from "../../mock/index";
export default defineComponent({
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });

    const handleSubmit = async () => {
      const { username, password } = state.form;
      if (username.trim() === "" || password.trim() === "")
        return message.warning("用户名和密码不能为空");

      const res = await Login(state.form);
      console.log(res);
    };
    return { state, handleSubmit };
  },
});
</script>
<style lang="less" scoped>
.login-container {
  height: 100vh;
}
</style>
