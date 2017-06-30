<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<drawer :show.sync="isShow" show-mode="push" style="height: 100%;">
      <ul slot="drawer" style="background: lightskyblue;height: 100%;width:200px;text-align: center">
        <li>drawer text1</li>
        <li>drawer text2</li>
        <li>drawer text3</li>
        <li>drawer text4</li>
        <li>drawer text5</li>
      </ul>
      <div slot="default" @click="ctrDrawer">default text</div>
    </drawer>-->
  </div>
</template>

<script>
  import { Drawer } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      //isShow: false
    }
  },
  components: {
    //Drawer
  },
  methods:{
    /*ctrDrawer() {
        console.log(666)
        this.isShow = !this.isShow;
    }*/
  },
  created() {
   /* this.ajax.post('adminsite/upig/queryPigList.do')
      .then(res => console.log(res))
      .catch(err => console.log(err));*/
    /*this.ajax.get('http://www.jianshu.com/mobile/subscriptions/recommended_collections')
      .then(res=>console.log(res))
      .catch(err=>console.log(err));*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.hello{height: 100%}*/
</style>
