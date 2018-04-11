<template>
    <div id="editor">
      <group>
        <cell-box v-for="(item, i) in editors" is-link :link="item.url" :key="i">
          <div slot="default">
            <img class="header-img" :src="item.avatar | url">
            <span>{{item.name}}</span>
          </div>
        </cell-box>
      </group>
    </div>
</template>
<script>
    import { Group,CellBox } from 'vux'
    export default {
        data() {
            return {
                editors: []
            }
        },
        created() {
            this.editors = JSON.parse(localStorage.getItem('editors'))
            console.log(this.editors)
        },
        components: {
            Group,
            CellBox
        }
    }
</script>
<style  lang="less">
    .header-img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 10px;
    }   
    
</style>
