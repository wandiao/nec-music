/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: {
    app: [
      './build/dev-client.js',
    ],
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),

    // 热替换模块插件，
    new webpack.HotModuleReplacementPlugin(),

    // 美化报错提示
    new FriendlyErrorsPlugin(),

    // 报错停止变异
    new webpack.NoEmitOnErrorsPlugin(),

    // 自动注入js
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      hash: true,
      filename: 'index.html',
      favicon: './src/favicon.ico',
      inject: 'body',
    }),
  ],
};
