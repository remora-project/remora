'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common');

const { PROD_PATH } = require('./path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PROD_PATH,
    proxy: {
      '**': 'http://localhost:3000'
    },
  },
});
