var knex = require('../connect.js');

module.exports = {
	getUsersCreate: function(req, res){
		knex.schema.dropTableIfExists('users')
		.then(function(){
			knex.schema.createTable('users', function(table){
				table.increments('id').primary();
				table.string('email', 150);
				table.string('password', 150);
				table.integer('created_by');
				table.integer('updated_by');
				table.timestamps();
				table.boolean('deleted');
			})
			.then(function(){
				res.json({message: 'Table users created successfully'});
			})
			.catch(function(error){
				res.json({message: error});
			})
		})
		.catch(function(error){
			res.json({message: error});
		})
	},

	getUsersRemove: function(req, res){
		knex.schema.dropTableIfExists('users')
		.then(function(){
			res.json({message: 'Table users remove successfully'});
		})
		.catch(function(error){
			res.json({message: error});
		})
	},

	getUsersSocialsCreate: function(req, res){
		knex.schema.dropTableIfExists('users_socials')
		.then(function(){
			knex.schema.createTable('users_socials', function(table){
				table.increments('id').primary();
				table.enu('type', ['local', 'facebook', 'google', 'twitter']);
				table.text('token');
				table.timestamp('last_login');
				table.integer('created_by');
				table.integer('updated_by');
				table.timestamps();
				table.boolean('deleted');
			})
			.then(function(){
				res.json({message: 'Table users_socials created successfully'});
			})
			.catch(function(error){
				res.json({message: error});
			})
		})
		.catch(function(error){
			res.json({message: error});
		})
	}
}