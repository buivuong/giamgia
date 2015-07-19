var UsersActions = Reflux.createActions({
	register: {children: ["completed","failed"]}
});

module.exports = UsersActions;