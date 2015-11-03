var Path = require('path');

module.exports = {
  entry: {
		 bundle: './app/main.jsx'

	 },

  output: {
		  path: Path.resolve(__dirname, 'public'),
		  filename: '[name].js',
		  sourceMapFilename: '[name].map'
	  },

  resolve: {
		   extensions: ['', '.js', '.jsx']
	   },

  module: {
		  loaders: [
		  {
			  test: /\.jsx?$/,
			  exclude: /(node_modules|bower_components)/,
			  loader: 'babel'
		  }
			  ]

	  }



};
