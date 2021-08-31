import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* import {Button} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; */
import { setupAntd } from '@/ant-design-vue'

const mock = true;
if (mock) {
    require('./mock/api')
}

const app = createApp(App);
setupAntd(app);
app.use(store);
app.use(router);
app.mount("#app");
