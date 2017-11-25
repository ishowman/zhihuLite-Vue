import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
    pulldown: {
      content: '下拉刷新1',
      height: 60,
      autoRefresh: false,
      downContent: '下拉刷新',
      upContent: '松手自动刷新',
      loadingContent: '正在获取最新数据',
      clsPrefix: 'xs-plugin-pulldown-'
    },
    pullup: {
      content: '',
      pullUpHeight: 60,
      height: 40,
      autoRefresh: false,
      downContent: '下拉加载更多',
      upContent: '',
      loadingContent: '努力加载中...',
      clsPrefix: 'xs-plugin-pullup-'
    }
  },
  mutations: {
    updateLoadingStatus (state, payload) {
        state.isLoading = payload.isLoading
    }
  }
})
store.registerModule('app', { // 名字自己定义
  state: {
    ids: []
  },
  mutations: {
    addIds (state, payload) {
        state.ids = [].concat(payload)
        console.log(state.ids)
    }
  }
})
export default store