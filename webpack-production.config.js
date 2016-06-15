const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  entry: [path.join(__dirname, '/src/index.js')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ['', '.js', '.jsx', '.sass', '.css'],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: 'source-map',
  //output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'bundle.js',  //Name of output file
  },
  plugins: [
    //Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false,
      },
    }),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    //Transfer Files
    new ExtractTextPlugin('bundle.css'),

    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname,"src")),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
      },
    ],
  },
}

module.exports = config
