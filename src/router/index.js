import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
/* import home from '@/components/home'
import themeView from '@/components/themeView'
import article from '@/components/article'
import comment from '@/components/comment'
import editor from '@/components/editor' */
Vue.use(Router)
// 路由懒加载
const home = () => import('@/components/home') 
const themeView = () => import('@/components/themeView') 
const article = () => import('@/components/article') 
const comment = () => import('@/components/comment') 
const editor = () => import('@/components/editor') 
const router = new Router({
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
router.beforeEach((to, from, next) => {
  /* console.log(to)
  console.log(from) */
  if(to.name === 'article'){
    if(from.name === 'home' || from.name === 'themeView'){
      let data = from.matched[0].instances.default.newsList,
          ids = [];
      for(let item of data){
        ids.push(item.id)
      }
      store.commit('addIds', ids)
    }
  }
  console.log('before: '+new Date().getTime())
  store.commit('updateLoadingStatus', {isLoading: true})
  /* if(document.querySelector('#load')){
    document.querySelector('#load').style.display = 'block'
  } */
  next()
})
router.afterEach((to, from) => {
  console.log('after: '+new Date().getTime())  
  store.commit('updateLoadingStatus', {isLoading: false})
  /* setTimeout(function(){   //  延长过渡动画时间200ms
      store.commit('updateLoadingStatus', {isLoading: false})
    // document.querySelector('#load').style.display = 'none'  
  }, 200) */
})
export default router


