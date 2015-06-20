var knex = require('../connect.js');

module.exports = {
	getAdminUsersCreate: function(req, res){
		knex.schema.dropTableIfExists('admin_users')
		.then(function(){
			knex.schema.createTable('admin_users', function(table){
				table.increments('id').primary();
				table.string('name', 150);
				table.string('email', 150);
				table.string('password', 150);
				table.dateTime('last_login_at');
				table.text('token');
				table.integer('parent').defaultTo(0);
				table.boolean('active');
				table.timestamps();
				table.boolean('deleted');
			})
			.catch(function(error){
				res.json({message: error});
			})
		})
		.catch(function(error){
			res.json({message: error});
		})
	},
	getShopTagsCreate: function(req, res){
		knex.schema.dropTableIfExists('shop_tags')
		.then(function(){
			knex.schema.createTable('shop_tags', function(table){
				table.increments('id').primary();
				table.string('name', 150);
				table.timestamps();
				table.integer('user_id');
				table.boolean('deleted');
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