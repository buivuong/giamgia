var DevsActions = require('dev/actions/DevsActions');
var _ = require("underscore");
require("underscore-query")(_);

var config = require('config');
var baseUrl = config.baseServerUrl+'devs/';

var _devs = [];

var DevsStore = Reflux.createStore({
	init: function(){
		_devs: [];
		this.listenTo(DevsActions.list, this.onList);
		this.listenTo(DevsActions.add, this.onAdd);
	},
	getDevs: function(){
		return _devs;
	},
	getDev: function(id){
		return _.query(_devs, {id: id})[0];
	},
	getSearch: function(name){
		return _.query(_devs, {name: {$likeI: name}});
	},
	onAdd: function(data){
		$.post(baseUrl+'add', {data: data})
		.done(function(response){
			DevsActions.add.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				DevsActions.add.failed(JSON.parse(error.responseText));
		})
	},
	onList: function(){
		$.get(baseUrl+'list')
		.done(function(response){
			_devs = response.data;
			DevsActions.list.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				DevsActions.list.failed(JSON.parse(error.responseText));
		})
	}
});

module.exports = DevsStore;