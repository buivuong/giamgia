var UserActions = require('client/user/UserActions');
var UserStore = require('client/user/UserStore');

var checkNoToken = {
	contextTypes: {
		router: React.PropTypes.func
	},
	componentWillMount: function(){
		UserActions.checkToken.triggerPromise()
		.then(function(response){
			this.context.router.transitionTo('client_consultation');
		}.bind(this))
		.catch(function(error){}.bind(this))
	}
}

module.exports = checkNoToken;