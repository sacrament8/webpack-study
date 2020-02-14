const path = require('path')
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: "./src/index.js", // webpackのentry pointの設定(module bundleの対象の設定)
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath // ドキュメントルートの指定
  }
}