var React = require('react');
var Validation = require('Validation');
var Alert = require('Alert');
var LoginModel = require('admin/login/models/model');

var Form = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	validation: {
		validEmail: {id: 'admin_login_email', input: null},
		validPassword: {id: 'admin_login_password', input: null}
	},
	getInitialState: function(){
		return {
			email: null,
			password: null,
			remember_me: null
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
	onChangePassword: function(event){
		this.validation.validPassword.input = $('#'+this.validation.validPassword.id).val();

		this.validation.validPassword.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6}
		];

		if(!_.isUndefined(event))
			this.setState({password: event.target.value});

		return Validation.divError(this.validation.validPassword);
	},
	onChangeRemember: function(event){
		this.setState({remember_me: event.target.checked});
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangeEmail();
		valid_all = this.onChangePassword();

		var now = moment().format();

		var postData = {
			email: this.state.email,
			password: this.state.password,
			remember_me: this.state.remember_me
		}

		if(valid_all){
			this.props.setLoader(true);
			LoginModel.login(postData)
			.then(function(response){
				localStorage.setItem('admin_user', JSON.stringify(response.data));
				//this.context.router.transitionTo('admin_dashboard');
			}.bind(this), function(error){
				this.props.setLoader(false);
				if(error.field === 'email'){
					this.validation.validEmail.message = error.message;
					Validation.divErrorServer(this.validation.validEmail);
				}else if(error.field === 'password'){
					this.validation.validPassword.message = error.message;
					Validation.divErrorServer(this.validation.validPassword);
				}else if(error.type === 'active'){
					this.refs.dialog_active_error.open();
				}else if(error.type === 'deleted'){
					this.refs.dialog_deleted_error.open();
				}
			}.bind(this))
		}
	},
	render: function(){
		return (
			<span>
				<Alert ref="dialog_active_error">
					<h4>Thông báo</h4>
					<p>Tài khoản đăng ký của bạn chưa xác nhận. Mời bạn xác nhận thông qua email</p>
				</Alert>
				<Alert ref="dialog_deleted_error">
					<h4>Thông báo</h4>
					<p>Tài khoản của bạn đã bị khóa. Mời bạn liên hệ với admin</p>
				</Alert>
				<form className="login-form" style={{width: '100%'}}>
					<div className="row">
						<div className="input-field col s12 center">
							<img src="images/logo.svg" className="circle responsive-img valign profile image-login" style={{width: '100px', height: '100px'}}/>
							<p className="center login-form-text">Chào mừng bạn tới Cuối Tháng Đi Đâu</p>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-communication-email prefix"></i>
							<input id="admin_login_email" className="validate" type="text" value={this.state.email} onChange={this.onChangeEmail} maxLength="100"/>
							<label htmlFor="admin_login_email">Email</label>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-action-lock prefix"></i>
							<input id="admin_login_password" type="password" value={this.state.password} onChange={this.onChangePassword} maxLength="12"/>
							<label htmlFor="admin_login_password">Mật khẩu</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 login-text">
							<input type="checkbox" id="admin_login_remember" checked={this.state.remember_me} onChange={this.onChangeRemember}/>
							<label htmlFor="admin_login_remember">Nhớ mật khẩu</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<a className="btn waves-effect waves-light col s12" onClick={this.onSubmit}>
								Đăng nhập
							</a>
						</div>
					</div>
					<div className="row">
          				<div className="input-field col s12">
            				<p className="margin medium-small">
            					<a>Quên mật khẩu</a>
            				</p>
          				</div>
        			</div>
				</form>
			</span>
		);
	}
});

module.exports = Form;