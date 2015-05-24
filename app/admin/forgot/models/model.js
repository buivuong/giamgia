var config = require('Config');

var baseUrl = config.baseServerUrlAdmin+'security/forgot';

var Service = {
	forgot: function(post){
		var url = baseUrl;
		var postData = {data: post};
		var deferred = Q.defer();

		$.post(url, postData, function(data){
			deferred.resolve(data);
		})
		.fail(function(error){
			deferred.reject(JSON.parse(error.responseText));
		})

		return deferred.promise;
	}
}

module.exports = Service;