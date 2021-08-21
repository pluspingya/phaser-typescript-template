const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?|\.jsx?$/, 
        include: path.join(__dirname, '../src'),
        loader: 'ts-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: /[\\/]node_modules[\\/]]/,
        name: 'vendors',
        chunks: 'all',
        filename: '[name].bundle.js'
      }
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ gameName: 'Epic Checker', template: 'src/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/favicon.ico', to: '' }
      ]
    }),
  ]
}