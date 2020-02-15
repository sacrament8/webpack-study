const path = require('path')  // node module pathを読み込み
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: "./src/index.js", // webpackのentry pointの設定(module bundleの対象の設定)
  output: {
    filename: 'main.js',   // コンパイル先ファイル名
    path: outputPath       // コンパイル先ファイルのパス
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath // ドキュメントルートの指定
  }
}