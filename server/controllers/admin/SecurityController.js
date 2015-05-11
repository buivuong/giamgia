var knex = require('../../connect.js');
var commonFunction =  require('../../function.js');
var _ = require('underscore');
var passwordHash = require('password-hash');

var main = {
	postRegistration: function(req, res){
		var postData = req.body.data;

		var hashedPassword = passwordHash.generate(postData.password);
		delete postData.password;
		postData.password = hashedPassword;

		knex('admin_users')
		.insert(postData)
		.then(function(created){
			res.status(500).json(created);
		}, function(error){
			res.status(500).json(error);
		})
	}
}

module.exports = main;