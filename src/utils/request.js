import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.baidu.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {

  },
  error => {
    return Promise.reject(error)
  }
)

export default service
