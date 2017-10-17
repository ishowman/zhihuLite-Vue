/**
 * Created by Administrator on 2017/6/28/028.
 */
import Vue from 'vue'
import axios  from 'axios'
import qs from 'qs'
const okCode = '200' // 定义正常状态码

Vue.prototype.ajax = axios // 把axios绑定到Vue的原型上，通过this.ajax即可调用axios
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost'; // 配置请求根路径

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data); // 自动将参数对象转换成字符串
  }
  return config;
},(error) =>{
// 可以在这里写错误处理代码,如弹窗提示错误信息。
  console.log('request-'+error)
  return Promise.reject(error);
});
//code错误状态码处理
/*axios.interceptors.response.use((res) =>{
  if(res.data.code != okCode){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
// 可以在这里写错误处理代码,如弹窗提示错误信息。
  console.log('response-'+error)
  return Promise.reject(error);
});*/
