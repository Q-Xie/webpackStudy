/*
* 在webpack出现之前，前端开发人员会使用grunt和gulp等工具来处理资源，并且它们从/src文件夹移动到/dist或/build目录中。
* 同样方式也被用于JS模块，但webpack将动态打包所有依赖向。
* */

/*
* 加载CSS
* 为了从JS模块中import一个CSS文件。你需要在module配置
* 安装并添加style-loader和css-loader
* npm install style-loader css-loader --save-dev
* */

const path = require('path')

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
module.exports = config
/*
* webpack根据正则表达式，来确定应该查找那些文件，就并且将其提供给指定的loader。
* 在这种情况下，以.css结尾的全部文件都将被提供给style-loader和css-loader。
* */

/*
* 加载图片
* 可以使用file-loader将图片内容混合到CSS中
* npm install file-loader --save-dev
* */

const path = require('path')
const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      }
     ]
  }
}

module.exports = config

/*
* 加载字体
* file-loader和url-loader可以接受并加载任何文件，然后将其输出到构建目录。
* 也就是说我们可以将它们用于任何类型文件当中，包括字体。
*
* */
const path = require('path')

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}


/*
* 加载数据
* 此外还可以加载一些有用的资源还有数据，例如JSON文件等等。类似于NodeJS,JSON支持
* 实际上市内置的。也就是说直接import Data from './data.json'默认将正常运行。
* 要导入CSV、TSV和XML，你可以使用csv-loader和xml-loader。
*
* npm install csv-loader xml-loader --save-dev
* */

const path = require('path')
const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}

/*
* 在使用d3等工具来实现某些数据可视化时，预加载数据会非常有用。我们可以不用再发送ajax请求于运行时解析数据。
* 而是在构建过程中将其提前载入并打包到模块中，以便浏览器加载模块后，可以立即从模块中解析数据。
* */


/*
* 全局资源
* 上述所有内容中最出色之处是，以这种方式加载资源，你可以更直观的方式将模块和资源结合在一起。
* 无需要依赖于含有全部资源的/assets目录，而是将资源与代码组合在一起。
* */

















