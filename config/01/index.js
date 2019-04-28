/*
* 配置选项
* */
const path = require('path')

module.exports = {
  /*
  * production|development|none
  * */
  mode: 'production',
  // mode: 'development',
  // mode: 'none',


  /*
  * string: './app/entry.js'
  * array: ['./app/entry0.js', './app/entry1.js']
  * object: {
  *           a: './app/entry0.js'
  *           b: './app/entry1.js'
  *          }
  * 应用程序从这里开始
  * webpack开始打包
  * */
  entry: './app/entry.js',
  // entry: ['./app/entry01.js', './app/entry02.js'],
  // entry: {
  //   a: './app/entry01.js',
  //   b: './app/entry02.js'
  // },

  /*
  * 配置webpack如何输出结果的相关选项
  * */
  output: {
    /*
    * 所有输出文件的目标路径，必须是绝对路径
    * （使用Node的path模块)
    * */
    path: path.resolve(__dirname, 'dist'), // string

    /*
    * 输出解析文件的目录，url相对于HTML页面
    * */
    publicPath: '/assets', // string

    /*
    * 导出库(exported library)的名称
    * */
    library: 'MyLibrary', // string

    /*
    * 导出库(exported library)的类型
    * */
    libraryTarget: 'umd', // 通用模块定义

    /*
* -------------高级输出配置----------------------------------------*
    * */

    /*
    * 在生成代码时，引入相关的模块，导出，请求等有帮助的路径信息
    * */
    pathinfo: true,  // boolean

    /*
    * 附加分块的文件模板，
    * */
    chunkFilename: '[id].js', //
    // chunkFilename: '[chunkkhash].js', // 长效缓存

    /*
    * 用于加载分块的JSONP函数名
    * */
    jsonpFunction: 'myWebpackJsonp', // string

    /*
    * source map位置的文件名模块
    * */
    sourceMapFilename: '[file].map', // string
    sourceMapFilename: 'sourcemaps/[file].map', // string


    /*
    * devtool中模块的文件名模块
    * */
    devtoolModuleFilenameTemplate: 'webpack', // string

    /*
    * devtool中模块的文件名模块（用于冲突）
    * */
    devtoolFallbackModuleFilenameTemplate: 'webpack', // string

    /*
    * 在UMD库中使用命名的AMD模块
    * */
    umdNamedDefine: true, // boolean

    /*
    * 指定运行时如何发出跨域请求问题
    * */
    crossOriginLoading: 'use-credentials', // 枚举
    // crossOriginLoading: 'anonymous',
    // crossOriginLoading: false,


    /*
*-------------- 专家级输出配置（自行承担风险）----------------------------*
    * */
    /*
    * 为这些模块使用1：1映射SourceMaps
    * */
    devtoolLineToLine: {
      test: /\.jsx$/
    },

    /*
    * HMR 清单的文件模块名
    * */
    hotUpdateMainFilename: '[hash].hot-update.json', // string

    /*
    * HMR分块的文件名模块
    * */
    hotUpdateChunkFilename: '[id].[hash].hot-update.js', // string

    /*
    * 包内前置式模块资源具有更好可读性
    * */
    sourcePrefix: '\t' // string

  },

  /*
  * 关于模块配置
  * */
  module: {
    rules: [
      // 模块规则(配置 loader,解析器等选项)
      /*
      * 这里是匹配条件，每个选项都接收一个正则表达式或字符串
      * test和include具有相同的作用，都是必须匹配选项
      * exclude是必不匹配选项（优先于test和include）
      * 最佳实践：
      *   只在test和文件名匹配中使用正则表达式
      *   在include和exclude中使用绝对路径数组
      *   尽量避免在exclude，更倾向于使用include
      * */
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude:[
          path.resolve(__dirname, 'app/demo-files')
        ],
        /*
        * issuer条件（导入源）
        * */
        issuser: {
          test,
          include,
          exclude
        },
        /*
         * 标识应用这些规则，及时规则覆盖（高级选项）
         */
        enforce: 'pre',
        // enforce: 'post'
        /*
        * 应该应用的loader，它相对上下文解析
        * 为了更清晰，-loader后缀在webpack中不再是可选
        * */
        loader: 'babel-loader',
        /*
        * loader可选项
        * */
        options: {
          presets: ['es2015']
        }
      }, {
        test: /\.html$/,
        use: [
          // 应用多个loader和选项
          'htmllint-loader',
          {
            loader: 'html-loader',
            options: {

            }
          }
        ]
      },
      {
        /*
        * 值使用这些嵌套规则之一
        * */
        oneOf: [/*....*/]
      },
      {
        /*
        * 使用所有这些嵌套规则（合并可用条件）
        * */
        rules: [/**/]
      },
      /*
      * 仅当所有条件都匹配是才匹配
      * */
      {
        resource: { and: [/*条件*/]}
      },
      /*
      * 任意条件匹配时匹配
      * */
      {
        resource: { or: [/* 条件 */]}
      },
      {
        resource: []
      },
      /*
      * 条件不匹配时匹配
      * */
      {
        resource: {
          not: ''/*条件*/
        }
      }
    ],

    /*
*------------------高级模块配置--------------------------
    * */
    /*
    * 不解析这里的模块
    * */
    noParse: ['/special-library\.js$']
  },

  /*
  * 解析模块请求的选项
  * （不适用于对loader的解析）
  * */
  resolve: {
    /*
    * 用于查找模块的目录
    * */
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    /*
    * 使用扩展名
    * */
    extensions: ['.js', '.json', '.jsx', '.css'],

    /*
    * 模块别名列表
    * */
    alias: {
      /*
      * 起别名
      * */
      'module': 'new-module',
      'only-module': 'new-module',
      'module': path.resolve(__dirname, 'app/third/module.js')

    },
    alias: [{
      /*
      * 旧请求
      * */
      name: 'module',
      /*
      * 新的请求
      * */
      alias: 'new-module',
      /*
      * 如果true, module是别名
      * 如果false, module/inner/path也是别名
      * */
      onlyModule: true
    }],
    /*
* --------------------------高级解析选项-------------------------------
    * */

    /*
    * 遵循符号链接(symlinks)到新位置
    * */
    symlinks: true,

    /*
    * 从package描述中读取文件
    * */
    descriiptionFiles: ['package.json'],

    /*
    * 从描述文件中读取的属性
    * 当请求文件夹时
    * */
    mainFields: ['main'],

    /*
    * 从描述文件中读取属性
    * 在对此package的请求起别名
    * */
    aliasFields: ['browser'],


    /*
    * 如果true, 请求必不包括扩展名、
    * 如果false, 请求必包括扩展名
    * */
    enforceExtension: false,

    /*
    * 类似extensions/enforceExtension, 但是用模块名替换文件
    * */
    moduleExtensions: ['-module'],
    enforceModuleExtension: false,


    /*
    * 为解析的请求启用缓存
    * 这是不安全，因为文件夹结构可能会改动
    * 但是性能改善是很大的
    * */
    unsafeCache: true,
    unsafeCache: {},
    cachePredicate: (path, request) => true,
    plugins: [
      /*---ß*/
    ]
  },

  /*
  *
  * */
  performace: {
    hints: 'warning', // 枚举
    maxASSETSIZEro: 2000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型 （以字节为单位）
    assetFilter: function (assetFilename) {
      /*
      * 提供资源文件名的断言函数
      * */
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },

  /*
  * 通过在浏览器调试工具中添加元信息，增强调试
  * 牺牲了构建速度的source-map是最详细的
  * */
  devtool: 'source-map',

  /*
  * webpack的主目录
  * entry和module.rules.loader选项
  * 相对于此目录解析
  * */
  context: __dirname,  // string (绝对路径)

  /*
  * 包(bundle)应该运行的环境
  * 更改块加载行为和可用模块
  * */
  target: 'web', // 枚举

  /*
  * 不要遵循或者打包这些模块，而是在运行时从环境中请求他们
  * */
  externals: ['react', /^@angular\//],

  /*
  * 精确控制要显示的bundle信息
  * */
  stats: 'error-only',

  /*
  *
  * */
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },

  /*
  * 附加插件列表
  * */
  plugins: [
    /*
    * 插件
    * */
  ],

/*
* ---------------------高级选项--------------------*
* */

  /*
  * 独立解析的loader
  * */
  resolveLoader: {
    /*
    * 等同于resolve
    * */
  },

  /*
  * 限制并行处理模块的数量
  * */
  parallelism: 1, // number

  /*
  * 捕获时机信息
  * */
  profile: true, // boolean

  /*
  * 在第一个错误出错时抛出，而不是无视错误
  * */
  bail: true,

  /*
  * 禁用/启用缓存
  * */
  cache: false,

  /*
  * 启用观察
  * */
  watch: true,


  /*
  * 启用轮训观察模式
  * 必须用在不通知更改的文件系统中
  * */
  watchOptions: {
    /*
    * 将多个更改聚合到单个重构建
    * */
    aggregateTimeout: 1000,
    poll: true,
    poll: 500 // 间隔单位ms
  },

  node: {
    console: false,
    global: true,
    process: true,
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    setImmediate: true
  },
  recordsPath: path.resolve(__dirname, 'build/records.json'),
  recordsInputPath: path.resolve(__dirname, 'build/records.json'),
  recordsOutPath: path.resolve(__dirname, 'build/records.json')

}

























































































