/*
* 插件
* 插件是webpack的支柱功能。插件目的在于解决loader无法实现的其他事。
* */

/*
* 剖析
* webpack插件是一个具有apply属性的JS对象。apply属性会被webpack compiler调用
* 并且compiler对象可在整个编译生命周期里访问。
* */

/*
* 用法
* 由于插件可以携带参数/选项。你必须在webpack配置中，向plugins属性传入new实例。
* */
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过npm安装
const webpack = require('webpack') // 访问内置插件
const path = require('path')
const config = {
  entry: 'file.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: '/\.(js|jsx)$/',
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJSPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}
module.exports = config


