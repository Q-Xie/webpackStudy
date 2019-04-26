/*
* 配置选项
* */
const path = require('path')

module.exports = {
  /*
  * production|development|none
  * */
  mode: 'production',
  /*
  * string: './app/entry.js'
  * array: ['./app/entry0.js', './app/entry1.js']
  * object: {
  *           a: './app/entry0.js'
  *           b: './app/entry1.js'
  *          }
  * */
  entry: './app/entry.js',

}
