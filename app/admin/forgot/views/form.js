var React = require('react');
var Validation = require('Validation');
var Alert = require('Alert');
var ForgotModel = require('admin/forgot/models/model');

var Form = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	validation: {
		validEmail: {id: 'admin_forgot_email', input: null}
	},
	contextTypes: {
		router: React.PropTypes.func
	},
	goToLogin: function(){
		this.context.router.transitionTo('admin_login');
	},
	getInitialState: function(){
		return {
			email: null
		}
	},
	onChangeEmail: function(event){
		this.validation.validEmail.input = $('#'+this.validation.validEmail.id).val(); 
		this.validation.validEmail.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'email', message: 'Phải là email chính xác'}
		];

		if(!_.isUndefined(event))
			this.setState({email: event.target.value});

		return Validation.divError(this.validation.validEmail);
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangeEmail();

		var postData = {
			email: this.state.email
		}

		if(valid_all){
			this.props.setLoader(true);
			ForgotModel.forgot(postData)
			.then(function(response){
				this.props.setLoader(false);
				this.refs.dialog_email_success.open();
			}.bind(this), function(error){
				this.props.setLoader(false);
				if(error.field === 'email'){
					this.validation.validEmail.message = error.message;
					Validation.divErrorServer(this.validation.validEmail);
				}else if(error.type === 'email'){
					this.refs.dialog_email_error.open();
				}
			}.bind(this))
		}
	},
	render: function(){
		return (
			<span>
				<Alert ref="dialog_email_error">
					<h4>Thông báo</h4>
					<p>Email không gửi được. Mời bạn gửi lại</p>
				</Alert>
				<Alert ref="dialog_email_success">
					<h4>Thông báo</h4>
					<p>Email đã gửi thành công. Mời bạn xem email để biết mật khẩu đã đổi</p>
				</Alert>
				<form className="login-form" style={{width: '100%'}}>
					<div className="row">
						<div className="input-field col s12 center">
							<img src="images/logo.svg" className="circle responsive-img valign profile image-login" style={{width: '100px', height: '100px'}}/>
							<p className="center login-form-text">Quên mật khẩu</p>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-communication-email prefix"></i>
							<input id="admin_forgot_email" className="validate" type="text" value={this.state.email} onChange={this.onChangeEmail} maxLength="100"/>
							<label htmlFor="admin_forgot_email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<a className="btn waves-effect waves-light col s12" onClick={this.onSubmit}>
								Gửi email
							</a>
						</div>
					</div>
					<div className="row">
          				<div className="input-field col s12">
            				<p className="margin medium-small" onClick={this.goToLogin}>
            					<a>Quay về đăng nhập</a>
            				</p>
          				</div>
        			</div>
				</form>
			</span>
		);
	}
});

module.exports = Form;