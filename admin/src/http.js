import axios from 'axios'
import {ElMessage} from 'element-plus'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use(res => {
        return res
    },
    error => {
        if (error.response.data.message) {
            ElMessage.error(error.response.data.message)
        }

        return Promise.reject(error)
    }
)

export default http