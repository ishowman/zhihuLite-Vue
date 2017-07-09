<template>
  <div id="app" style="height: 100%">
    <x-header style="height: 48px;background: #028fd6;">zhihuLite
      <x-icon slot="overwrite-left" type="navicon" size="36" style="fill:#fff;position:relative;top:-7px;left:-8px;" @click="ctrDrawer"></x-icon>
    </x-header>
    <drawer :show.sync="isShow" show-mode="overlay" style="height: calc(100% - 50px);"> <!-- :show.sync什么作用 -->
      <ul slot="drawer" style="" id="sideBar">
        <li @click="$router.push('/home')"  v-on:click="ctrDrawer">首页</li>
        <li v-for="(item,index) in themeLists.others" @click="$router.push('/themeView/'+item.id)" v-on:click="ctrDrawer">{{item.name}}</li>
      </ul>
      <div slot="default">
        <keep-alive exclude="news">
          <router-view></router-view>
        </keep-alive>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { XHeader,Drawer,Tabbar,TabbarItem,Cell } from 'vux'
  export default {
    name: 'app',
    data() {
      return {
        isShow: false,
        themeLists: {}
      }
    },
    methods: {
      ctrDrawer() {
        this.isShow = !this.isShow;
      }
    },
    created() {
      this.ajax.get('api/themes')
        .then(res=>this.themeLists = {...res.data})
        .catch(err=>console.log(err));
    },
    components: {
      XHeader,
      Drawer,
      Tabbar,
      TabbarItem,
      Cell
    },
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body,html{height: 100%}
  #sideBar {
    background: #000;
    height: 100%;
    width: 160px;
    text-align: center;
    li {
      color: #fff;
      height: 1rem;
      font: .5rem/1rem '微软雅黑';
    }
  }

</style>
