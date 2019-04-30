/*
* tree shaking是一个术语，通常用于描述移除JS上下文中的末引用代码。它依赖于ES6模块系统中的静态结构特性
* 例如：import和export。这个术语和概念实际上市兴起于ES6模块带包工具rollup。
*
* webpack4扩展了这个检测能力。通过package.json的sideEffects属性作为标记，向compiler提供提示。
* */

/*
* 向之前那样打包，会发现并没有引用的代码也打包在bundle中了。这个时候，我们就需要sideEfffectFress了。
* */

/*
* 将文件标记为无副作用(side-effect-free)
*
* 在一个纯粹的ESM模块世界中，识别出哪些文件有副作用很简单。然而我们项目无法达到这种纯度，所以，此时有必要
* 向webpack的compiler提供提示哪些代码是纯粹部分。
*
* 这种方式，是通过package.json中的sideEffects属性来实现的。
* */
{
  "name": 'your-project',
  "sideEffects": false
}

/*
* 如果所有代码都不包含副作用，我们就可以简单地将该属性标记为false。来告知webpack。
* sideEffects: [
*   './src/some-side-effectful-file.js'
* ]
* */

/*
* 压缩输出
* webpack4 开始，可以通过mode配置选项轻松切换压缩输出，只需要设置mode为production就可以了
* */
