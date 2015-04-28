var React = require('react');
var SecurityModel = require('../../models/security.jsx');

var FormLogin = React.createClass({
	getInitialState: function(){
		return {email: '', password: ''};
	},
	onLogin: function(){
		var postData = {email: this.state.email, password: this.state.password};

		SecurityModel.login(postData)
		.then(function(result){
			console.log(result);
		});
	},
	reset: function(){
		this.setState({email: ''});
		this.setState({password: ''});
	},
	componentWillReceiveProps: function(nextProps){
		this.reset();
	},
	onChange: function(input, event){
		switch(input){
			case 'email':
				this.setState({email: event.target.value});
				break;
			case 'password':
				this.setState({password: event.target.value});
				break;
		}
	},
	render: function(){
		return (
			<div className="ui form">
				<div className="field">
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="Email Address" type="text" value={this.state.email} onChange={this.onChange.bind(this, 'email')} />
				</div>
				<div className="field">
					<label htmlFor="password">Password</label>
					<input name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
				</div>
				<div className="field">
					<button className="ui button" onClick={this.onLogin}>Login</button>
				</div>
			</div>
		);
	}
});

module.exports = FormLogin;