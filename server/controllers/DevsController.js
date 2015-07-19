var knex = require('connect');
var is = require('is_js');
var async = require('async');
var functions = require('functions');
var validate = require("valid");
var DevsModel = require('models/DevsModel');

var main = {
	getGenerateUID: function(req, res){
		var id = functions.guid();

		return res.status(200).json({id: id});
	},
	postAdd: function(req, res){
		var postData = req.body.data;

		var errors = validate(postData, DevsModel);

		if(is.not.undefined(errors))
			return res.status(400).json(errors);

		async.waterfall([
			function(callback){
				var id = functions.guid();
				callback(null, id);
			},
			function(id, callback){
				postData.id = id;

				knex('devs')
				.insert(postData)
				.then(function(id){
					return res.status(200).json({status: 'success'});
				}, function(err){
					return res.status(500).json(err);
				})
			}
		]);
	},
	getList: function(req, res){
		knex('devs')
		.select('*')
		.then(function(rows){
			return res.status(200).json({data: rows});
		}, function(err){
			return res.status(500).json(err);
		})
	}
}

module.exports = main;