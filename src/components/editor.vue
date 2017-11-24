<template>
    <div>
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
<style scoped>
    .header-img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 10px;
    }    
    /* .m-t--20{
        margin-top: -20px;
    } */
</style>
