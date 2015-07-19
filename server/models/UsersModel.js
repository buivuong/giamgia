var Constraints = {
	first_name: {
		presence: true
	},
	last_name: {
		presence: true
	},
	username: {
		presence: true
	},
	password: {
		presence: true,
		length: {
			minimum: 6,
			tooShort: 'SIGNUP_ERR_MIN_PASSWORD'
		}
	},
	password_repeat: {
		presence: true,
		length: {
			minimum: 6,
			tooShort: 'SIGNUP_ERR_MIN_PASSWORD_REPEAT'
		}
	},
	month: {
		presence: true
	},
	day: {
		presence: true
	},
	year: {
		presence: true
	},
	email: {
		presence: true,
		email: true
	},
	country: {
		presence: true
	}
}

module.exports = Constraints;