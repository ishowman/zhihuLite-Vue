<template>
    <div @click="passData" id="themeEditor">

      <group class="g">
        <cell-box is-link link="/editor">
          <div slot="default"  >
            主编
            <img class="avatar" v-for="(item, i) in editors" 
              :src="item.avatar | url" :key="i" @load="loaded(i, editors.length)"
            >
          </div>
        </cell-box>
      </group>
    </div>
</template>
<script>
    import { Group, CellBox } from 'vux'
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
          },
          loaded(index, len) {
            this.$emit('imgLoaded', index, len)
          }
        },
        components: {
          Group,
          CellBox,
        }
    }
</script>
<style lang="less" scoped> 
  #themeEditor /deep/ .weui-cells{
    margin-top: 0;
  }
  .avatar{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
    margin-left: 6px;
  }
</style>
