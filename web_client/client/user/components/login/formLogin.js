var UserActions = require('client/user/UserActions');
var Config = require('config');

var FormLogin = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	onSubmit: function(event){
		this.refs.labelError.removeError();
		this.refs.loader.show();
		var serializedObject = this.refs.form.getSerializedObject();
			serializedObject.last_login_at = moment().tz(Config.serverTimezone).format("YYYY-MM-DD HH:mm:ss");
		UserActions.Login.triggerPromise(serializedObject)
		.then(function(response){
			Cookies.set('client', JSON.stringify(response.data));
			setTimeout(function(){
				this.context.router.transitionTo(Config.defaultClient);
			}.bind(this), 200)
			this.refs.loader.hide();
		}.bind(this))
		.catch(function(error){
			this.refs.labelError.addError(error.data.data);
			this.refs.loader.hide();
		}.bind(this));
	},
	render: function(){
		return (
			<Form ref="form" type="form" onSubmit={this.onSubmit}>
				<Loader ref="loader"/>
				<Title type="h4" className="nomargin">
					Sign In
				</Title>
				<Column className="mt5 mb20">
					Login to access your account.
				</Column>
				<LabelError ref="labelError" />
				<Input type="text"  className="form-control uname" name="username" placeholder="Username" ref="user_name"/>
				<Input type="password" className="form-control pword" name="password" placeholder="Password" ref="password"/>
				<Link>
					<Small>Forgot Your Password?</Small>
				</Link>
				<Button className="btn btn-primary btn-block" type="submit">
					Sign in
				</Button>
			</Form>
			);
	}
});
module.exports = FormLogin;