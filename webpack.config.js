const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test:/\.css$/,
				use:[
				MiniCssExtractPlugin.loader,
				"css-loader",
				"postcss-loader"
				]
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],		
	},
	output: {
		filename: 'webpack-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new MiniCssExtractPlugin({
		filename:"index.css",
	})],
	devServer: {
		static: path.resolve(__dirname, 'dist')
	}
}