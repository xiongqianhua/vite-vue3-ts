/*
 * @Author: qianhua.xiong
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import sass from 'sass';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),],
  css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/styles/global.scss";',
          implementation: sass
        }
      }
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
    extensions: [ '.ts','.vue','.js']
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
