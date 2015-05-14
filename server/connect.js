var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'root',
		database: 'ads'
	},
	debug: false
})

module.exports = knex;