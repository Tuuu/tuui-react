const path = require('path')

module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'), // 防止 windows 与 mac 路径不一致
    library: 'TUUI', // 库的名称
    libraryTarget: 'umd', // 库的模块化定义 common js / amd / umd
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 以 ts/tsx 结尾的文件
        loader: 'awesome-typescript-loader',
      },
      {
        test: /icons.+\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
}
