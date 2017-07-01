import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import news from '@/components/news'
import article from '@/components/article'
import comment from '@/components/comment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/news/:id',
      name:'news',
      component:news
    },
    {
      path:'/article/:id',
      name:'article',
      component:article
    },
    {
      path:'/comment/:id',
      name:'comment',
      component:comment
    }
  ]
})
