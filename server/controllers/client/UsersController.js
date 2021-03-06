var knex = require('connect');
var is = require('is_js');
var async = require('async');
var functions = require('functions');
var validate = require("valid");
var passwordHash = require('password-hash');
var config = require('config');
var mail = require('mail');
var moment = require('moment');

var main = {
	getCheckToken: function(req, res){
		res.json({data: 'success'});
	},
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
					var body = 'Your username: '+postData.username+'<br/>Your password: '+password
					+'<br/>Please activate, click this link <a href="'+config.domain+config.defaultUrl+'client/users/token/'+postData.token+'">Activate this</a>';
					mail.templateRegistrationClientUsers(email, body)
					.then(function(response){
						res.status(200).json({data: 'success'});
					}, function(error){
						res.status(500).json({error: 'mail not send'});
					});
				})
				.catch(function(error){
					res.status(500).json(error);
				});
	},
	postLogin: function(req, res){
		var postData = req.body.data;
		async.waterfall([
			function(callback){
				//check username
				knex('users')
				.select('users.id', 'users.username', 'users.password', 'users.active', 'users.deleted', 'emails.name as email')
				.innerJoin('users_emails','users.id', 'users_emails.user_id')
				.innerJoin('emails', 'users_emails.email_id', 'emails.id')
				.where({'username': postData.username, 'emails.type': 'primary'})
				.then(function(response){
					if(is.not.undefined(response) &&
					   is.not.null(response) &&
					   response.length > 0){
					   	callback(null, response[0]);
					}
					else{
						res.status(400).json({data: "Accout not exist!"})
					}
				})
				.catch(function(error){
					res.status(500).json(error);
				})
			},
			function(response, callback){
				//check password
				if(passwordHash.verify(postData.password, response.password)) {
					callback(null, response);
				}
				else{
					res.status(400).json({data: "Password wrong!"});
				}	
			},
			function(response, callback){
				//check active
				if(response.active === 'yes') {
					callback(null, response);
				}
				else {
					res.status(400).json({data: "User InActive!"});
				}
			},
			function(response, callback){
			//check deleted
				if(response.deleted === 'no'){
					var guid = functions.guid();
					knex('users')
						.where({'id': response.id})
						.update({'token': guid, last_login_at: postData.last_login_at})
						.then(function(responseInsert){
							res.status(200).json({id: response.id, username: response.username, email: response.email, guid: guid});
						})
						.catch(function(error){
							res.status(500).json(error);
						});
				}
				else {
					res.status(400).json({data: "User deleted!"});
				}
			}
			]);
	},
	checkOldPassword: function(req, res){
		var data = req.body.data;
		knex('users')
			.select('password')
			.where({'id': data.id})
			.then(function(result){
				if(result.length > 0){
					if(passwordHash.verify(data.old_password, result[0].password)){
						res.status(200).json("password same");
					}
					else {
						res.status(400).json("password wrong");
					}
				}
				else {
					res.status(403).json("forbidden");
				}
			})
			.catch(function(error){
				res.status(500).json(error);
			});
	},
	changePassword: function(req, res){
		var postData = req.body.data;
		var password = passwordHash.generate(postData.new_password);
		knex.transaction(function(trx){
			return trx.into('users')
				.where({'id': postData.id})
				.update({'password': password})
				.then(function(result){
					return;
				})
				.catch(function(error){
					res.status(500).json(error);
				});
		})
		.then(function(trx){
			var body = "Your password change: " + postData.change_password_at;
				mail.templateUserChangePassword(postData.email, body)
				.then(function(response){
					trx.commit;
					res.status(200).json({data: "send mail success"});
				}, function(error){
					trx.rollback;
					res.status(500).json({error: "send mail failed!" });
				});
		})
		.catch(function(){
			trx.rollback;
		});
	}
}
module.exports = main;