/* eslint-disable no-console, import/no-extraneous-dependencies */

const webpack = require('webpack');
const express = require('express');
const path = require('path');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./common');
const config = require('./config');

const port = process.env.PORT || config.port;

const serverHost = '0.0.0.0';

const app = express();

const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true,
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000,
});

// 自动刷新
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

const proxyTable = config.proxyTable;

// 接口代理
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

// 能够使用h5的history的api
app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(hotMiddleware);

const staticPath = path.posix.join(config.publicPath, config.assetsPath);

// 使用static作为静态资源文件夹
app.use(staticPath, express.static('./static'));

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log(`==> ✅  Static file server started at http://${serverHost}:${port}`);
});

// 对于所有文件返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.listen(port);

