<template>
    <div @click="print">this is news</div>
</template>
<script>
    export default {
        data() {
          return {
              data:{}
          }
        },
        watch:{
          /*'$route'(to,from){
            this.fetchData();
          }*/
          '$route': 'fetchData'
        },
        created() {
          this.getData();
        },
        methods: {
          getData() {
            this.ajax.get('api/theme/'+this.$route.params.id)
              .then(res=>this.data = {...res.data})
              .catch(err=>console.log(err));
          },
          print() {
            console.log(this.data)
          }
        }
    }
</script>
<style>
</style>
