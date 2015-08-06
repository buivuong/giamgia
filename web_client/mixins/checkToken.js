var UserActions = require('client/user/UserActions');
var UserStore = require('client/user/UserStore');

var checkToken = {
	contextTypes: {
		router: React.PropTypes.func
	},
	user: null,
	componentDidMount: function(){
		UserActions.checkToken.triggerPromise()
		.then(function(response){})
		.catch(function(error){
			this.context.router.transitionTo('client_login');
		}.bind(this))

		var client = JSON.parse(Cookies.get('client'));
		this.user = client;
	},
	componentWillUnmount: function(){
		this.user = null;
	}
}

module.exports = checkToken;