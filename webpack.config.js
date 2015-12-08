var precss = require('precss');
var cssnext = require('cssnext');
var clearfix = require('postcss-clearfix');
var prefix = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var normalize = require('postcss-normalize');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function() {
    return [normalize, prefix, precss, cssnext, fontMagician, clearfix];
  }
}