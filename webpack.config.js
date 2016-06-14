var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    "main": "./src/main.js"
  },
  output: {
    path: "./app/js",
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src/')
    ]
  },
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    loaders: [
      {
        test: /.(gif|jpg|png)(\?[a-z0-9=\.]+)?$/,
        loader: 'url?name=../img/[name].[ext]&limit=100000'
      },
      {
        test: /.(woff2?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url?name=../font/[name].[ext]&limit=100000'
      },
      {
        test: /\.json$/,
        loaders: 'json'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
    ]
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', ['electron', 'screen', 'remote']),
    new WebpackNotifierPlugin({title: 'Webpack'}),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
  ],
  devtool: "#eval"
}
