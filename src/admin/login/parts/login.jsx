var React = require('react');
var Icon = require('../../../components/icon.jsx');
var Validation = require('../../../config/validation.jsx');
var $ = require('jquery-browserify');
var _ = require('lodash');
var moment = require('moment');
var Dialog = require('../../../components/dialog.jsx');
var LoginModel = require('../models/login.jsx');
var Confirm = require('../../../components/confirm.jsx');

var Login = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	contextTypes: {
		router: React.PropTypes.func,
		validEmail: React.PropTypes.object,
		validPassword: React.PropTypes.object,
		validPasswordRepeat: React.PropTypes.object
	},
	componentWillMount: function(){
		this.context.validEmail = {id: 'admin_login_email', input: ''};
		this.context.validPassword = {id: 'admin_login_password', input: ''};
	},
	getInitialState: function(){
		return {
			email: '',
			password: ''
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
			{type: 'min', message: 'Ít nhất phải là 6 ký tự', min: 6}
		];

		if(!_.isUndefined(event))
			this.setState({password: event.target.value});

		return Validation.divErrorWithInputGroup(this.context.validPassword);
	},
	onSubmit: function(){
		var valid_all = true;

		valid_all = this.onChangeEmail();
		valid_all = this.onChangePassword();

		var postData = {
			email: this.state.email,
			password: this.state.password
		}

		if(valid_all){
			this.props.setLoader(true);
			LoginModel.login(postData)
			.then(function(response){
				localStorage.setItem('admin_user', JSON.stringify(response.data));
				this.context.router.transitionTo('admin_dashboard');
			}.bind(this), function(error){
				this.props.setLoader(false);
				if(error.field === 'email'){
					this.context.validEmail.message = error.message;
					Validation.divErrorWithInputGroupFromServer(this.context.validEmail);
				}else if(error.field === 'password'){
					this.context.validPassword.message = error.message;
					Validation.divErrorWithInputGroupFromServer(this.context.validPassword);
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
				<Confirm header="Thông báo" ref="dialog_active_error" type="error">
					Tài khoản của bạn chưa xác nhận email. Mời bạn xác nhận email rồi đăng nhập lại.
				</Confirm>
				<Confirm header="Thông báo" ref="dialog_deleted_error" type="error">
					Tài khoản của bạn đã bị khóa
				</Confirm>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="email" size="18"/>
							</span>
							<input className="form-control" id="admin_login_email" type="text" placeholder="Địa chỉ email" value={this.state.email} onChange={this.onChangeEmail} maxLength="100"/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="lock" size="18" />
							</span>
							<input className="form-control" id="admin_login_password" type="password" placeholder="Mật khẩu" value={this.state.password} onChange={this.onChangePassword} maxLength="12"/>
						</div>
					</div>
				</div>

				<div className="row" style={{marginTop: '10px'}}>
					<div className="col-md-12">
						<button className="btn btn-lg btn-info btn-block" type="button" onClick={this.onSubmit}>
							Đăng nhập
						</button>
					</div>
				</div>

				<p className="footer" style={{marginTop: '10px'}}>
					Hệ thống của chúng tôi. Bản quyền @.
				</p>
			</span>
		)
	}
});

module.exports = Login;