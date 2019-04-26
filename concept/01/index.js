/*
* webpack四个核心概念：
*   1.入口(entry)
*   2.输出(output)
*   3.loader
*   4.插件(plugin)
*  1.入口
*   入口起点，指示webpack应该使用那些模块，来未做构建起内部依赖图的开始。
*  2.出口
*    出口属性告诉webpack在哪里输出它所创建的bundles,以及如何命名这些文件。默认值为./dist
*  3.loader
*     loader让webpack能够去处理那些非js文件(webpack自身只理解js)
*  4.插件
*   loader被用于转换某些类型模块，而插件则可以用于执行范围更广的任务。
*  5.模式
*   可以通过选择development或production之中的一个，来设置mode参数。
* */
