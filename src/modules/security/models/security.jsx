var Q = require('q');
var jquery = require('jquery-browserify');
var config = require('../../../config/config.jsx');

var baseUrl = config.baseServerUrl;

var Service = {
	login: function(post){
		var url = baseUrl+'security/login';
		var postData = {data: post};
		var deferred = Q.defer();

		jquery.post(url, postData, function(data){
			deferred.resolve(data);
		}.bind(this))
		.fail(function(error){
			deferred.resolve(error);
		})

		return deferred.promise;
	},
	register: function(post){
		var url = baseUrl+'security/registration';
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