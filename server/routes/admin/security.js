var SecurityController = require('../../controllers/admin/SecurityController');

module.exports = function(app){
	var config = require('../../config.js');
	var module = config.defaultAdminUrl+'security/';

	app.post(module+'registration', SecurityController.postRegistration);
}