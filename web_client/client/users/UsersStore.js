var UsersActions = require('client/users/UsersActions');
var _ = require("underscore");
require("underscore-query")(_);

var config = require('config');
var baseUrl = config.baseServerUrlClient+'users/';

var _users = [];

var UsersStore = Reflux.createStore({
	init: function(){
		_users: [];
		this.listenTo(UsersActions.register, this.onRegister);
	},
	onRegister: function(data){
		$.post(baseUrl+'register', {data: data})
		.done(function(response){
			UsersActions.register.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				UsersActions.register.failed(JSON.parse(error.responseText));
		})
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

module.exports = UsersStore;