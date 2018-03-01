/**
 * File Created: 2018-03-01 14:34
 * Author: xxq (you@you.you)
 * __________________________________________________
 * Last Modified: 2018-03-01 15:06:15
 * Modified By: xxq (you@you.you>)
 * __________________________________________________
 * Copyright - 2018 xnb, xnb
 */
const path = require("path")
const webpack = require("webpack")

module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'axios', 'vue-router', 'vuex']
  },
  output: {
    path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    // 压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}