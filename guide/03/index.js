/*
* 管理输出
* 随着应用程序的增长，并且一旦开始对文件名使用哈希并输出多个bundle，手动对index.html文件进行管理将变得困难起来。
* */
const path = require('path')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

/*
* 执行npm run build，我们会发现，webpack生成了print.bundle.js跟app.bundle.js.
* 这也是和我们在index.html文件中指定文件名称相对应。
* */

/*
* HtmlWebpackPlugin
* 上面那种配置写法，如果我们更改了一个入口起点的名称，甚至添加一个新的名称。生成的包将被重命名
* 这个时候我们需要自动修改index.html的名字。HtmlWebpackPlugin为我们解决这个需求。
*
* 首先安装插件
*   npm install html-webpack-plugin --save-dev
* */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
}

/*
* 清理/dist文件夹
* 由于不停的npm run build，导致我们的/dist文件夹相当杂乱，webpack会生成文件。
* 我们无法追中到哪些文件是实际在项目中用到的。通常每次构建前清理一下/dist文件夹。
* clean-webpack-plugin是一个比较普及的管理插件。
*
* 安装插件
*   npm install clean-webpack-plugin --save-dev
*
* */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js',
    print: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin('dist')
  ]
}


/*
* Manifest
* 通过配置manifest文件，可以让webpack及其插件知道应该生成哪些文件，对你的模块映射输出到bundle的过程
* 保持追踪。
* 通过使用WebpackManifestPlugin，可以直接将数据提取到一个json文件，以供使用。
* */











