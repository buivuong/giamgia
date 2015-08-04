var UserActions = Reflux.createActions({
	register: {children: ["completed","failed"]},
	checkUsername: {children: ["completed", "failed"]},
	checkEmail: {children: ["completed", "failed"]}
});

module.exports = UserActions;