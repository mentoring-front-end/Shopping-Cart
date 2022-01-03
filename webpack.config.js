const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // for debugging using source map
  devtool: 'eval-source-map',
  // for development mode
  mode: 'development',
  // entry file for bundle the ts and compile to js
  entry: './src/index.ts',
  // module for developement
  module: {
    rules: [
      {
        // if regex and extension file .ts (typescript)
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
      {
        // if regex and extension file .ts (typescript)
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  },
  // resolve extension to avoid bug
  resolve: {
    extensions: ['.ts', '.js']
  },
  // directory output for the compiled
  output: {
    publicPath: 'public',
    // file name after compiling
    filename: 'bundle.js',
    // directory file where the bundle is
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: './public'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //       template: __dirname + './public/index.html',
  //       filename: 'index.html',
  //       inject: 'body'
  //   })
  // ],
};