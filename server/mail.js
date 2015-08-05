var nodemailer = require('nodemailer');
var Q = require('q');

module.exports = {
	createTransporter: function(){
		return nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'teamrealtimedev@gmail.com',
				pass: 'zaq12wsxcde34rfv'
			}
		});
	},
	templateRegistrationClientUsers: function(to, body){
		var deferred = Q.defer();
		var MailConnect = this.createTransporter();

		var mailOptions = {
			from: 'Team Realtime',
			to: 'teamrealtimedev@gmail.com,'+to,
			subject: 'You have just register to the system',
			html: body
		}

		MailConnect.sendMail(mailOptions, function(error, info){
			if(error)
				deferred.reject(error);
			if(info)
				deferred.resolve({status: 'success'});
		})

		return deferred.promise;
	},
	templateForgotAdminUsers: function(to, body){
		var deferred = Q.defer();
		var MailConnect = this.createTransporter();

		var mailOptions = {
			from: 'Team Realtime',
			to: to,
			subject: 'Quên mật khẩu',
			html: body
		}

		MailConnect.sendMail(mailOptions, function(error, info){
			if(error)
				deferred.reject(error);
			if(info)
				deferred.resolve({status: 'success'});
		})

		return deferred.promise;
	}
}