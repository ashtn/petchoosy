var path = require('path'); // utilities for working with file directories
var HtmlWebpackPlugin = require('html-webpack-plugin'); // aligns with dev dependency inside package.json // creates and index.html file and puts it inside the dist file, and includes the script in the index_bundle.js file.

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    histroyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
