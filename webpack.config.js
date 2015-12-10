var precss = require('precss');
var cssnext = require('cssnext');
var clearfix = require('postcss-clearfix');
var prefix = require('autoprefixer');
var fontMagician = require('postcss-font-magician');
var normalize = require('postcss-normalize');
var postcssImport = require('postcss-import');

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
        loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  postcss: function() {
    return [
      postcssImport,
      normalize,
      prefix,
      precss,
      cssnext,
      fontMagician,
      clearfix
    ];
  }
}