const common  = require('./webpack.common')
const merge = require('webpack-merge')

const config = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map'
}

module.exports = merge(common, config)
