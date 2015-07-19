var knex = require('connect');
var is = require('is_js');
var async = require('async');
var functions = require('functions');
var validate = require("valid");
var UsersModel = require('models/UsersModel');

var main = {
	postRegister: function(req, res){
		var data = req.body.data;

		var errors = validate(data, UsersModel);

		if(is.not.undefined(errors))
			return res.status(400).json(errors);

		var password = data.password;
		var password_repeat = data.password_repeat;

		if(password !== password_repeat)
			return res.status(400).json({password_repeat: ['SIGNUP_ERR_SAME_PASSWORD']});
	}
}

module.exports = main;