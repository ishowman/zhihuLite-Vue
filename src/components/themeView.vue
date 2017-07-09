<template>
    <div>
      <panel :header="header" :list="list" type="1"></panel>
    </div>
</template>
<script>
  import { Panel,Group,Cell } from 'vux'
    export default {
        data() {
          return {
              data:{},
              header:'主编&nbsp;&nbsp;<img src="https://images.weserv.nl/?url=pic2.zhimg.com/d3b31fa32_m.jpg" class="header-img"/>',
              //header:'<group><cell title="this is title" value=" I value"></cell></group>',
              list:[]
          }
        },
        watch:{
          /*'$route'(to,from){
            this.fetchData();
          }*/
          '$route': 'getData'
        },
        created() {
          this.getData();
        },
        methods: {
          getData() {
            this.ajax.get('api/theme/'+this.$route.params.id)
              .then(res=>{
                  this.data = {...res.data};
                  for(var item of res.data.stories){

                  }
              })
              .catch(err=>console.log(err));
          },
          print() {
            console.log(this.data)
          }
        },
        components: {
          Panel,
          Group,
          Cell
        }
    }
</script>
<style lang="less">
  .header-img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
  }
</style>
