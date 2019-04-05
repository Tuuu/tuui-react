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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
  externals: { // 外部库配置
    react: { // 四个配置分别对应不同的打包工具
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
}
