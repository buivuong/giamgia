var React = require('react');
var validation = require('../../../config/validation.jsx');
var $ = require('jquery-browserify');
var Icon = require('../../../config/icon.jsx');

var ReactIntl = require('react-intl');

var Registration = React.createClass({
	contextTypes: {
		email: React.PropTypes.string,
		password: React.PropTypes.string,
		password_repeat: React.PropTypes.string
	},
	resetFormTypes: function(){
		this.context.email = '';
		this.context.password = '';
		this.context.password_repeat = '';
	},
	componentWillMount: function(){
		this.resetFormTypes();
	},
	validationCompare: function(){
		var password_value = $(React.findDOMNode(this.refs.password)).val().toString().trim();
		var password_repeat_value = $(React.findDOMNode(this.refs.password_repeat)).val().toString().trim();

		var error_compare = validation.divError('Phải giống với mật khẩu chính', 'error_password_compare');

		var password_value = $(React.findDOMNode(this.refs.password)).val().toString().trim();
		var password_repeat_value = $(React.findDOMNode(this.refs.password_repeat)).val().toString().trim();

		if(password_value !== password_repeat_value)
			$(React.findDOMNode(this.refs.password_repeat)).parent().addClass('error');
		else
			$(React.findDOMNode(this.refs.password_repeat)).parent().removeClass('error');

		if(password_value !== password_repeat_value){
			if(!$(React.findDOMNode(this.refs.password_repeat)).parent().find('#error_password_compare').length)
				$(React.findDOMNode(this.refs.password_repeat)).parent().append(error_compare);
		}else
			$(React.findDOMNode(this.refs.password_repeat)).parent().find('#error_password_compare').remove();
	},
	onChangeEmail: function(event){
		var error_required = validation.divError('Bạn phải nhập email', 'error_email_required');
		var error_email = validation.divError('Bạn nhập email chưa đúng', 'error_email_email');

		if(validation.isEmpty(event.target.value) 
			|| !validation.isEmail(event.target.value))
			$(React.findDOMNode(this.refs.email)).parent().addClass('error');
		else
			$(React.findDOMNode(this.refs.email)).parent().removeClass('error');

		if(validation.isEmpty(event.target.value))
			$(React.findDOMNode(this.refs.email)).parent().append(error_required);
		else{
			$(React.findDOMNode(this.refs.email)).parent().find('#error_email_required').remove();
		}

		if(!validation.isEmail(event.target.value)){
			if(!$(React.findDOMNode(this.refs.email)).parent().find('#error_email_email').length)
				$(React.findDOMNode(this.refs.email)).parent().append(error_email);
		}else
			$(React.findDOMNode(this.refs.email)).parent().find('#error_email_email').remove();
	},
	onChangePassword: function(event){
		var error_required = validation.divError('Bạn phải nhập mật khẩu', 'error_password_required');
		var error_min = 6;
		var error_min_text = validation.divError('Bạn phải nhập ít nhất '+error_min+' ký tự', 'error_password_min');

		if(validation.isEmpty(event.target.value)
			|| !validation.min(event.target.value, error_min))
			$(React.findDOMNode(this.refs.password)).parent().addClass('error');
		else
			$(React.findDOMNode(this.refs.password)).parent().removeClass('error');

		if(validation.isEmpty(event.target.value))
			$(React.findDOMNode(this.refs.password)).parent().append(error_required);
		else
			$(React.findDOMNode(this.refs.password)).parent().find('#error_password_required').remove();
		
		if(!validation.min(event.target.value, error_min)){
			if(!$(React.findDOMNode(this.refs.password)).parent().find('#error_password_min').length)
				$(React.findDOMNode(this.refs.password)).parent().append(error_min_text);
		}else
			$(React.findDOMNode(this.refs.password)).parent().find('#error_password_min').remove();

		this.validationCompare();
	},
	onChangePasswordRepeat: function(event){
		this.validationCompare();
	},
	render: function(){
		return (

			<div className="panel">
				<div className="panel-heading">
					<div className="title">
						<h2>
							<Icon icon="email" size="72"/>
							Thông tin cơ bản
						</h2>
					</div>
				</div>
				<div className="panel-body top-padding">
					<form className="basic-form" action="#" method="post">
	                	<label>Địa chỉ email</label>
	                	<input type="text" placeholder="Enter your e-mail" id="email" name="email"/>
	                	<label>Mật khẩu</label>
	                	<input type="text" placeholder="Enter your password" id="password" name="password"/>
	              	</form>
				</div>
			</div>

			/*<div className="ui form">
				<div className="required field">
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="Địa chỉ email" defaultValue={this.context.email} onChange={this.onChangeEmail} ref="email" maxLength="70"/>
				</div>
				<div className="required field">
					<label htmlFor="password">Mật khẩu</label>
					<input name="password" type="password" placeholder="Mật khẩu" defaultValue={this.context.password} onChange={this.onChangePassword} ref="password" maxLength="12"/>
				</div>
				<div className="required field">
					<label htmlFor="password_repeat">Nhập lại mật khẩu</label>
					<input name="password_repeat" type="password" placeholder="Nhập lại mật khẩu" defaultValue={this.context.password_repeat} onChange={this.onChangePasswordRepeat} ref="password_repeat" maxLength="12"/>
				</div>
				<div className="ui submit button">Đăng ký cửa hàng</div>
			</div>*/
		);
	}
});

module.exports = Registration;