<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
      components: {
        Radio: {
          colorPrimary: '#00b96b',
        },
      },
      token: {
          colorPrimary: '#1890ff',
      },
    }"
    :locale="locale"
  >
    <ErrorBoundary>
      <Menu/>
    </ErrorBoundary>  
  </a-config-provider>
</template>
<script setup lang="ts">
import {ref} from 'vue';
//边缘错误
import ErrorBoundary from '@/components/ErrorBoundary.vue';
//menu
import Menu from '../src/views/menu/index.vue';
//定制主题
import { theme } from 'ant-design-vue';
// const { darkAlgorithm, compactAlgorithm } = theme;
// const { useToken } = theme;
// const { token } = useToken();
//国际化  
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const locale = ref(zhCN);
</script>
<style scoped>

</style>
