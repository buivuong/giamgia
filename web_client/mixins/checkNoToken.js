var UserActions = require('client/user/UserActions');
var UserStore = require('client/user/UserStore');
var Config = require('config');

var checkNoToken = {
	contextTypes: {
		router: React.PropTypes.func
	},
	componentDidMount: function(){
		UserActions.checkToken.triggerPromise()
		.then(function(response){
			this.context.router.transitionTo(Config.defaultClient);
		}.bind(this))
		.catch(function(error){}.bind(this))
	}
}

module.exports = checkNoToken;