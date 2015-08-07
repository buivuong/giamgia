var UsersController = require('controllers/client/UsersController');
var functions = require('functions');

module.exports = function(app){
	var config = require('config');
	var module = config.defaultClientUrl+'users/';

	app.post(module+'checkUsername', UsersController.postCheckUsername);
	app.post(module+'checkEmail', UsersController.postCheckEmail);
	app.get(module+'checkToken', functions.checkToken, UsersController.getCheckToken);
	app.post(module+'register', UsersController.postRegister);
	app.post(module+'login', UsersController.postLogin);
	app.get(module+'token/:token', UsersController.getToken);
	app.post(module+'check-old-password', UsersController.checkOldPassword);
	app.post(module+'change-password', UsersController.changePassword);
}