import { createApp } from 'vue'
import App from './App.vue'
// reset css
import 'normalize.css/normalize.css'
// base css
import '@/styles/index.scss'
// element style
import 'element-plus/dist/index.css'
// custom element css
import '@/styles/element.scss'
// svg 注入脚本
// https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
// element plus
import ElementPlus from 'element-plus'
// element icons
import * as Icons from '@element-plus/icons-vue'
// vue router
import router from '@/router/index'
// pinia store
import pinia from '@/store'

const app = createApp(App)

// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(ElementPlus).use(router).use(pinia).mount('#app')
