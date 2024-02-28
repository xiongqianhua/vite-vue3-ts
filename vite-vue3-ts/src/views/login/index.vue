<!--
 * @Author: qianhua.xiong
-->
<template>
    <div id="loginPage" :style="STYLE">
      <a-form
      :model="formState"
      name="center"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名！' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
  
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码！' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
  
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住</a-checkbox>
      </a-form-item>
  
      <a-form-item>
        <a-button type="primary" style="width:20vw"  html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive ,ref} from 'vue';
  import { useRouter} from 'vue-router';
  let router = useRouter();
  const STYLE = ref({
    position: 'fixed',
    left: 0,
    top:0, 
    zIndex: 9999, 
    width: '100vw',
    height:'100vh',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#242424"
  })
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  
  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
    router.push({"path":"/home"})
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  </script>
  
  