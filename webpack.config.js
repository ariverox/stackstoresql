var path = require('path');
var webpack = require('webpack');

const BROWSER = path.join(__dirname, 'src', 'browser')
module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'eval',
  entry: [
    // necessary for hot reloading with IE:
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/browser/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: BROWSER
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: BROWSER
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: BROWSER
      }, {
        test: /\.scss$/,
        loaders: [
          'style', 'css', 'sass'
        ],
        include: path.join(__dirname, 'src', 'browser', 'styles')
      }
    ]
  }
};
