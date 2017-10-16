# zhihuLite-Vue
create by vue2.0+vuex+axios

# v0.1
## 已完成：
- [x] 首页
- [x] 主题分类列表
- [x] 文章的查看
- [x] 主编列表
## 待优化
- [ ] 路由按需加载
- [x] 图片链接处理方案不够优雅
```javascript
// 解决方案：
// 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
Vue.filter("url",url => url.replace(
  /http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
)
```
- [ ] 主编组件localStorage方案改为vuex
## 待完成
- [ ] 路由切换动画
- [ ] 收藏功能
- [ ] 评论组件
- [ ] 切换日间夜间功能

