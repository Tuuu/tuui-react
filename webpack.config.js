const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'), // 防止 windows 与 mac 路径不一致
    library: 'TUUI', // 库的名称
    libraryTarget: 'umd', // 库的模块化定义 common js / amd / umd
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 以 ts/tsx 结尾的文件
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TUUI - React',
      template: 'index.html',
    }),
  ],
}
