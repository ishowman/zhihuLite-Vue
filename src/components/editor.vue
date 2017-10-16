<template>
    <div class="m-t--20">
      <group>
        <cell-box v-for="item in editors" is-link :link="item.url">
          <div slot="default">
            <img class="header-img" :src="imgUrl(item.avatar)">
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
                editors: [],
                arr: [
                    1,2,3
                ]
            }
        },
        created() {
            this.editors = JSON.parse(localStorage.getItem('editors'))
            console.log(this.editors)
        },
        methods: {
            imgUrl(url){
                return url.replace(/http\w{0,1}:\/\/p/g,
                        'https://images.weserv.nl/?url=p')
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
        width: 40px;
        height: 40px;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 10px;
    }    
    .m-t--20{
        margin-top: -20px;
    }
</style>
