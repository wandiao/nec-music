// 配置信息

const path = require('path');

module.exports = {
  build: path.join(__dirname, '../dist'),
  publicPath: '/',
  assetsPath: 'static',
  port: 3000,
  proxyTable: {},
};