<template>
    <div id="themeView">
      <!--<p>{{ str | url }}</p>-->
      <cellbox :editors="msg.editors"></cellbox>
      <panel :list="list" type="1"></panel>
    </div>
</template>
<script>
    import { Panel } from 'vux'
    import cellbox from '@/components/themeEditor' // 引入后记得在components引入
    export default {
        data() {
          return {
              msg:{
                  'hip': 'hop'
              },
              list:[],
              boolean:[true, false],
              str: 'http://pic1.zhimg.com/0a6456810_m.jpg'
          }
        },
        watch:{
          /*'$route'(to,from){
            this.fetchData();
          }*/
          '$route': 'getData'
        },
        activated() {
          this.getData();
        },
        methods: {
          getData() {
            this.ajax.get('api/theme/'+this.$route.params.id)
              .then(res=>{
                  this.msg = {...res.data};
                  /*for(var item of res.data.stories){

                  }*/
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
<style lang="less">

</style>
