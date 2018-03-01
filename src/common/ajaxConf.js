import axios  from 'axios'
import qs from 'qs'

// 配置请求的基本参数
const Axios = axios.create({
  // baseURL: 'http://uadmin.51xnb.cn/', // 配置请求根路径
  timeout: 5000, // 配置请求超时
  responseType: 'json',
  headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  },
})

// 配置请求拦截器
Axios.interceptors.request.use( config => {
  // 特定请求方法，请求前序列化参数
  if(config.methods === 'post' || 'put' || 'delete') config.data = qs.stringify(config.data)
  return config
}, err => {
  console.log('reqErr', err)
  return Promise.reject(err)
})

// 配置响应拦截器
Axios.interceptors.response.use( res => {
  return res
}, err => {
  console.log('resErr', err) // 如接口404
  return Promise.reject(err.data.msg)
})

// 封装成 plugin , 可通过 Vue.use() 使用插件
export default {
  install: (Vue, Option) => {
  // 第三个参数的 configurable 和 writeable 默认为false，防止被修改
      Object.defineProperty(Vue.prototype, "ajax", { value: Axios })
  }
}