var UserActions = Reflux.createActions({
	register: {children: ["completed","failed"]},
	checkUsername: {children: ["completed", "failed"]},
	checkEmail: {children: ["completed", "failed"]},
	checkToken: {children: ["completed", "failed"]},
	login: {children: ["completed", "failed"]},
	checkOldPassword: {children: ["completed", "failed"]},
	changePassword: {children: ["completed", "failed"]}
});

module.exports = UserActions;