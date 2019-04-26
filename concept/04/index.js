/*
* loader
* loader 用于模块的源码进行转换。loader可以使你在import或者加载模块时预处理文件。
* 因此，loader类似于其他构件工具中的任务(task)。loader可以将文件从不同语言转换成js,
* 或将内联的图像转换为data URL.loader设置允许你直接在js模块中import CSS文件。
* */

/*
* 你可以使用loader告诉webpack加载css文件，或者将TS转换为js。
* 为此，首先得安装相对应的loader
* npm install css-loader --save-dev
* npm install ts-loader --save-dev
* */
const  config = {
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.ts$/, use: 'ts-loader'}
    ]
  }
}
module.exports = config

/*
* 使用loader
*   有三种使用laoder的方法：
*     1.配置（推荐):在webpack.config.js文件中指定loader.
*     2.内联：在每个import语句中显示指定loader
*     3.CLI:在shell命令中指定它们。
* */

/*
* 配置
* module.rules允许你在webpack配置中指定多个loader,这是展示loader的一种简明方式。
* 并有助于代码简洁，同时让你对各个loader有个全局概览
* */
const config = {
  module: {
    rules: [
      {
        test: '/\.css$/',
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
module.exports = config

/*
* 内联
* 可以在import语句或任何等效于import方式中指定loader，使用!将资源中的loader分开。
* 分开的每隔部分都相对于当前目录解析
* */
import Style from 'style-loader!css-loader?modules!./styles.css'


/*
* CLI
* 你也可以通过CLI使用loader
*   webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader
* 这会对.jade文件使用jade-loader, 对.css文件使用style-loader和css-loader
* */

/*
* loader特性
*   1.loader支持链式传递。能够对资源使用流水线。一组链式的loader将按照相反的顺序执行。
*   loader链中的第一个loader返回值给下一个loader。在最后一个loader,返回webpack所预期的js
*   2.loader可以是同步的，也可以是异步的
*   3.loader运行在node中，并能够执行任何可能的操作
*   4.loader接收查询参数，用于loader传递配置。
*   5.loader也能够使用options对象进行配置
*   6.除了使用package.json常见的main属性，还可以将普通的npm模块导出为loader.做法是在package.json里定义一个loader字段
*   7.常见可以为loader带来更多特性
*   8.loader能够产生额外的任意文件
* */

/*
* 解析loader
* loader遵循标准的模块解析，多数情况下，loader将从模块路径（通常认为是npm install, node_module）解析。
* loader模块需要导出为一个函数，并且使用node.js兼容的js编写。通常使用npm进行管理，但也可以将自定义loader
* 作为应用程序中的文件。
* */






































































