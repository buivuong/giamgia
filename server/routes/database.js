var knex = require('../connect.js');
var DatabaseController = require('../controllers/DatabaseController');

module.exports = function(app){
	var config = require('../config.js');
	var module = config.defaultUrl+'database/';

	app.get(module+'admin_users/create', DatabaseController.getAdminUsersCreate);
	app.get(module+'shop_tags/create', DatabaseController.getShopTagsCreate);
}