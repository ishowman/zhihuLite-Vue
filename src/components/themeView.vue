<template>
    <scroller ref="scroller" height="-46" :lock-x="true" :use-pulldown="true" :pulldown-config="pulldown"  @on-pulldown-loading="refresh">

      <div id="themeView">
        <!--<p>{{ str | url }}</p>-->
        <cellbox :editors="editors"></cellbox>
        <panel :list="list" type="1"></panel>
      </div>
    </scroller>
</template>
<script>
    import { Panel, Scroller } from 'vux'
    import cellbox from '@/components/themeEditor' // 引入后记得在components引入
    export default {
        data() {
          return {
              list: [],
              editors: [],
              pulldown: this.$store.state.vux.pulldown
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
                      src: item.images?this.imgFilter(item.images[0]):'http://via.placeholder.com/60x60?text=Vue', // 正常要展示的图
                      // fallbackSrc: 'http://via.placeholder.com/50x50', // 加载图片失败显示的图片
                      title: item.title,
                      url: `/article/${item.id}`
                    }
                  )
                };
                this.reset() // 每次切换主题，重新回到顶部
              })
              .catch(err=>console.log(err));
          },
          imgFilter(url){ // 解决图片防盗链问题
            return url.replace(/http\w{0,1}:\/\/p/g,
                  'https://images.weserv.nl/?url=p')
          },
          reset() {
            this.$nextTick(() => {
              this.$refs.scroller.reset({
                top: 0
              })
            })
          },
          refresh() {
            this.getData()
          }
        },
        components: {
          Panel,
          cellbox,
          Scroller
        }
    }
</script>
<style>
  .weui-panel, .weui-cells{margin-top:0!important;}
</style>
