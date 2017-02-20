const path = require('path');

const base = require('./webpack.config.js');

delete base.devtool;
delete base.devServer;
delete base.plugins;

base.entry = ['./src/tests.js'];
base.output = {
    path: path.join(__dirname, '/app'),
    filename: 'tests.js',
}

module.exports =  base;
