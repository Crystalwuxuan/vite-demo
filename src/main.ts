import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//1. 引入pinia
import {createPinia} from 'pinia'

let app = createApp(App)

//2.安装
app.use(createPinia())
.mount('#app')
