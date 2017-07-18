<template>
    <div>
      <swiper :list="imgList" dots-class="dots-m-b" :auto="boolean[0]" :loop="boolean[0]"></swiper>
      <panel :list="newsList" type="1"></panel>
    </div>
</template>

<script>
  import { Swiper,Panel } from 'vux'
  import { imgUrl } from '@/common/common'
  export default {
      data() {
          return {
              data: {},
              imgList:[],
              boolean:[true,false],
              newsList:[],
          }
      },
      activated() {
        this.getData()
      },
      methods: {
        getData(){
          this.ajax('/api/news/latest')
            .then(res=>{
                this.data={...res.data};
                for(var item of res.data.top_stories){
                  this.imgList.push({
                      url: '/article/'+item.id ,
                      img: imgUrl(item.image) ,
                      title: item.title
                  })
                };
                for(var item of res.data.stories){
                  this.newsList.push({
                    url: '/article/'+item.id ,
                    src: imgUrl(item.images[0]) ,
                    desc: item.title
                  })
                };
            })
            .catch(err=>console.log(err))
        }
      },
      components: {
        Swiper,
        Panel
      }
  }
</script>

<style lang="less">
  .vux-img{background-position: center;background-size: 100% 100%;}
  .dots-m-b{bottom:0px!important;}
</style>
