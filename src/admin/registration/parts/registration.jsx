var React = require('react');
var Icon = require('../../../components/icon.jsx');
var Validation = require('../../../config/validation.jsx');
var $ = require('jquery-browserify');
var _ = require('lodash');
var RegistrationModel = require('../models/registration.jsx');
var moment = require('moment');

var Registration = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	contextTypes: {
		validEmail: React.PropTypes.object,
		validPassword: React.PropTypes.object,
		validPasswordRepeat: React.PropTypes.object
	},
	componentWillMount: function(){
		this.context.validEmail = {id: 'admin_registration_email', input: ''};
		this.context.validPassword = {id: 'admin_registration_password', input: ''};
		this.context.validPasswordRepeat = {id: 'admin_registration_password_repeat', input: ''};
	},
	getInitialState: function(){
		return {
			email: '',
			password: '',
			password_repeat: ''
		}
	},
	onChangeEmail: function(event){
		this.context.validEmail.input = $('#'+this.context.validEmail.id).val();
		this.context.validEmail.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'email', message: 'Phải là email chính xác'}
		];

		if(!_.isUndefined(event))
			this.setState({email: event.target.value});

		return Validation.divErrorWithInputGroup(this.context.validEmail);
	},
	onChangePassword: function(event){
		this.context.validPassword.input = $('#'+this.context.validPassword.id).val();

		this.context.validPassword.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu nhập lại', 
				compare_field: {input: $('#'+this.context.validPasswordRepeat.id).val(), id: this.context.validPasswordRepeat.id, message: 'Phải giống mật khẩu'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({password: event.target.value});

		return Validation.divErrorWithInputGroup(this.context.validPassword);
	},
	onChangePasswordRepeat: function(event){
		this.context.validPasswordRepeat.input = $('#'+this.context.validPasswordRepeat.id).val();

		this.context.validPasswordRepeat.errors = [
			{type: 'required', message: 'Bắt buộc nhập'},
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6},
			{type: 'compare', message: 'Phải giống mật khẩu', 
				compare_field: {input: $('#'+this.context.validPassword.id).val(), id: this.context.validPassword.id, message: 'Phải giống mật khẩu nhập lại'}
			}
		];

		if(!_.isUndefined(event))
			this.setState({password_repeat: event.target.value});

		return Validation.divErrorWithInputGroup(this.context.validPasswordRepeat);
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangeEmail();
		valid_all = this.onChangePassword();
		valid_all = this.onChangePasswordRepeat();

		var now = moment().format();

		var postData = {
			email: this.state.email, 
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
			}.bind(this), function(error){
				this.props.setLoader(false);
			}.bind(this))
		}
	},
	render: function(){
		return (
			<span>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="email" size="18"/>
							</span>
							<input className="form-control" id="admin_registration_email" type="text" placeholder="Địa chỉ email" value={this.state.email} onChange={this.onChangeEmail}/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="lock" size="18" />
							</span>
							<input className="form-control" id="admin_registration_password" type="password" placeholder="Mật khẩu" value={this.state.password} onChange={this.onChangePassword}/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="lock" size="18" />
							</span>
							<input className="form-control" id="admin_registration_password_repeat" type="password" placeholder="Nhập lại mật khẩu" value={this.state.password_repeat} onChange={this.onChangePasswordRepeat}/>
						</div>
					</div>
				</div>

				<div className="row" style={{marginTop: '10px'}}>
					<div className="col-md-12">
						<button className="btn btn-lg btn-info btn-block" type="button" onClick={this.onSubmit}>
							Đăng ký tài khoản
						</button>
					</div>
				</div>

				<p className="footer" style={{marginTop: '10px'}}>
					Đăng ký tài khoản cửa hiệu vào hệ thống của chúng tôi. Bản quyền @.
				</p>
			</span>
		);
	}
});

module.exports = Registration;