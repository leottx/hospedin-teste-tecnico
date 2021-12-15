const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      { 
        test: /\.css$/i,
        use: [ 
          "style-loader", // 3. Inject styles in the DOM
          {
            loader: "css-loader", // 2. Compile css into commonJS
            options: {
              modules: false,
            },
          },
        ],
      },
    ]
  }
});