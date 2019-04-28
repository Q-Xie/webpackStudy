/*
* 基本安装
* 首先我们创建一个目录，初始化npm，然后在本地安装webpack，接着安装webpack-cli
* mkdir webpack-demo && cd webpack-demo
* npm init -y
* npm install webpack webpack-cli --save-dev
* */

/*
* 使用一个配置文件，文件名为webpack-config.js
* */
const path = require('path')
const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = config

/*
* NPM脚本
* 我们可以通过配置package.json来添加npm脚本。
* "scripts": {
*   "build": "webpack"
* }
* 在scripts:字段写配置build，那样我们就可以使用npm run build命令来代替我们使用npx的命令了。
* */
