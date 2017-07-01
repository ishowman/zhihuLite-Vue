<template>
    <div>comment</div>
</template>

<script>
  export default {
      data() {
          return {
              data: {}
          }
      },
      activated() {
        this.getData();
      },
      methods: {
          getData() {
              let id = this.$route.params.id;
              this.ajax.get('api/story/'+id+'/long-comments')
                .then(res=>this.lComments = {...res.data})
                .catch(err=>console.log(err));
              this.ajax.get('api/story/'+id+'/short-comments')
                .then(res=>this.sComments = {...res.data})
                .catch(err=>console.log(err));
          }
      }

  }
</script>

<style lang="less">

</style>
