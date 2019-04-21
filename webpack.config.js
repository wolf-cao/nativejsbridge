const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const vConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    port: 8080,
    host: '0.0.0.0'
  },
  entry: './src/index.js',
  output: {
    filename: 'xxxxxjsapi.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new vConsolePlugin({
      enable: true
    }),
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'api',
      filename: 'index.html',
      template: './api.html',
      inject: true
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
