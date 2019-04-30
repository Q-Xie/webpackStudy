/*
* tree shaking是一个术语，通常用于描述移除JS上下文中的末引用代码。它依赖于ES6模块系统中的静态结构特性
* 例如：import和export。这个术语和概念实际上市兴起于ES6模块带包工具rollup。
*
* webpack4扩展了这个检测能力。通过package.json的sideEffects属性作为标记，向compiler提供提示。
* */
