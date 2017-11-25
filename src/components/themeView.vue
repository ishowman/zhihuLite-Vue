<template>
    <scroller ref="scroller" height="-46" :lock-x="true" :use-pulldown="true" :pulldown-config="pulldown"  @on-pulldown-loading="refresh">
      <div id="themeView">
        <editors :editors="editors" @imgLoaded="hideAniamte"></editors>
        <panel :list="list" type="1"></panel>
      </div>
    </scroller>
</template>
<script>
    import { Panel, Scroller } from 'vux'
    import editors from '@/components/themeEditor'
    export default {
        data() {
          return {
              list: [],
              editors: [],
              pulldown: this.$store.state.vux.pulldown
          }
        },
        watch:{
          '$route'(to,from){
            this.getData();
            this.$store.commit('updateLoadingStatus', {isLoading: true})
            this.$nextTick(() => {
                this.$refs.scroller.reset({
                  top: 0
                })
                console.timeEnd()
            })
          },
          // '$route': 'getData'
        },
        created() {
          this.getData();
        },
        methods: {
          getData() {
            console.time()
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
          },
          hideAniamte(i, len) {
            console.log(`${i}:${len}`)
            if(i+1 === len){
              this.$store.commit('updateLoadingStatus', {isLoading: false})
            }
          }
        },
        components: {
          Panel,
          editors,
          Scroller
        }
    }
</script>
<style>
  .weui-panel, .weui-cells{margin-top:0!important;}
</style>
