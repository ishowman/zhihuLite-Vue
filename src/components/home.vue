<template>
    <div>home</div>
</template>

<script>
  export default {
      data() {
          return {
              data: {}
          }
      },
      activated() {
        this.getData()
      },
      methods: {
        getData(){
          this.ajax('/api/news/latest')
            .then(res=>this.data={...res.data})
            .catch(err=>console.log(err))
        }
      }
  }
</script>

<style lang="less">

</style>
