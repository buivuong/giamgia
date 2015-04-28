var React = require('react');
var SecurityService = require('../../../security/models/security.jsx');
var _ = require('underscore');
var jquery = require('jquery-browserify');

var Registration = React.createClass({
	getInitialState: function(){
		return {
			email: '', 
			password: ''
		}
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
	onRegister: function(){
		var postData = {email: this.state.email, password: this.state.password};

		this.validation();

		SecurityService.register(postData)
		.then(function(response){

		}, function(response){
			_.each(response.errors, function(error){
				switch(error.field){
					case 'email':
						jquery(React.findDOMNode(this.refs.email)).addClass('error');
						jquery(React.findDOMNode(this.refs.email)).append('<div class="ui red pointing prompt label transition visible">'+error.message+'</div>');
						break;
					case 'password':
						jquery(React.findDOMNode(this.refs.password)).addClass('error');
						jquery(React.findDOMNode(this.refs.password)).append('<div class="ui red pointing prompt label transition visible">'+error.message+'</div>');
						break;
				}
			}.bind(this))
		}.bind(this))
	},
	validation: function(){
		jquery(React.findDOMNode(this.refs.email)).removeClass('error');
		jquery(React.findDOMNode(this.refs.email)).find('.label').remove();
		jquery(React.findDOMNode(this.refs.password)).removeClass('error');
		jquery(React.findDOMNode(this.refs.password)).find('.label').remove();		
	},
	reset: function(){
		this.setState({email: ''});
		this.setState({password: ''});

		this.validation();
	},
	render: function(){
		return (
			<div className="ui form">
				<div className="field" ref="email">
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="Địa chỉ Email" type="text" value={this.state.email} onChange={this.onChange.bind(this, 'email')} />
				</div>
				<div className="field" ref="password">
					<label htmlFor="password">Mật khẩu</label>
					<input name="password" placeholder="Mật khẩu" type="password" value={this.state.password} onChange={this.onChange.bind(this, 'password')} />
				</div>
				<div className="field">
					<button className="ui button" onClick={this.onRegister}>Đăng ký</button>
				</div>
			</div>
		)
	}
});

module.exports = Registration;