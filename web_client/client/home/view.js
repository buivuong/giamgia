var View = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	onLogin: function(){
		this.context.router.transitionTo('client_login');
	},
	render: function(){
		return (
			<div>
				<button className="btn btn-primary" onClick={this.onLogin}>Login</button>
			</div>
		)
	}
});

module.exports = View;