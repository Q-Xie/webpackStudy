/*
* 使用source map
* 当webpack打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
* 为了更容易追踪错误和精工，js提供了source map功能。将编译后的代码映射回
* 原始源代码。
* */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'development'
    })
  ],
  devtool: 'inline-source-map'
}

/*
* 选择一个开发工具
* 每次编译期待代码时，都要手动运行npm run build就会变得很麻烦。
* webpack中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
*   1.webpack's Watch Mode
*   2.webpack-dev-server
*   3.webpack-dev-middleware
* 多数场景中，你可能需要使用webpack-dev-server。
* */

/*
* 使用观察者模式
* 你可以指示webpack "watch"依赖图中的所有问价以进行更改。如果其中一个文件被更新，代码将
* 从新编译，所以你不必手动运行整个构建。
* 在package.json中配置
* */
"scripts": {
  "watch": "webpack --watch"
}
/*
* 现在，你可以在命令行中运行npm run watch。就会看到webpack编译代码，然而却不会退出.
* 唯一的去电就是：为了看到修改后的实际效果，你需要刷新浏览器。
* */


/*
* webpack-dev-server
* webpack-dev-server为你提供一个简单的web服务器，并且能够实时重新加载。
*
* npm install webpack-dev-server --save-dev
*
*
* */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

/*
* 根据上面的配置完成后，需要在localhost:8080下建立 服务。将dist目录下的文件
* 作为可以访问的文件
* 在package.json文件下创建一个脚本
* */
"script": "webpack-dev-server --open"


/*
* 使用webpack-dev-middleware
*
* webpack-dev-middleware是一个容器，它可以把webpack处理后的文件传递给一个服务器。
* webpack-dev-server在内部使用了它。同时它也可以作为一个单独的包来使用，以便进行
* 更多的需求。
*
* npm install express webpack-dev-middleware --save-dev
* */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugi = require('clean-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}

/*
* publicPath也会在服务器脚本用到，以确保文件资源能够在http:localhost:3000下正确访问。
* 下一步就是设置express 服务器
*
* server.js
* */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack-config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n')
})

/*
* 最后再添加一个npm srcipt以使我们方便使用
* */
"server": "node server.js"



























