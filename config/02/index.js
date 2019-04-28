/*
* context
* string
* 基础目录，绝对路径，用于从配置中解析入口起点和loader
* (默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于当前执行路径)
* */
{
  context: path.resolve(__dirname, 'app')
}

/*
* entry
* [string || object || () => string]
*
* 动态加载的模块不是入口起点
* 简单规则：
*   每个HTML页面都有一个入口起点。单页面，一个入口起点。多页面：多个入口起点。
* */
{
  entry: {
    home: './home.js',
    about:'./about.js',
    contact:'./contact.js'
  }
}

/*
* 命名
* 如果传入一个字符串或字符串数组，chunk就会被命名为main，
* 如果传入的是一个对象，则每个键会是一个chunk的名称，该值描述chunk的入口起点。
* */

/*
* 动态入口
* */
{
  entry: () => './demo'
}
