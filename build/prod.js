/* eslint-disable */

const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const config = require('./config');

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: TARGET === 'build' ? '"production"' : '"test"',
      },
    }),

    // 清除dist文件夹
    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false,
    }),

    //js多线程压缩插件，比webpack自带的UglifyJsPlugin插件速度更快
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
      },
    }),

    // 自动注入js
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      hash: true,
      filename: 'index.html',
      favicon: './src/favicon.ico',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
      },
    }),

    // 生成模块的hash值，作为模块id
    new webpack.HashedModuleIdsPlugin(),

    // 压缩css
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),

    // 拷贝静态资源
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', config.assetsPath),
        to: config.assetsPath,
        ignore: ['.*'],
      },
    ]),
  ],
};
