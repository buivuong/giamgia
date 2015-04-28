var knex = require('../connect.js');
var DatabaseController = require('../controllers/DatabaseController');

module.exports = function(app){
	var config = require('../config.js');
	var module = config.defaultUrl+'database/';

	/* USERS */
	app.get(module+'users/create', DatabaseController.getUsersCreate);
	app.get(module+'users/remove', DatabaseController.getUsersRemove);

	app.get(module+'users_socials/create', DatabaseController.getUsersSocialsCreate);
	/* END USERS */
}