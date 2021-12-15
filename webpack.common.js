// Create HTML file to serve the webpack bundle
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Remove all comments from the bundle and prevent creating licence.txt files
const TerserPlugin = require('terser-webpack-plugin');

// Optimize images plugin
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[hash].[ext]',
              outputPath: 'imgs'
            },
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // Ignore errors on corrupted images
              minimizerOptions: {
                plugins: [
                  ['mozjpeg', { quality: 40 }],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Images': path.resolve(__dirname, 'src/assets/imgs/'),
      '@Fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@Global': path.resolve(__dirname, 'src/global/')
    },
  },
}