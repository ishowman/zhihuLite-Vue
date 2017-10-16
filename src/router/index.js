import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import themeView from '@/components/themeView'
import article from '@/components/article'
import comment from '@/components/comment'
import editor from '@/components/editor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/themeView/:id',
      name:'themeView',
      component:themeView
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
    },
    {
      path:'/editor',
      name:'editor',
      component:editor
    }
  ]
})
