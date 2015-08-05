var knex = require('connect');
var is = require('is_js');
var async = require('async');
var functions = require('functions');
var validate = require("valid");
var passwordHash = require('password-hash');
var mail = require('mail');
var config = require('config');
var Q = require('q');

var main = {
	getToken: function(req, res){
		var token = req.params.token;

		async.waterfall([
			function(callback){
				knex('users')
				.where('token', token)
				.then(function(response){
					if(response.length > 0){
						callback(null);
					}else{
						res.send('Token Invalid');
					}
				})
				.catch(function(error){
					res.send('SQL Invalid');
				})
			},
			function(callback){
				knex('users')
				.where('token', token)
				.update({
					token: '',
					active: 'yes'
				})
				.then(function(response){
					res.send('You activated system. Please Login');
				})
				.catch(function(error){
					res.send('SQL Invalid');
				})
			}
		]);
	},
	postCheckUsername: function(req, res){
		var postData = req.body.data;

		knex('users')
		.where('username', postData.username)
		.then(function(response){
			if(response.length > 0)
				res.status(400).json({data: 'error'});
			else
				res.status(200).json({data: 'success'});
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},
	postCheckEmail: function(req, res){
		var postData = req.body.data;

		knex('emails')
		.where({
			name: postData.email,
			type: 'primary'
		})
		.then(function(response){
			if(response.length > 0)
				res.status(400).json({data: 'error'});
			else
				res.status(200).json({data: 'success'});
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},
	postRegister: function(req, res){
		var postData = req.body.data;

		var user_id = functions.guid();
		var email_id = functions.guid();
		var user_email_id = functions.guid();

		var email = postData.email;
		var password = postData.password;
		delete postData.email;

		postData.id = user_id;
		postData.password = passwordHash.generate(postData.password);
		postData.token = functions.guid();

		var callback_insert_user_email = function(trx){
			return knex('users_emails')
				.transacting(trx)
				.insert({
					id: user_email_id,
					email_id: email_id,
					user_id: user_id,
					deleted: 'no',
					created_at: postData.created_at,
					updated_at: postData.updated_at,
					created_by: user_id,
					updated_by: user_id
				})
				.then(function(response){})
				.then(trx.commit)
				.catch(trx.rollback)
		}

		var callback_insert_email = function(trx){
			return knex('emails')
				.transacting(trx)
				.insert({
					id: email_id,
					name: email,
					type: 'primary',
					deleted: 'no',
					created_at: postData.created_at,
					updated_at: postData.updated_at,
					created_by: user_id,
					updated_by: user_id
				})
				.then(function(response){
					return callback_insert_user_email(trx);
				})
				.then(trx.commit)
				.catch(trx.rollback)
		}

		async.waterfall([
			function(callback){
				knex.transaction(function(trx){
					knex('users')
					.transacting(trx)
					.insert(postData)
					.then(function(response){
						return callback_insert_email(trx);
					})
					.then(trx.commit)
					.catch(trx.rollback)
				})
				.then(function(response){
					callback(null);
				})
				.catch(function(error){
					res.status(500).json(error);
				})
			},
			function(callback){
				var body = 'Your username: '+postData.username+'<br/>Your password: '+password
					+'<br/>Please activate, click this link <a href="'+config.domain+config.defaultUrl+'client/users/token/'+postData.token+'">Activate this</a>';
				mail.templateRegistrationClientUsers(email, body)
				.then(function(response){
					res.status(200).json({data: 'success'});
				}, function(error){
					res.status(500).json({error: 'mail not send'});
				})
			}
		])
	}
}

module.exports = main;