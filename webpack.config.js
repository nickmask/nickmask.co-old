module.exports = {
  entry: './src/index',
  output: {
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192',
        test: /\.sass$/, loader: 'style-loader!sass-loader!sass-loader',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
