import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import http from "./http"

import './assets/style.scss'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
app.config.globalProperties.$http = http
app.use(createPinia())
app.use(router)

app.mount('#app')
