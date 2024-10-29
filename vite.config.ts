import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    open:true, //自动打开浏览器
    host:true, 
    proxy:{
      'api':{
        target:'http://1.116.64.64:5004'
      }
    }
  },
  resolve:{
    alias:{
      '@':path.resolve('./src')
    }
  }
})
