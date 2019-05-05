/*
* 代码分离
* 代码分离是webpack中最引人注目的特性之一。此特性能够把代码 分离到不同的bundle中，然后按需加载。
* 代码分离可以用于获取更小的bundle,以控制资源加载优先级，如果使用合理，会极大影响加载时间。
* 三种代码分离的方法：
*   1.入口起点，使用entry配置手动分离代码。
*   2.防止重复，使用CommonsChunkPlugin去重合分离chunk.
*   3.动态导入，通过模块的内联函数调用来分离代码。
* */

/*
* 入口起点
* 这是最简单的方式，不过手动配置比较多。就是在entry中配置多一个入口
* */
/*
* another-module.js
* */
import _ from 'lodash'
console.log(
  _.join(['another', 'module', 'lodash'], '')
)

/*
* webpack.config.js
* */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'code splitting'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

/*
* 这个方法有一些问题：
*   1.如果入口chunks之间包含重复的模块，哪些重复模块会被引入到各个bundle中，
*   2.这种发那个发不够灵活，并且不会将核心应用程序逻辑 进行动态拆分代码。
* */

/*
* 防止重复
* CommonsChunkPlugin插件可以将公共的依赖模块提取到已有的入口chunk中，或者提取到一个新生成的chunk.
* 让我们使用这个插件，将之前的实例中重复的lodash模块去掉：
* */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共bundle 的名称
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

/*
* 一些对代码分离 有用的插件和loaders
* 1.ExtractTextPlugin 用于CSS从主应用程序中分离。
* 2.bundle-loader 用于分离代码和延迟加载生成bundle
* 3.promise-loader 类似于bundle-loader，但使用的是promise.
*
* CommonsChunkPlugin插件还可以通过显示的vendor chunks功能，从应用程序代码中分离vendo模块。
* */


/*
* 动态导入
* 当设计到动态代码拆分时，webpack提供了两个类似的技术。
* 第一种：也是优先选择的方式是，使用符合ES提案的import语法
* 第二种：则是使用webpack特定的require.ensure。
* */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      TITLE: 'Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共bundle的名称
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}






























