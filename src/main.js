// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
// import router from './router'

import Hello from '@/components/Hello'
import news from '@/components/news'
import axios from '@/ajaxConfig'

Vue.use(Router)
Vue.config.productionTip = false

const routes = [{
  path: '/',
  component: Hello
},
  {
    path: '/news',
    component: news
  }
]
const router = new Router({
  routes
})

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
