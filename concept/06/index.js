/*
* 配置
* 很少webpack配置看起来完全相同。这是因为webpack配置文件是导出一个对象的js文件。
* 此对象，由webpack根据对象定义属性进行解析。
* 因为webpack配置是标准的Node.js CommonJS模块，你可以做到以下事情：
*   1.通过require(..)导入其他文件
*   2.通过require(..)使用npm的工具函数
*   3.使用js控制流表达式，例如?:操作符
*   4.对常用值使用常量或变量
*   5.编写并执行函数来生成部分配置。
* 在适当的时候，使用这些特性：
*   1.在使用webpack命令接口CLI时，访问命令行接口参数
*   2.导出不确定值。
*   3.编写很长的配置（应拆分多个文件）
* */

/*
* 基本配置
* */
const path = require('path')
const config = {
  mode: 'development',
  entry: {
    main: 'entry.js'
  },
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules:[{
      test: '/\.css$/',
      use: 'css-loader'
    }]
  }
}
