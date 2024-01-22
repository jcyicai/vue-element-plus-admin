import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router/index'
import pinia from '@/store'

const app = createApp(App)

app.use(ElementPlus).use(router).use(pinia).mount('#app')
