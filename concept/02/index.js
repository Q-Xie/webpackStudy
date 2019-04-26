/*
* 单个入口语法
* */
const config = {
  entry:{
    main: 'entry/file.js'
  }
}

/*
* 单个入口简写
* */
const config = {
  entry: 'entry/file.js'
}

/*
* 当你向entry传入数组时，将创建多个主入口。在你想要多个依赖文件一起注入
* 并将它们的依赖导向到一个chunk时，传入数组的方式就很有用了。
* */
module.exports = config


/*
* 入口对象语法
* 分离应用程序app和第三方库vendors的入口/
* */
const config = {
  entry:{
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}
/*
*
* */
module.exports = config


/*
* 多页面应用程序
* 使用CommonsChunkPlugin为每个页面的应用程序共享代码创建bundle.
* 由于入口起点增多，多页应用能够服用入口起点之间的打俩那个代码。
* */
const config = {
  entry: {
    pageOne: './pageOne/index.js',
    pageTwo: './pageTwo/index.js',
    pageThree: './pageThree/index.js'
  }
}

/*
* 根据经验，每个HTML文档只是用一个入口
* */
module.exports = config


