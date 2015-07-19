var UsersController = require('controllers/client/UsersController');

module.exports = function(app){
	var config = require('config');
	var module = config.defaultClientUrl+'users/';

	app.post(module+'register', UsersController.postRegister);
}