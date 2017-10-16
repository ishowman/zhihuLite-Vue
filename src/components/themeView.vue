<template>
    <div id="themeView">
      <!--<p>{{ str | url }}</p>-->
      <cellbox :editors="editors"></cellbox>
      <panel :list="list" type="1"></panel>
    </div>
</template>
<script>
    import { Panel } from 'vux'
    import cellbox from '@/components/themeEditor' // 引入后记得在components引入
    import { imgUrl } from '@/common/common'    
    export default {
        data() {
          return {
              list: [],
              editors: [],
              boolean:[true, false],
              str: 'http://pic1.zhimg.com/0a6456810_m.jpg'
          }
        },
        watch:{
          // '$route'(to,from){
          //   this.getData();
          // },
          '$route': 'getData'
        },
        created() {
          this.getData();
        },
        methods: {
          getData() {
            this.ajax.get('api/theme/'+this.$route.params.id)
              .then(res=>{
                this.list = [];
                this.editors = res.data.editors;
                for(var item of res.data.stories){
                  this.list.push(
                    {
                      src: item.images?imgUrl(item.images[0]):'http://via.placeholder.com/60x60', // 正常要展示的图
                      fallbackSrc: 'http://via.placeholder.com/60x60', // 加载图片失败显示的图片
                      title: item.title,
                      url: `/article/${item.id}`
                    }
                  )
                };
              })
              .catch(err=>console.log(err));
          }
        },
        components: {
          Panel,
          cellbox
        }
    }
</script>
<style scoped>
  .weui-panel{margin-top:0}
</style>
