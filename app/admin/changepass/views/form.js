var React = require('react');
var Validation = require('Validation');
var Alert = require('Alert');
var ChangePassModel = require('admin/changepass/models/model');
var Cookies = require('cookies-js');

var Form = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	validation: {
		validPassword: {id: 'admin_changepass_password', input: null},
		validNewPassword: {id: 'admin_changepass_new_password', input: null},
		validNewPasswordRepeat: {id: 'admin_changepass_new_password_repeat', input: null}
	},
	getInitialState: function(){
		return {
			password: null,
			new_password: null,
			new_password_repeat: null
		}
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
	onChangeNewPassword: function(event){
		this.validation.validNewPassword.input = $('#'+this.validation.validNewPassword.id).val();

		this.validation.validNewPassword.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu mới nhập lại', 
				compare_field: {input: $('#'+this.validation.validNewPasswordRepeat.id).val(), id: this.validation.validNewPasswordRepeat.id, message: 'Phải giống mật khẩu mới'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({new_password: event.target.value});

		return Validation.divError(this.validation.validNewPassword);
	},
	onChangeNewPasswordRepeat: function(event){
		this.validation.validNewPasswordRepeat.input = $('#'+this.validation.validNewPasswordRepeat.id).val();

		this.validation.validNewPasswordRepeat.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu mới', 
				compare_field: {input: $('#'+this.validation.validNewPassword.id).val(), id: this.validation.validNewPassword.id, message: 'Phải giống mật khẩu mới nhập lại'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({new_password_repeat: event.target.value});

		return Validation.divError(this.validation.validNewPasswordRepeat);
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangePassword();
		valid_all = this.onChangeNewPassword();
		valid_all = this.onChangeNewPasswordRepeat();

		var email = null;
		if(Cookies.get('admin_user'))
			email = JSON.parse(Cookies.get('admin_user')).email

		var postData = {
			email: email,
			password: this.state.password,
			new_password: this.state.new_password
		}

		if(valid_all){
			this.props.setLoader(true);
			ChangePassModel.changePass(postData)
			.then(function(response){
				this.props.setLoader(false);
				this.refs.dialog_email_success.open();
			}.bind(this), function(error){
				this.props.setLoader(false);
				
				if(error.field === 'password'){
					this.validation.validPassword.message = error.message;
					Validation.divErrorServer(this.validation.validPassword);
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
					<p>Email không gửi được ! Mời bạn thay đổi lại lần nữa.</p>
				</Alert>
				<Alert header="Thông báo" ref="dialog_email_success">
					<h4>Thông báo</h4>
					<p>Thay đổi mật khẩu thành công.</p>
				</Alert>
				<form className="col s12">
					<div className="row margin">
						<div className="input-field col s6">
							<input id="admin_changepass_password" type="password" value={this.state.password} onChange={this.onChangePassword} maxLength="12"/>
							<label htmlFor="admin_changepass_password">Nhập mật khẩu cũ</label>
						</div>
					</div>
					<div className="row margin">
						<div className="input-field col s6">
							<input id="admin_changepass_new_password" type="password" value={this.state.new_password} onChange={this.onChangeNewPassword} maxLength="12"/>
							<label htmlFor="admin_changepass_new_password">Nhập mật khẩu mới</label>
						</div>
						<div className="input-field col s6">
							<input id="admin_changepass_new_password_repeat" type="password" value={this.state.new_password_repeat} onChange={this.onChangeNewPasswordRepeat} maxLength="12"/>
							<label htmlFor="admin_changepass_new_password_repeat">Nhập lại mật khẩu mới</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<a className="btn waves-effect waves-light col s3" onClick={this.onSubmit}>
								Xác nhận
							</a>
						</div>
					</div>
				</form>
			</span>
		);
	}
});

module.exports = Form;