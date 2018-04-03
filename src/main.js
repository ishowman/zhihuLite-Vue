// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
// import axios from '@/common/ajaxConf'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
// Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
// 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
// 解决知乎图片防盗链
Vue.filter("url",url => url.replace(
  /http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
