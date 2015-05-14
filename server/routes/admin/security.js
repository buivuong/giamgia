var SecurityController = require('../../controllers/admin/SecurityController');

module.exports = function(app){
	var config = require('../../config.js');
	var module = config.defaultAdminUrl+'security/';

	app.post(module+'registration', SecurityController.postRegistration);
	app.post(module+'login', SecurityController.postLogin);
	app.post(module+'forgot', SecurityController.postForgot);
	app.get(module+'checkToken/:token', SecurityController.getCheckToken);

	app.get(module+'checkAuth', SecurityController.getCheckAuth);
}