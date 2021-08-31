<template>
  <div class="page-container">
    <div>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <router-link to="/" class="ant-btn ant-btn-primary">回到首页</router-link>
    </div>
    <img src="~@/assets/images/error/404.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
});
</script>

<style lang="less" scoped>
.page-container {
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>