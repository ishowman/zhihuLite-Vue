<template>
    <scroller ref="scroller" height="-46" lock-x use-pulldown :pulldown-config="pulldown" @on-pulldown-loading="update"
      :use-pullup="true" :pullup-config="pullup" @on-pullup-loading="loadMore">
      <div id="home">
        <swiper :list="slider" dots-class="dots-m-b" :auto="true" :loop="true"></swiper>
        <panel :list="newsList" type="1"></panel>
      </div>
    </scroller>
</template>

<script>
  import { Swiper,Panel, Scroller } from 'vux'
  import { imgUrl } from '@/common/common'
  import {getLatestNews, getNewsByDate} from '@/common/api/newsList'
  export default {
      data() {
          return {
              slider:[],
              newsList:[],
              pulldown: this.$store.state.vux.pulldown,
              pullup: this.$store.state.vux.pullup,
              date: new Date(),
              // date: 1369031898790, // 20130520对应的毫秒数
              pullupSwitcher: true
          }
      },
      created() {
        this.getData()
      },
      methods: {
        async getData(){
          let data = await getLatestNews()
          console.log('data', data)
          for(var item of data.top_stories){
            this.slider.push({
                url: `/article/${item.id}`,
                img: imgUrl(item.image) ,
                title: item.title
            })
          };
          for(var item of data.stories){
            this.newsList.push({
              url: `/article/${item.id}` ,
              src: item.images[0]? imgUrl(item.images[0]):'http://via.placeholder.com/60x60?text=Vue',
              desc: item.title,
              id: item.id
            })
          };
          
        },
        update() { // 下拉刷新：获取最新的数据，不同于刷新页面会销毁和重新加载路由
          this.slider = [],
          this.newsList = [];
          this.getData();
          this.$nextTick(() => {
            this.$refs.scroller.donePulldown()
          });
        },
        async loadMore() { // 上拉加载更多数据
          // 最早有数据的日期：20130520
          let lastDay = this.getLastDay();
          let data = await getNewsByDate(lastDay);

          if(!data.stories){
            // 这里提示下没有数据
            this.$refs.scroller.disablePullup()
            return;
          }
          for(var item of data.stories){
            this.newsList.push({
              url: '/article/' + item.id ,
              src: item.images[0]? imgUrl(item.images[0]):'http://via.placeholder.com/60x60?text=Vue',
              desc: item.title,
              id: item.id
            })
          };
            
          this.$nextTick(() => {
          // 更新视图后，将date替换为上次获取数据的日期
            this.date = this.date - 1000*60*60*24
            this.$refs.scroller.donePullup()
          });
        },
        getLastDay() {
          let time = this.date - 1000*60*60*24,
              lastDay = new Date(time),
              year = lastDay.getFullYear(),
              month = lastDay.getMonth()>8? lastDay.getMonth()+1:'0'+(lastDay.getMonth()+1),
              day = lastDay.getDate()>9? lastDay.getDate():'0'+lastDay.getDate();
          return year +''+ month +''+ day;
        }
      },
      components: {
        Swiper,
        Panel,
        Scroller
      }
  }
</script>

<style lang="less" scoped>
  .weui-panel{margin-top: 0;}
  .vux-img{background-position: center;background-size: 100% 100%;}
  .dots-m-b{bottom:0px;}
</style>
