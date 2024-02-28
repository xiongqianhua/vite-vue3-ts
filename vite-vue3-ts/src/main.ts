/*
 * @Author: qianhua.xiong
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as Icons from '@ant-design/icons-vue'
const app = createApp(App)

// 注册图标组件
for (const i in Icons) {
    app.component(i, Icons[i])
  }
app.use(router).use(Antd).mount('#app')
