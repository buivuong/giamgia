var React = require('react');
var Validation = require('Validation');
var Alert = require('Alert');
var RegistrationModel = require('admin/registration/models/model');

var Form = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	validation: {
		validEmail: {id: 'admin_registration_email', input: null},
		validName: {id: 'admin_registration_name', input: null},
		validPassword: {id: 'admin_registration_password', input: null},
		validPasswordRepeat: {id: 'admin_registration_password_repeat', input: null},
	},
	getInitialState: function(){
		return {
			email: null,
			name: null,
			password: null,
			password_repeat: null
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
	onChangeName: function(event){
		this.validation.validName.input = $('#'+this.validation.validName.id).val(); 
		this.validation.validName.errors = [
			{type: 'required', message: 'Bắt buộc nhập'}
		];

		if(!_.isUndefined(event))
			this.setState({name: event.target.value});

		return Validation.divError(this.validation.validName);
	},
	onChangePassword: function(event){
		this.validation.validPassword.input = $('#'+this.validation.validPassword.id).val();

		this.validation.validPassword.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu nhập lại', 
				compare_field: {input: $('#'+this.validation.validPasswordRepeat.id).val(), id: this.validation.validPasswordRepeat.id, message: 'Phải giống mật khẩu'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({password: event.target.value});

		return Validation.divError(this.validation.validPassword);
	},
	onChangePasswordRepeat: function(event){
		this.validation.validPasswordRepeat.input = $('#'+this.validation.validPasswordRepeat.id).val();

		this.validation.validPasswordRepeat.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu', 
				compare_field: {input: $('#'+this.validation.validPassword.id).val(), id: this.validation.validPassword.id, message: 'Phải giống mật khẩu nhập lại'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({password_repeat: event.target.value});

		return Validation.divError(this.validation.validPasswordRepeat);
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangeEmail();
		valid_all = this.onChangeName();
		valid_all = this.onChangePassword();
		valid_all = this.onChangePasswordRepeat();

		var now = moment().format();

		var postData = {
			email: this.state.email, 
			name: this.state.name,
			password: this.state.password,
			last_login_at: now,
			created_at: now,
			updated_at: now,
			active: 0,
			deleted: 0
		};

		if(valid_all){
			this.props.setLoader(true);
			RegistrationModel.registration(postData)
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
				<Alert header="Thông báo" ref="dialog_email_error">
					<h4>Thông báo</h4>
					<p>Email không gửi được ! Mời bạn đăng ký lại lần nữa.</p>
				</Alert>
				<Alert header="Thông báo" ref="dialog_email_success">
					<h4>Thông báo</h4>
					<p>Đăng ký thành công. Mời bạn vui lòng kiểm tra email để xác nhận.</p>
				</Alert>			
				<form className="login-form" style={{width: '100%'}}>
					<div className="row">
						<div className="input-field col s12 center">
							<h4>Đăng ký</h4>
							<p className="center">Cuối tháng đi đâu ?</p>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-communication-email prefix"></i>
							<input id="admin_registration_email" className="validate" type="text" value={this.state.email} onChange={this.onChangeEmail} maxLength="100"/>
							<label htmlFor="admin_registration_email">Email</label>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-social-person prefix"></i>
							<input id="admin_registration_name" className="validate" type="text" value={this.state.name} onChange={this.onChangeName} maxLength="100"/>
							<label htmlFor="admin_registration_name">Tên người dùng</label>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-action-lock prefix"></i>
							<input id="admin_registration_password" type="password" value={this.state.password} onChange={this.onChangePassword} maxLength="12"/>
							<label htmlFor="admin_registration_password">Mật khẩu</label>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s12">
							<i className="mdi-action-lock prefix"></i>
							<input id="admin_registration_password_repeat" type="password" value={this.state.password_repeat} onChange={this.onChangePasswordRepeat} maxLength="12"/>
							<label htmlFor="admin_registration_password_repeat">Nhập lại mật khẩu</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<a className="btn waves-effect waves-light col s12" onClick={this.onSubmit}>
								Đăng ký tài khoản
							</a>
						</div>
					</div>
				</form>
			</span>
		);
	}
});

module.exports = Form;