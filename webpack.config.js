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
    entry: {
        web: './web_client/main.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['node_modules', 'web_client'],
        alias: {} 
  	},
    output: {
	    path: './build',
	    filename: '[name].bundle.js'
    },
    module: {
		noParse: [],
        loaders: [
            { test: /\.js?$/, loaders: ['jsx-loader'] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true'},
            { test: /\.ttf$/,    loader: "url-loader?prefix=font/" },
            { test: /\.eot$/,    loader: "url-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "url-loader?prefix=font/" },
            {include: /\.json$/, loaders: ["json-loader"]},
            { test: /is_js/, loader: "imports?define=>undefined" }
        ]
    },
    resolve: {
        extensions: ['', '.json', '.jsx', '.js']
    },
 	plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            "moment": "moment-timezone",
            $: "jquery",
            jQuery: "jquery",
            React: "react",
            Reflux: "reflux",
            is: "is_js",
            async: "async",
            extend: "extend",
			ReactIntl: "react-intl",
			Validate: "validate.js",
            wysiwyg: "wysiwyg",
            Cookies: "cookies-js",
			
			Wrap: "web_client/components/wrap/wrap",
			Box: "web_client/components/box/box",
			Panel: "web_client/components/panel/panel",
			Inner: "web_client/components/inner/inner",
			Image: "web_client/components/image/image",
			List: "web_client/components/list/list",
			ListItem: "web_client/components/list/item",
			Link: "web_client/components/link/link",
			Span: "web_client/components/span/span",
			Section: "web_client/components/section/section",
			Header: "web_client/components/header/header",
			Button: "web_client/components/button/button",
			ButtonGroup: "web_client/components/button/group",
			MenuToggle: "web_client/components/menu/toggle",
			Icon: "web_client/components/icon/icon",
			Breadcrump: "web_client/components/breadcrump/breadcrump",
			Title: "web_client/components/title/title",
			Bold: "web_client/components/bold/bold",
			Sentence: "web_client/components/sentence/sentence",
			Footer: "web_client/components/footer/footer",
			Divider: "web_client/components/divider/divider",
			Row: "web_client/components/row/row",
			Column: "web_client/components/column/column",
			Form: "web_client/components/form/form",
			FormGroup: "web_client/components/form/group",
			Label: "web_client/components/label/label",
			Input: "web_client/components/input/input",
			Table: "web_client/components/table/table",
			TableRow: "web_client/components/table/row",
			TableHeader: "web_client/components/table/header",
			TableColumn: "web_client/components/table/column",
			Dialog: "web_client/components/dialog/dialog",
			DialogBody: "web_client/components/dialog/body",
			DialogContent: "web_client/components/dialog/content",
			DialogHeader: "web_client/components/dialog/header",
			LabelError: "web_client/components/label/error",
			Loader: "web_client/components/loader/loader",
            Tab: "web_client/components/tab/tab",
            Wizard: "web_client/components/wizard/wizard",
            Small: "web_client/components/small/small",
			
			CheckToken: "web_client/mixins/checkToken",
			CheckNoToken: "web_client/mixins/checkNoToken"
        })
    ]
};

config.addVendor('all.css', lib_dir+'/css/style_default.css');

config.addVendor('jquery', lib_dir+'/js/jquery-1.11.1.min.js');
config.addVendor('jquery-migrate', lib_dir+'/js/jquery-migrate-1.2.1.min.js');
config.addVendor('bootstrap', lib_dir+'/js/bootstrap.min.js');
config.addVendor('cookies', lib_dir+'/js/jquery.cookies.js');

config.addVendor('toggle', lib_dir+'/js/toggles.min.js');
config.addVendor('retina', lib_dir+'/js/retina.min.js');

config.addVendor('is_js', node_dir+'/is_js/is.min.js');

config.addVendor('jquery-serialize', bower_dir+'/jQuery.serializeObject/dist/jquery.serializeObject.min.js');

config.addVendor('wysiwyg', bower_dir+'/wysiwyg.js/dist/wysiwyg.min.js');
config.addVendor('wysiwyg-editor', bower_dir+'/wysiwyg.js/dist/wysiwyg-editor.min.js');
config.addVendor('wysiwyg-editor.css', bower_dir+'/wysiwyg.js/dist/wysiwyg-editor.min.css');

config.addVendor('datetimepicker', bower_dir+'/datetimepicker/jquery.datetimepicker.js');
config.addVendor('datetimepicker.css', bower_dir+'/datetimepicker/jquery.datetimepicker.css');

config.addVendor('select2.css', lib_dir+'/css/select2.css');
config.addVendor('select2', lib_dir+'/js/select2.min.js');

config.addVendor('spinner.css', lib_dir+'/spinner.css');
config.addVendor('custom.css', lib_dir+'/custom.css');

config.addVendor('jquery-mask-input', bower_dir+'/jquery.inputmask/dist/jquery.inputmask.bundle.min.js');

module.exports = config;