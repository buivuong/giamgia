var UserActions = require('client/user/UserActions');
var _ = require("underscore");
require("underscore-query")(_);

var config = require('config');
var baseUrl = config.baseServerUrlClient+'users/';

var _list = [];

var UserStore = Reflux.createStore({
	init: function(){
		_list: [];
		this.listenTo(UserActions.register, this.onRegister);
		this.listenTo(UserActions.checkUsername, this.onCheckUsername);
		this.listenTo(UserActions.checkEmail, this.onCheckEmail);
		this.listenTo(UserActions.checkToken, this.onCheckToken);
		this.listenTo(UserActions.Login, this.onLogin);
	},
	onCheckToken: function(){
		$.get(baseUrl+'checkToken')
		.done(function(response){
			UserActions.checkToken.completed({data: response});
		})
		.fail(function(error){
			UserActions.checkToken.failed({status: error.status, data: JSON.parse(error.responseText)});
		});
	},
	onLogin: function(dataPost){
		$.post(baseUrl+'login', {data: dataPost})
		.done(function(response){
			UserActions.Login.completed({data: response});
		})
		.fail(function(error){
			if(error.status!=='403'){
				UserActions.Login.failed({status: error.status, data: JSON.parse(error.responseText)});
			}
		});
	},
	onCheckUsername: function(data){
		$.post(baseUrl+'checkUsername', {data: data})
		.done(function(response){
			UserActions.checkUsername.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				UserActions.checkUsername.failed({status: error.status, data: JSON.parse(error.responseText)});
		})
	},
	onCheckEmail: function(data){
		$.post(baseUrl+'checkEmail', {data: data})
		.done(function(response){
			UserActions.checkEmail.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				UserActions.checkEmail.failed({status: error.status, data: JSON.parse(error.responseText)});
		})
	},
	onRegister: function(data){
		$.post(baseUrl+'register', {data: data})
		.done(function(response){
			UserActions.register.completed(response);
		})
		.fail(function(error){
			if(error.status !== '403')
				UserActions.register.failed(JSON.parse(error.responseText));
		})
	}
});

module.exports = UserStore;