/*
 * @Author: qianhua.xiong
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(router).use(Antd).mount('#app')
