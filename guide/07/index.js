/*
* 生产环境的构建
*
* 配置：
*   开发环境跟生产环境的构建目标差异很大。
*   在开发环境中，我们需要具有更强大的、具有实时重新加载，或热模块替换能力的source map和localserver。
*   在生产环境中，我们的目标是更小的bundle,更轻的source map以及更优化的资源，以改善加载时间。
*
*  虽然，以上我们将生产环境和开发环境作为区分，但我们要遵循不重复原则，保留一个通用的配置。
*  为了将这些配置合并在一起，我们将使用webpack-merge的工具。
*
* 首先我们先安装 webpack-merge
*
*  npm install webpack-merge --save-dev
* */

/*
* 新增几个js文件
* webpack.common.js
* webpack.dev.js
* webpack.prod.js
* */
/*
* webpack.common.js
* */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

/*
* webpack.dev.js
* */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
})

/*
* webpack.prod.js
* */
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin()
  ]
})


/*
* NPM Scripts
*   最后我们需要把scripts重新指向到新配置。我们将npm start定义为开发环境脚本，
*   并使用webpack-dev-server,将npm run build 定义为生产环境脚本。
* */

"start": "webpack-dev-server --open --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"



/*
* source map
*
* 在生产环境中devtool使用source-map选项，而不是开发环境中用到的inline-source-map
* 应为它会增加bundle.js的大小，降低整体的性能。
*
* */


/*
* 指定环境
* 很多library将通过与process.env.NODE_ENV环境变量关联，以决定library中应该引用哪些内容。
* 
* */










