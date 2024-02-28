<!--
 * @Author: qianhua.xiong
-->
<template>
    <a-layout :style="MenuStyle">
      <a-layout-header class="header">
        <div class="logo"/>
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="2">产品页</a-menu-item>
          <a-menu-item key="3">关于我们</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-layout style="padding: 24px 0;">
          <a-layout-sider width="15vw">
            <a-menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              style="height: 80vh; overflow-y:scroll;"
            > 
             
              <a-sub-menu :key="menu.id" v-for="menu in MenuList">
                <template #title>
                  <span>
                    <component :is="menu.icon"></component>
                    {{ menu.label }}
                  </span>
                </template>
                <a-menu-item :key="child.id" v-for="child in menu.children"><a :href="child.path">{{ child.label }}</a></a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <RouterView />
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        宇宙第一超级好用系统
      </a-layout-footer>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import MenuList from './menuList.tsx';
  const MenuStyle = ref({
    width: '100vw',
    height:'100vh'
  })
  const selectedKeys1 = ref<string[]>(['1']);
  const selectedKeys2 = ref<string[]>(['1']);
  const openKeys = ref<string[]>(['sub1']);
  console.log(openKeys.value,selectedKeys1.value,selectedKeys2.value,'openKeys,selectedKeys1,selectedKeys2')
  </script>
  <style scoped>
  #components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
  }
  
  .ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  /* 隐藏滚动条 */
    ::-webkit-scrollbar {
    display: none;
    }

  </style>
  