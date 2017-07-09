<template>
    <div>artile</div>
</template>

<script>
  export default {
      data() {
          return {
              data: {},
              comment: {}
          }
      },
      activated() {
          this.getData();
      },
      methods: {
          getData(){
              this.ajax.get('api/news/'+this.$route.params.id)
                .then(res=>this.data={...res.data})
                .catch(err=>console.log(err));
              this.ajax.get('api/story-extra/'+this.$route.params.id)
                .then(res=>this.comment={...res.data})
          }
      }
   }
</script>

<style lang="less">

</style>
