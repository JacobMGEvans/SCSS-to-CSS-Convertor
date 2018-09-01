const webpack = require('webpack');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //   plugins: [new ExtractTextPlugin('[name][hash].css')],
  entry: [
 // change to scss files. 
  ],
  output: {
    path: `${__dirname}/assets/`,
    filename: 'assets/js/bundle.js'
  },
  devtool: 'source-map', // any "source-map"-like devtool is possible
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 600000,
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'font/fonts[hash]'
            }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './src/css/',
              outputPath: 'css/',
              publicPath: './'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
