/* eslint-disable */

const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const development = require('./dev');
const production = require('./prod');
const config = require('./config');

const TARGET = process.env.npm_lifecycle_event;

function assetsPath(_path) {
  return path.posix.join(config.assetsPath, _path);
}

const VENDOR = [
  'react',
  'react-dom',
];

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
    vendor: VENDOR,
  },

  output: {
    filename: assetsPath('js/[name].[hash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js'),
    path: config.build,
    publicPath: config.publicPath,
  },

  plugins: [
    // css 单独打包
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),

    //提取公共代码，单独打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: assetsPath('js/vendor.[hash].js'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.less', '.json'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require('eslint-friendly-formatter'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.less$/,
        exclude: /^node_modules$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};

if (TARGET === 'start') {
  module.exports = merge(common, development);
}

if (TARGET === 'build') {
  module.exports = merge(common, production);
}