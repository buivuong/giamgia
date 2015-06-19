var knex = require('connect');
var passwordHash = require('password-hash');
var SecurityModel = require('models/admin/SecurityModel');
var is = require('is_js');

var main = {
	postRegistration: function(req, res){
		var postData = req.body.data;

		var password_hash = passwordHash.generate(postData.password);

		var insertData = {
			name: postData.name,
			email: postData.email,
			password: postData.password,
			password_hash: password_hash,
			active: postData.active,
			created_at: postData.created_at,
			updated_at: postData.updated_at
		}

		var errors = SecurityModel.validation_require_fields(postData);

		if(errors.length > 0)
			return res.status(400).json(errors);
		
		errors = SecurityModel.validation_email_fields(postData);

		if(errors.length > 0)
			return res.status(400).json(errors);

		errors = SecurityModel.validation_min_fields(postData);

		if(errors.length > 0)
			return res.status(400).json(errors);

		errors = SecurityModel.validation_compare_fields(postData);

		if(errors.length > 0)
			return res.status(400).json(errors);

		knex('shop_users')
		.where('email', postData.email)
		.then(function(rows){
			if(rows.length > 0)
				return res.status(400).json(SecurityModel.server_same_fields);
			else
				return knex('shop_users').insert(insertData);
		})
		.then(function(inserted){
			return knex('shop_users').where('id', inserted[0]);
		})
		.then(function(rows){
			if(rows.length > 0)
				return res.json({row: rows[0]});
		})
		.catch(function(error){
			return res.status(500).json(error);
		})
	}
}

module.exports = main;