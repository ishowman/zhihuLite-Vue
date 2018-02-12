<template>
  <div id="app" style="height: 100%;">
    <x-header style="background: #028fd6;">zhihuLite
      <x-icon slot="overwrite-left" type="navicon" size="36" style="fill:#fff;position:relative;top:-7px;left:-8px;" @click="ctrDrawer"></x-icon>
    </x-header>
    
    <drawer :show.sync="isShow" show-mode="overlay" style="height: calc(100% - 46px);">
      <ul slot="drawer" id="sideBar">
        <a href="https://github.com/ishowman/zhihuLite-Vue"><img src="./common/img/github.png" alt="github" width="50"></a>
        <li @click="$router.push('/home')"  v-on:click="ctrDrawer()">首页</li>
        <li v-for="(item, index) in themeLists.others" 
            @click="$router.push('/themeView/'+item.id); ctrDrawer()" 
            :key="item.id">{{item.name}}</li>
      </ul>
      <div slot="default">
          <!-- <p key="p" class="loading" id="load" v-show="isLoading">正在加载ing</p> -->
          <div class="mask" v-show="isLoading">
            <!-- <spinner type="lines" size="60px"></spinner> -->
            <svg width="100%" height="100">
              <text text-anchor="middle" x="50%" y="50%" class="text text-1">
                  正 在 加 载 ing
              </text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-2">
                  正 在 加 载 ing
              </text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-3">
                  正 在 加 载 ing
              </text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-4">
                  正 在 加 载 ing
              </text>
          </svg> 
          </div>
          <router-view></router-view>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { XHeader,Drawer,Cell, Spinner  } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        isShow: false,
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
      Spinner
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
  .mask{
    position: absolute;
    background:#fff;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: grid;
    justify-content: center;
    align-items: center;
  }
/* 霓虹灯文字 */
  .text{
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    fill: none;
    stroke-width: 2px;
    stroke-dasharray: 90 310;
    animation: stroke 6s infinite linear;
  }
  .text-1{
      stroke: #3498db;
      text-shadow: 0 0 5px #3498db;
      animation-delay: -1.5s;
  }
  .text-2{
      stroke: #f39c12;
      text-shadow: 0 0 5px #f39c12;
      animation-delay: -3s;
  }
  .text-3{
      stroke: #e74c3c;
      text-shadow: 0 0 5px #e74c3c;
      animation-delay: -4.5s;
  }
  .text-4{
      stroke: #9b59b6;
      text-shadow: 0 0 5px #9b59b6;
      animation-delay: -6s;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
</style>
