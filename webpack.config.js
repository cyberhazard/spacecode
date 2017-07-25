module.exports = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/dest/js`,
    filename: 'bundle.js'
  },
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
