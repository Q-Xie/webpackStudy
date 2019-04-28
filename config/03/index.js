/*
* 模块
* * */

/*
* module.noParse
* 防止webpack解析那些任何与给定正则表达式向匹配的文件。忽略的文件中
* 不应该包含import, require, define的调用，或任何其他导入机制。
* */
{
  noParse: function (content) {
    return /jquery|lodash/.test(content)
  }
}

/*
* module.rules
* 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。
* 这些规则能够对模块应用loader，或修改解析器
* */
