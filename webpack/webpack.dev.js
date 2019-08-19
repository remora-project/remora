'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common');

const { PROD_PATH } = require('./path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PROD_PATH,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '**': 'http://localhost:3000'
    },
  },
});
