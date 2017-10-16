<template>
    <div @click="passData">
      <group>
        <cell-box is-link link="/editor">
          <div slot="default"  >
            主编
            <img class="header-img" v-for="item in editors" 
              :src="item.avatar | url"
            >
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
        methods: {
          passData() {
            var arr = [];
            for(var item of this.editors){
              arr.push(item)
            }
            localStorage.setItem('editors', JSON.stringify(arr));
          }
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
    margin-left: 6px;
  }
  .weui-cells{
    margin-top: 0;
  }
  .vux-no-group-title{
    margin-top: 0;
  }
</style>
