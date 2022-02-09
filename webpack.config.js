const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
            name: './src/assets/[name].[ext]',
        },
			}
		],
	},
	resolve: {
		extensions: ['.ts', 'tsx', '.js'],
	},
	plugins: [
    new HtmlWebpackPlugin({
    	filename: 'index.html',
    	template: path.resolve(__dirname, './src/template/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets" },
      ],
    }),
  ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true,
    },
    compress: true,
    port: 9000,
  },
}