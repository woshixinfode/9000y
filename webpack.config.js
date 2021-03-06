var path = require('path');
var Promise = require('es6-promise');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: './app/main.js',
    vendor: [
      'jquery',
      'draft-js',
      'animate.css',
      'antd',
      'react-router',
      'react',
      'react-dom',
    ],
  },
  output: {
    path: __dirname,
    filename: '/public/javascripts/bundle.js',
    publicPath: '',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&name=images/[name].[ext]',
    }, {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }],
  },
  plugins: [
    // 把指定文件夹下的文件复制到指定的目录
    // new TransferWebpackPlugin([{
    //   from: './public/public/images/',
    //   to: './public/images/',
    // }]),
    new webpack.optimize.CommonsChunkPlugin('vendor', '/public/javascripts/vendor.js'),
    new HtmlWebpackPlugin({
      template: './app/template.html',
      filename: 'index.html',
      inject: 'body',
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
};
