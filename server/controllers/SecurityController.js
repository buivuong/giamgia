var knex = require('../connect.js');
var commonFunction =  require('../function.js');
var jwt = require('jsonwebtoken');
var SecurityModel = require('../models/SecurityModel.js');
var _ = require('lodash');

module.exports = {
	//REGISTRATION
	postRegistration: function(req, res){
		var postData = req.body.data;

		var errors = {
			required: []
		};

		//REQUIRED
		var required_val = SecurityModel.validation.required;

		_.each(required_val, function(model){
			for(var item in postData){
				if(item === model.field){
					if(_.isNull(postData[item]) || _.isUndefined(postData[item]) || postData[item] === '')
						errors.required.push(model);
				}
			}
		});
		//END REQUIRED

		if(errors.required.length > 0){
			return res.status(500).json({errors: errors.required, type: 'required'});
		}		
	},
	//END REGISTRATION
	//LOGIN
	postLogin: function(req, res){
		var postData = req.body.data;

		var errors = {
			required: []
		};
		
		//REQUIRED
		var required_val = SecurityModel.validation.required;

		_.each(required_val, function(model){
			for(var item in postData){
				if(item === model.field){
					if(_.isNull(postData[item]) || _.isUndefined(postData[item]) || postData[item] === '')
						errors.required.push(model);
				}
			}
		});
		//END REQUIRED

		if(errors.required.length > 0){
			return res.status(500).json({errors: errors.required, type: 'required'});
		}
	}
	//END LOGIN
}