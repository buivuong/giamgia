var Model = {
	//VALIDATION
	validation: {
		required: [
			{field: 'email', message: 'Email bắt buộc nhập'},
			{field: 'password', message: 'Mật khẩu bắt buộc nhập'}
		]
	}
	//END VALIDATION
}

module.exports = Model;