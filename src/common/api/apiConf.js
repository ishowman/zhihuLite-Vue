import Vue from 'vue'
import axios  from 'axios'
import qs from 'qs'
const config = require('../../../config')

console.log('config', process.env.NODE_ENV)

const baseURL = process.env.NODE_ENV === 'production'? '/':'/'

// 配置请求的基本参数
const Axios = axios.create({
  timeout: 5000, // 配置请求超时
  baseURL
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
  return res.data
}, err => {
  console.log('resErr', err) // 状态码4xx，如接口404
  Vue.$vux.toast.show({
    text: '服务器被玩坏了',
    type: 'cancel',
    width: '10em'
  })
})

export {Axios}