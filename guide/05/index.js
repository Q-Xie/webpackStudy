/*
* 模块热替换
* 模块热替换是webpack提供的最有用的功能之一。它允许在运行时更新各种模块
* 而无需进行完全刷新。
* */

/*
* 启用HMR
* 启用此功能实际上相当简单，而我们要做的，就是更新webpack-dev-server的配置，
* 和使用webpack内置的HMR插件。
* */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'hot webpack'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}


/*
* 通过Node.js API
* 当使用webpack-dev-server和Node.js API时， 不要将dev server选项放在webpack配置对象中，
* 而是在创建选项时，将其作为第二个参数选项 例如：
*   new WebpackDevServer(complier, options)
*  想要启用HMR，还需要修改webpack配置对象
*
*  dev-server.js
* */
const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})






















