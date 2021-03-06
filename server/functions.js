var knex = require('connect');
var is = require('is_js');

var Function = {
	generateRandomString: function(len){
		var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < len; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	},
	guid: function(){
		function s4() {
    		return Math.floor((1 + Math.random()) * 0x10000)
      		.toString(16)
      		.substring(1);
  		}
  		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    	s4() + '-' + s4() + s4() + s4();
	},
	execEmpty: function(value){
		if(is.empty(value) || is.null(value))
			return '';
		else return value;
	},
	checkToken: function(req, res, next){

		var authorization = req.headers.authorization;
		if(is.not.undefined(authorization) &&
			is.not.empty(authorization)){

			var split = authorization.split(" ");
			var token = split[1];

			knex('users')
				.where({'token': token})
				.then(function(response){
					if(response.length > 0){
						next();
					}
					else {
						res.status(403).json("error");
					}
				})
				.catch(function(error){
					res.status(403).json(error);
				});
		} else {
			res.status(403).json("error");
		}
		
	}
}

module.exports = Function;