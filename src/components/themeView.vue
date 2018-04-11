<template>
    <scroller ref="scroller" height="-46" :lock-x="true" :use-pulldown="true" :pulldown-config="pulldown"  @on-pulldown-loading="refresh">
      <div id="themeView">
        <editors :editors="editors" @imgLoaded="hideAniamte"></editors>
        <panel :list="newsList" type="1"></panel>
      </div>
    </scroller>
</template>
<script>
    import { Panel, Scroller } from 'vux'
    import editors from '@/components/themeEditor'
    import {getNewsByTheme} from '@/common/api/newsList'
    export default {
        data() {
          return {
              newsList: [],
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
          async getData() {
            console.time()
            let data = await getNewsByTheme(this.$route.params.id)
            this.newsList = [];
            this.editors = data.editors;
            for(var item of data.stories){
              this.newsList.push(
                {
                  src: item.images?this.imgFilter(item.images[0]):'http://via.placeholder.com/60x60?text=Vue', // 正常要展示的图
                  // fallbackSrc: 'http://via.placeholder.com/50x50', // 加载图片失败显示的图片
                  title: item.title,
                  url: `/article/${item.id}`,
                  id: item.id
                }
              )
            };     

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
            this.$nextTick(() => {
              this.$refs.scroller.donePulldown()
            });
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
<style scoped lang="less">
 .weui-panel{
   margin-top: 0;
 }
</style>
