var React = require('react');
var SecurityService = require('../../../security/models/security.jsx');
var _ = require('underscore');
var jquery = require('jquery-browserify');
var validation = require('../../../../config/validation.jsx');

var Registration = React.createClass({
	contextTypes: {
		email: React.PropTypes.string,
		password: React.PropTypes.string,
		password_repeat: React.PropTypes.string
	},
	componentWillMount: function(){
		this.context.email = '';
		this.context.password = '';
		this.context.password_repeat = '';
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.isLoad)
			this.reset();
	},
	onChange: function(input, event){
		switch(input){
			case 'email':
				if(validation.isEmpty(event.target.value)){
					jquery(React.findDOMNode(this.refs.email)).addClass('error');

					jquery(React.findDOMNode(this.refs.email)).find('.label').remove();
					var divError = '<div class="ui red pointing label">Email bắt buộc nhập.</div>';
					jquery(React.findDOMNode(this.refs.email)).append(divError);
				}else
					jquery(React.findDOMNode(this.refs.email)).removeClass('error');

				if(validation.isEmail(event.target.value)){
					jquery(React.findDOMNode(this.refs.email)).addClass('error');

					jquery(React.findDOMNode(this.refs.email)).find('.label').remove();
					var divError = '<div class="ui red pointing label">Địa chỉ Email nhập sai.</div>';
					jquery(React.findDOMNode(this.refs.email)).append(divError);
				}
				else
					jquery(React.findDOMNode(this.refs.email)).removeClass('error');				
				break;
			case 'password':
				if(validation.isEmpty(event.target.value))
					jquery(React.findDOMNode(this.refs.password)).addClass('error');
				else
					jquery(React.findDOMNode(this.refs.password)).removeClass('error');
				break;
			case 'password_repeat':
				if(validation.isEmpty(event.target.value))
					jquery(React.findDOMNode(this.refs.password_repeat)).addClass('error');
				else
					jquery(React.findDOMNode(this.refs.password_repeat)).removeClass('error');
				break;
		}
	},
	onRegister: function(){
		//var postData = {email: this.state.email, password: this.state.password};

		this.validation();

		SecurityService.register(postData)
		.then(function(response){

		}, function(response){
			_.each(response.errors, function(error){
				/*switch(error.field){
					case 'email':
						jquery(React.findDOMNode(this.refs.email)).addClass('error');
						jquery(React.findDOMNode(this.refs.email)).append('<div class="ui red pointing prompt label transition visible">'+error.message+'</div>');
						break;
					case 'password':
						jquery(React.findDOMNode(this.refs.password)).addClass('error');
						jquery(React.findDOMNode(this.refs.password)).append('<div class="ui red pointing prompt label transition visible">'+error.message+'</div>');
						break;
				}*/
			}.bind(this))
		}.bind(this))
	},
	validation: function(){
		jquery(React.findDOMNode(this.refs.email)).removeClass('error');
		jquery(React.findDOMNode(this.refs.password)).removeClass('error');
		jquery(React.findDOMNode(this.refs.password_repeat)).removeClass('error');
	},
	reset: function(){
		this.validation();
	},
	render: function(){
		return (
			<div className="ui form">
				<div className="field" ref="email">
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="Địa chỉ Email" type="text" defaultValue={this.context.email} onChange={this.onChange.bind(this, 'email')} />
				</div>
				<div className="field" ref="password">
					<label htmlFor="password">Mật khẩu</label>
					<input name="password" placeholder="Mật khẩu" type="password" defaultValue={this.context.password} onChange={this.onChange.bind(this, 'password')} />
				</div>
				<div className="field" ref="password_repeat">
					<label htmlFor="password">Nhập lại mật khẩu</label>
					<input name="password" placeholder="Nhập lại mật khẩu" type="password" defaultValue={this.context.password_repeat} onChange={this.onChange.bind(this, 'password_repeat')} />
				</div>
				<div className="field">
					<button className="ui button" onClick={this.onRegister}>Đăng ký</button>
				</div>
			</div>
		)
	}
});

module.exports = Registration;