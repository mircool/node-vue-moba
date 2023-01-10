import axios from 'axios'
import {ElMessage} from 'element-plus'
import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') || ''
    }
})

http.interceptors.request.use((config) => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
})

http.interceptors.response.use(res => {
        return res
    },
    async error => {
        if (error.response.data.message) {
            ElMessage.error(error.response.data.message)
            if (error.response.status === 401) {
                await router.push('/login')
            }
        }
        return Promise.reject(error)
    }
)

export default http