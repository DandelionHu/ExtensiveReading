'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//测试环境ip配置
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.1.8/api"',
})
