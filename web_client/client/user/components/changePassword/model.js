var Model = {
	old_password: {
		required: 'Old password required',
		max: 'Old Password too long:150'
	},
	new_password: {
		required: 'New password required',
		min: 'New Password at least 6 characters:6',
		max: 'New Password too long:150'
	}
};
module.exports = Model;