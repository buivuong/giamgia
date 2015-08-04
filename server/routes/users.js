var UsersController = require('controllers/client/UsersController');
var functions = require('functions');

module.exports = function(app){
	var config = require('config');
	var module = config.defaultClientUrl+'users/';

	app.post(module+'checkUsername', UsersController.postCheckUsername);
	app.post(module+'checkEmail', UsersController.postCheckEmail);
	app.post(module+'register', UsersController.postRegister);
}