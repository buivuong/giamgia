var knex = require('../../connect.js');
var commonFunction =  require('../../function.js');
var _ = require('lodash');
var moment = require('moment');
var Config = require('../../config.js');

var main = {
	getAll: function(req, res){
		knex('shop_tags')
		.select()
		.then(function(rows){
        	res.status(200).json({data: rows});
        }, function(error){
        	res.status(400).json({error: error});
        })
	}
};

module.exports = main;