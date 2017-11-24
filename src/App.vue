<template>
  <div id="app" style="height: 100%;">
    <x-header style="background: #028fd6;">zhihuLite
      <x-icon slot="overwrite-left" type="navicon" size="36" style="fill:#fff;position:relative;top:-7px;left:-8px;" @click="ctrDrawer"></x-icon>
    </x-header>
    
    <drawer :show.sync="isShow" show-mode="overlay" style="height: calc(100% - 46px);">
      <ul slot="drawer" id="sideBar">
        <a href="https://github.com/ishowman/zhihuLite-Vue"><img src="./common/img/github.png" alt="github" width="50"></a>
        <li @click="$router.push('/home')"  v-on:click="ctrDrawer()">首页</li>
        <li v-for="(item,index) in themeLists.others" 
            @click="$router.push('/themeView/'+item.id); ctrDrawer()" 
            :key="item.id">{{item.name}}</li>
      </ul>
      <div slot="default">
          <!-- <p key="p" class="loading" id="load">正在加载ing</p> -->
          <router-view></router-view>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { XHeader,Drawer,Cell  } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        isShow: false,
        isLoad: localStorage.getItem('isLoad'),
        themeLists: {},
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    methods: {
      ctrDrawer() {
        this.isShow = !this.isShow;
      },
      
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    },
    created() {
      this.ajax.get('api/themes')
        .then(res => {
          this.themeLists = {...res.data}
        })
        .catch(err=>console.log(err));

        
    },
    components: {
      XHeader,
      Drawer,
      Cell,
      
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body,html{height: 100%}
  #sideBar {
    background: #000;
    height: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    width: 160px;
    text-align: center;
    overflow: auto;
    li {
      color: rgba(255,255,255,0.75);;
      height: 36px;
      font: 17px/36px '微软雅黑';
    }
  }
/* 路由动画 */
  .fade-leave-active{
    transition: opacity .5s; 
  }
  .fade-enter-active{
    transition: opacity .5s; // 20s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0; 
  }
  .loading{
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
</style>
