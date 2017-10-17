<template>
    <div>
      <swiper :list="imgList" dots-class="dots-m-b" :auto="true"></swiper>
      <panel :list="newsList" type="1"></panel>
    </div>
</template>

<script>
  import { Swiper,Panel } from 'vux'
  import { imgUrl } from '@/common/common'
  export default {
      data() {
          return {
              imgList:[],
              newsList:[],
          }
      },
      created() {
        this.getData()
      },
      methods: {
        getData(){
          this.ajax('/api/news/latest')
            .then(res=>{
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
                    src: item.images[0]?imgUrl(item.images[0]):'http://via.placeholder.com/60x60?text=Vue',
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
