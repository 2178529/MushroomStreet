import axios from 'axios'

export function request(config) {
    const axios1 = axios.create({
      // baseURL:"static/data/homeData",
      timeout:5000
    })


  //响应时拦截
  axios1.interceptors.response.use(res => {
    return res.data
  })
    return axios1(config)
}

//拦截器使用
