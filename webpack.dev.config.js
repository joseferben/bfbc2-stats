const path = require('path');
const webpack = require('webpack');

const base = require('./webpack.config.js');

base.plugins = [
  new webpack.ProvidePlugin({
    riot: 'riot',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

module.exports =  base;
