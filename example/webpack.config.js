module.exports = {
  devtool: "source-map",
  entry: './example/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './example/public/',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
