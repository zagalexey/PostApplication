const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				use: [{ loader: 'babel-loader' }]
			}
			// {
			// 	test: /\.tsx?$/,
			// 	use: 'ts-loader',
			// 	exclude: /node_modules/
			// }
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}
