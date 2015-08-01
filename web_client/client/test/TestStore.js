var TestActions = require('client/test/TestActions');
var _ = require("underscore");
require("underscore-query")(_);

var config = require('config');
var baseUrl = config.baseServerUrlClient+'test/';

var _list = [];

var TestStore = Reflux.createStore({
	init: function(){
		_list: [];
		this.listenTo(TestActions.add, this.onAdd);
		this.listenTo(TestActions.list, this.onList);
	},
	onList: function(){
		$.get(baseUrl+'list')
		.done(function(response){
			TestActions.list.completed(response);
			_list = response.data;
		})
		.fail(function(error){
			if(error.status !== '403')
				TestActions.list.failed(JSON.parse(error.responseText));
		})
	},
	onAdd: function(data){
		$.post(baseUrl+'add', {data: data})
		.done(function(response){
			TestActions.add.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				TestActions.add.failed(JSON.parse(error.responseText));
		})
	},
	getList: function(){
		return _list;
	}
	/*getDevs: function(){
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
	}*/
});

module.exports = TestStore;