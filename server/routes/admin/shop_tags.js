var ShopTagsController = require('../../controllers/admin/ShopTagsController');

module.exports = function(app){
	var config = require('../../config.js');
	var module = config.defaultAdminUrl+'shop_tags/';

	app.get(module+'all', ShopTagsController.getAll);
}