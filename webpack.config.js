const path = require('path')
// 排除所有node_modules包含的模块
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      name: 'verifyPassword',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-named-capturing-groups-regex']
          }
        }
      }
    ]
  },
  externals: [nodeExternals()]
}
