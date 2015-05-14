var Q = require('q');
var jquery = require('jquery-browserify');
var config = require('../../config/config.jsx');

var baseUrl = config.baseServerUrlAdmin+'security/';

var Service = {
	checkAuth: function(){
		var url = baseUrl+'checkAuth';
		var deferred = Q.defer();

		jquery.get(url, function(data){
			deferred.resolve(data);
		})
		.fail(function(error){
			deferred.reject(JSON.parse(error.responseText));
		})

		return deferred.promise;
	}
}

module.exports = Service;