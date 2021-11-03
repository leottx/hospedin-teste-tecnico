const path = require('path');
const common = require('./webpack.common' );
const { merge } = require('webpack-merge');

// Clear previous files in the bundle's output path
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
});