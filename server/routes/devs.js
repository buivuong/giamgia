var DevsController = require('controllers/DevsController');

module.exports = function(app){
	var config = require('config');
	var module = config.defaultUrl+'devs/';

	app.post(module+'add', DevsController.postAdd);
	app.get(module+'list', DevsController.getList);
	app.get(module+'generateUID', DevsController.getGenerateUID);
}