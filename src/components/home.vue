<template>
    <div>
      <swiper :list="imgList" dots-class="dots-m-b" :auto="boolean[0]" :loop="boolean[0]"></swiper>
    </div>
</template>

<script>
  import { Swiper } from 'vux'
  import { imgUrl } from '@/common/common'
  export default {
      data() {
          return {
              data: {},
              imgList:[],
              boolean:[true,false]
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
                for(var i of res.data.top_stories){
                  this.imgList.push({
                      url: '/themeView/'+i.id ,
                      img: imgUrl(i.image) ,
                      title: i.title
                  })
                }
            })
            .catch(err=>console.log(err))
        }
      },
      components: {
        Swiper
      }
  }
</script>

<style lang="less">
  .vux-img{background-position: center;background-size: 100% 100%;}
  .dots-m-b{bottom:0px!important;}
</style>
