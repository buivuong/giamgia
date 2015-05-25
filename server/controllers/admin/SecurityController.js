var knex = require('../../connect.js');
var commonFunction =  require('../../function.js');
var _ = require('lodash');
var passwordHash = require('password-hash');
var Mail = require('../../mail.js');
var moment = require('moment');
var Config = require('../../config.js');

var main = {
	getCheckAuth: function(req, res){
		var bearerToken;
	    var bearerHeader = req.headers.authorization;

	    if (typeof bearerHeader !== 'undefined') {
	        var bearer = bearerHeader.split(" ");
	        bearerToken = bearer[1];
	        
	        knex('admin_users')
	        .where({
	        	token: bearerToken
	        })
	        .then(function(rows){
	        	if(rows.length > 0)
	        		res.status(200).json({message: 'There has token'});
	        	else
	        		res.status(500).json({message: 'There is no Authorization'});			
	        }, function(error){
	        	res.status(400).json({error: error});
	        })

	    }else
	    	res.status(500).json({message: 'There is no Authorization'});
	},
	getCheckToken: function(req, res){
		var token = req.params.token;

		knex('admin_users')
		.where({
			token: token,
			active: 0
		})
		.then(function(rows){
			if(rows.length > 0){
				knex('admin_users')
				.where('id', rows[0].id)
				.update({
					active: 1
				})
				.then(function(updated){
					res.send('<p>Bạn đã xác nhận tài khoản. Mời bạn <a href="'+Config.domainClient+'admin/login">Đăng nhập hệ thống</a></p>');
				}, function(error){})
			}else{
				res.send('<p>Bạn đã xác nhận tài khoản rồi.</p>');
			}
		}, function(error){})
	},
	postForgot: function(req, res){
		var postData = req.body.data;
		var replace_pass = commonFunction.randomString();

		var replace_hash_pass = passwordHash.generate(replace_pass);

		knex('admin_users')
		.where({email: postData.email})
		.then(function(rows){
			if(rows.length > 0){
				Mail.templateForgotAdminUsers(postData.email, body)
				.then(function(response){
					knex('admin_users')
					.where({email: postData.email})
					.update({password: replace_hash_pass})
					.then(function(updated){
						res.json({data: updated, email: response.status});
					}, function(error){
						res.status(400).json({error: error});
					})
				}, function(error){
					res.status(500).json({error: error, type: 'email'});
				})
			}else
				res.status(500).json({field: 'email', message: 'Email chưa có trong hệ thống'});
		}, function(error){
			res.status(400).json({error: error});
		})

		var body = '<p>Tài khoản của bạn đã được tạo lại sau khi quên mật khẩu</p>'
			+ '<p><b>Email của bạn:</b> '+postData.email+'</p>'
			+ '<p><b>Mật khẩu của bạn:</b> '+replace_pass+'</p>';
	},
	postLogin: function(req, res){
		var postData = req.body.data;

		knex('admin_users')
		.where({
			email: postData.email
		})
		.then(function(rows){
			if(rows.length > 0){
				var row = rows[0];

				if(row.active === 0)
					res.status(500).json({type: 'active'});

				else if(row.deleted === 1)
					res.status(500).json({type: 'deleted'});

				else if(!passwordHash.verify(postData.password, row.password))
					res.status(500).json({field: 'password', message: 'Mật khẩu sai'});

				else{
					var now = moment().format();
					var token = passwordHash.generate(now);

					knex('admin_users')
					.where({
						id: row.id
					})
					.update({
						token: token,
						last_login_at: now
					})
					.then(function(updated){
						var admin_user = {email: row.email, name: row.name, token: token, remember_me: postData.remember_me};

						res.json({data: admin_user});
					}, function(error){
						res.status(400).json({error: error});
					})
				}

			}else{
				res.status(500).json({field: 'email', message: 'Email chưa đăng ký'});
			}
		}, function(error){
			res.status(400).json({error: error});
		})
	},
	postRegistration: function(req, res){
		var postData = req.body.data;

		var hashedPassword = passwordHash.generate(postData.password);
		var unhashedPassword = postData.password;
		var hashedToken = passwordHash.generate(moment().toString());
		delete postData.password;
		postData.password = hashedPassword;
		postData.token = hashedToken;

		knex('admin_users')
		.where('email', postData.email)
		.then(function(rows){
			if(rows.length > 0)
				res.status(500).json({field: 'email', message: 'Email đã có trong hệ thống'});
			else{
				var body = '<p>Bạn vừa mới đăng ký tài khoản trong chương trình quảng cáo Realtime của chúng tôi</p>'
					+ '<p><b>Email của bạn:</b> '+postData.email+'</p>'
					+ '<p><b>Mật khẩu của bạn:</b> '+unhashedPassword+'</p>'
					+ '<p>Bạn cần xác nhận thông tin đăng ký của bạn qua đường link: <a href="'+Config.domain+Config.defaultAdminUrl+'security/checkToken/'+postData.token+'">Xác nhận tài khoản</a></p>';

				Mail.templateRegistrationAdminUsers(postData.email, body)
				.then(function(response){
					knex('admin_users')
					.insert(postData)
					.then(function(created){
						res.json({data: created[0], email: response.status});
					}, function(error){
						res.status(400).json({error: error});
					})
				}, function(error){
					res.status(500).json({error: error, type: 'email'});
				})
			}
			
		}, function(error){
			res.status(400).json({error: error});
		})
	}
}

module.exports = main;