<template>
    <div>
      <group>
        <cell-box is-link link="/editor">
          <div slot="default"  >
            主编&nbsp;&nbsp;
            <img class="header-img" v-for="item in editorList" :src="item.avatar | url">
            <!--<img src="http://tva1.sinaimg.cn/crop.0.1.178.178.180/835c9af2gw1e8bqfmdv5xj205005074r.jpg" class="header-img"/>
            <img src="https://images.weserv.nl/?url=pic2.zhimg.com/d3b31fa32_m.jpg" class="header-img"/>-->
          </div>
        </cell-box>
      </group>
    </div>
</template>
<script>
    import { Group,CellBox } from 'vux'
    import { imgUrl } from '@/common/common'
    export default {
        props:[ 'editors' ],
        data() {
            return {
                editorList : this.editors,
            }
        },
        activated() {
//            console.log(this.editorList)
        },
        computed() {

        },
        components: {
          Group,
          CellBox
        }
    }
</script>
<style scoped>
  .header-img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .weui-cells{
    margin-top: 0;
  }
  .vux-no-group-title{
    margin-top: 0;
  }
</style>
