var Model = {
	first_name: {
		required: 'First name required',
		max: 'First name too long:150'
	},
	last_name: {
		required: 'Last Name Required',
		max: 'Last name too long:150'
	},
	email: {
		required: 'Email Required',
		email: 'Email Wrong !!!',
		max: 'Email too long:150'
	},
	username: {
		required: 'User Name Required',
		max: 'Username too long:150'
	},
	password: {
		required: 'Password Required',
		min: 'Password at least 6 characters:6',
		max: 'Password too long:16'
	}
}

module.exports = Model;