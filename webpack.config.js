module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	module: {
		loaders: [{
			text: /\.jsx?$/,
			loader: 'babel',
			exclude: '/node-modules'
		}]
	}
}