var path = require('path');
var plugin = require('./plugin.config');

var webpackConfig = {
  entry: {},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].jquery',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  externals: [{
    jquery: {
      root: 'jQuery',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery'
    }
  }],
  watch: true
};

webpackConfig.entry[plugin.name] = './src/index';

module.exports = webpackConfig;
