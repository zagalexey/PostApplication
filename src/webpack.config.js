const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	output: {
		path: path.join(__dirname, '..', '/dist'),
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
				use: [{ loader: 'babel-loader' }]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				],
				type: 'javascript/auto'
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', '/public/index.html')
		}),
		new ReactRefreshPlugin()
	]
}
