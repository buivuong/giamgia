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
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
			"_": "lodash",
			"Q": "q",
			"moment": "moment"
        })
    ]
};

config.addVendor('jquery', node_dir + '/jquery/dist/jquery.min.js');
config.addVendor('materialize', bower_dir + '/materialize/dist/js/materialize.min.js');
config.addVendor('materialize.css', bower_dir + '/materialize/dist/css/materialize.min.css');
config.addVendor('style.css', lib_dir + '/style.css');
config.addVendor('google-connect', lib_dir + '/google-connect.js');
config.addVendor('google-mask-clusterer', bower_dir + '/js-marker-clusterer/src/markerclusterer.js');

module.exports = config;