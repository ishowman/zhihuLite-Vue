<template>
  <div id="app" style="height: 100%">
    <x-header style="height: 50px;">zhihuLite
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click="ctrDrawer"></x-icon>
    </x-header>
    <drawer :show.sync="isShow" show-mode="overlay" style="height: calc(100% - 50px);">
      <ul slot="drawer" style="" id="sideBar">
        <!--<li>drawer text1</li>
        <li>drawer text2</li>
        <li>drawer text3</li>
        <li>drawer text4</li>
        <li>drawer text5</li>-->
        <li v-for="(item,index) in themeLists.others" @click="$router.push('/news')">{{item.name}}</li>
      </ul>
      <div slot="default">
        <keep-alive>
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
        console.log(this.themeLists)
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
