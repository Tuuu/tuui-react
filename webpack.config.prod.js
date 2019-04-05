const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'production',
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
})
