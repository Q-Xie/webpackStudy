/*
* 输出
* 配置output属性的最低要求是，将它设置为一个对象，包含以下两点：
*   1.输出的文件名
*   2.目标输出目录的绝对路径
* */
const config = {
  output: {
    filename: 'bundle.js',
    path: '/'
  }
}

module.exports  = config

/*
* 多个入口
* 如果配置创建了多个单独的chunk(例如，使用多个入口或使用像CommonsChunkPlugin插件)
* 则应该使用占位符来确保每个文件具有唯一的名称
* */
const config = {
  entry: {
    app: 'app.js',
    search: 'search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}

module.exports = config

/*
* 高级进阶
*   使用CDN和资源hash的复杂实例
* */

const config = {
  output: {
    path: '/home/[hash]',
    publicPath: 'http://cdn.example/assets/[hash]/'
  }
}
module.exports = config
