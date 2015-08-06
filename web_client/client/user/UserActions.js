var UserActions = Reflux.createActions({
	register: {children: ["completed","failed"]},
	checkUsername: {children: ["completed", "failed"]},
	checkEmail: {children: ["completed", "failed"]},
	checkToken: {children: ["completed", "failed"]},
	Login: {children: ["completed", "failed"]}
});

module.exports = UserActions;