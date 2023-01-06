import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import http from "@/http";


import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$http = http
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')


