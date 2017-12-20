module.exports = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/dest/js`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  }
}
