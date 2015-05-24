var config = require('Config');

var baseUrl = config.baseServerUrlAdmin+'security/';

var Service = {
	checkAuth: function(){
		var url = baseUrl+'checkAuth';
		var deferred = Q.defer();

		$.get(url, function(data){
			deferred.resolve(data);
		})
		.fail(function(error){
			deferred.reject(JSON.parse(error.responseText));
		})

		return deferred.promise;
	}
}

module.exports = Service;