/*
* 构建目标
* 因为服务器和浏览器代码都可以用JS编写，所以webpack提供了多种构建目标，你可以在webpack配置中设置
*
* */
/*
* 用法
* */
module.exports = {
  target: 'node'
}

/*
* 多个target
* 尽管webpack不支持向target传入多个字符串，但你可以通过打包两份分离的配置来创建同构的库
* */
const path = require('path')
const serverConfig = {
  target: 'node',
  entry: {
    main: 'entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'node.js'
  }
}
const clientConfig = {
  target: 'web',
  entry: {
    main: 'entry.js'
  },
  output: {
    filename: 'bundle,js',
    path: '.'
  }
}
module.exports = [serverConfig, clientConfig]
