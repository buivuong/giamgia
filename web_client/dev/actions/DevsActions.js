var DevsActions = Reflux.createActions({
	add: {children: ["completed","failed"]},
	list: {children: ["completed","failed"]}
});

module.exports = DevsActions;