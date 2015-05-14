var Q = require('q');
var jquery = require('jquery-browserify');
var config = require('../../../config/config.jsx');

var baseUrl = config.baseServerUrlAdmin+'security/forgot';

var Service = {
	forgot: function(post){
		var url = baseUrl;
		var postData = {data: post};
		var deferred = Q.defer();

		jquery.post(url, postData, function(data){
			deferred.resolve(data);
		})
		.fail(function(error){
			deferred.reject(JSON.parse(error.responseText));
		})

		return deferred.promise;
	}
}

module.exports = Service;