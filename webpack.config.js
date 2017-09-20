const path = require('path');
const cleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry:{
		app:'./src/index.js'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
      			exclude: /(node_modules|bower_components)/,
      			use:{
      				loader: 'babel-loader'
      			}
			},
			{
				test: /\.html$/,
				use:{
					loader: 'file-loader',
					options: {
						name:'index.html'
					}
				}
			}
			]
	},
	plugins:[
		new cleanWebPackPlugin(['dist'])
	],
	devtool: 'inline-source-map',
	output:{
		filename:'[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	}
}