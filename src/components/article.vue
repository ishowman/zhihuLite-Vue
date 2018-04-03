<template>
  <div >
    <div id="article">
      <h1>{{title}}</h1>
      <div v-html="content"></div>
    </div>
    <div id="article-foot">
      <i class="iconfont icon-last" @click="switchArticle(-1)"></i>
      <i  :class="[like ? 'icon-liked' : 'icon-like', 'iconfont']" @click="toggleLike"></i>
      <i class="iconfont icon-msg" ></i>
      <i class="iconfont icon-next" @click="switchArticle(1)"></i>
    </div>
  </div>
</template>

<script>
import {getNewsText, getNewsComment} from '@/common/api/article'
  export default {
      data() {
          return {
              comment: {},
              content: '',
              title: '',
              like: false,
              likeIds: this.$store.state.app.likes, // 这个数据应该放在数据库
              articleIds: this.$store.state.app.ids // 应该使用webStorage实现数据持久化
          }
      },
      watch:{
        '$route': 'getContent'
      },
      created() {        
        this.getContent()
      },
      methods: {
          async getContent(){
            this.like = this.likeIds.indexOf(this.$route.params.id) < 0? false : true  // 先查询是否收藏
            let data = await getNewsText(this.$route.params.id)
            this.content = data.body.replace(/src=\"http:\/\/pic/g, "src=\"https://images.weserv.nl/?url=pic")
            this.title = data.title

          },
          async getComment(){
            let data = await getNewsComment(this.$route.params.id)
            this.comment = {...data}
          },
          switchArticle(mode) {
            let index = this.articleIds.findIndex((val, i, arr) => val == this.$route.params.id ) + mode
            let id = this.articleIds[index]
            if(index >= 0 && index < this.articleIds.length) {
              console.log(id)
              this.$router.push(`${id}`)
            }else {
              alert('没有更多文章了')
            }

          },
          toggleLike() {
            if(this.like) {
              this.likeIds.splice(this.likeIds.findIndex(item => item === this.$route.params.id), 1)
            }else{
              this.likeIds.push(this.$route.params.id)
            }
            this.like = !this.like
          }
      }
   }
</script>
<style>
  @import url(//at.alicdn.com/t/font_569804_zajj9d4idvrhpvi.css);
  #article{ font:14px/22px '微软雅黑';position: absolute;overflow: auto;top: 0;bottom: 40px;left: 0;right: 0;padding: 0 3vw;}
  #article h1{margin: 20px 0;font: bold 20px/30px '微软雅黑';}

  .question-title{margin-bottom: 10px;}
  .view-more{padding-bottom: 10px;}

  .meta {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    color: #b8b8b8;
    margin-bottom: 10px;
  }
  .meta .avatar{vertical-align: bottom;}
  .meta .source-icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  .meta .time {
    float: right;
    margin-top: 2px;
  }
  .content img{width: 100%;}
  .content p, blockquote{margin-bottom: 10px;}
  .external{word-wrap:break-word ;}


  img[src*="zhihu.com/equation"] {
    display: inline-block;
    width: 60px;
    margin: 0 auto;
  }
  #article-foot{
    height: 40px;
    box-shadow: 0 -2px 2px #eee;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>


