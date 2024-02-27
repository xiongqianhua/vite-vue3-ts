<template>
    <div  class="error-box" v-if="hasError">
      <!-- 错误信息展示或其他处理 -->
      {{ '发生错误，请联系技术支持。'+ error.message }}
    </div>
    <div v-else>
      <!-- 正常渲染内容 -->
      <slot></slot>
    </div>
  </template>
<script setup>
import { onErrorCaptured ,ref} from 'vue';
const hasError = ref(false);
const error = ref(null);
// 在组件实例化时设置 onErrorCaptured 钩子
onErrorCaptured((err, vm, info) => {
  // 处理错误，可以将错误信息记录到日志或进行其他处理
  console.error('Error captured in child component:', err);
  console.log('Component instance:', vm);
  console.log('Error info:', info);
  hasError.value = true;
  error.value = err;
  return false;
});
</script>
<style scoped>
.error-box{
  width: 80vw;
  margin: 30vh auto;
  text-align: center;
  font-size: 2vw;
}
</style>