var bower_dir = __dirname + '/bower_components';
var node_dir = __dirname + '/node_modules';
var lib_dir = __dirname + '/libs';

var webpack = require('webpack');
var path = require('path');

var config = {
	addVendor: function (name, path) {
		this.resolve.alias[name] = path;
		this.module.noParse.push(new RegExp(path));
	},
	entry: ['./app/main.js'],
	resolve: { 
		root: path.resolve(__dirname, 'app'),
		modulesDirectories: ['node_modules', 'app/mixins', 'app/config', 'app/components'],
		alias: {} 
	},
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		noParse: [],
    	loaders: [
      		{ test: /\.js$/, loader: 'jsx-loader' },
      		{ test: /\.css$/, loader: 'style-loader!css-loader' },
      		{ test: /\.woff|woff2$/,   loader: "url-loader?prefix=font/&limit=100000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "url-loader?prefix=font/" },
            { test: /\.eot$/,    loader: "url-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "url-loader?prefix=font/" }
    	]
 	},
 	plugins: [
        new webpack.ProvidePlugin({
			"_": "lodash",
			"Q": "q",
			"moment": "moment"
        })
    ]
};

config.addVendor('google-mask-clusterer', bower_dir + '/js-marker-clusterer/src/markerclusterer.js');
config.addVendor('tipso.css', bower_dir + '/tipso/src/tipso.min.css');
config.addVendor('tipso', bower_dir + '/tipso/src/tipso.min.js');

module.exports = config;