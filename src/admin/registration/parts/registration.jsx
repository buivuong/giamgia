var React = require('react');
var Icon = require('../../../components/icon.jsx');
var Validation = require('../../../config/validation.jsx');
var $ = require('jquery-browserify');
var _ = require('lodash');

var Registration = React.createClass({
	contextTypes: {
		validShop: React.PropTypes.object,
		validEmail: React.PropTypes.object,
		validPassword: React.PropTypes.object,
		validPasswordRepeat: React.PropTypes.object
	},
	componentWillMount: function(){
		this.context.validShop = {id: 'admin_registration_shop', input: ''};
		this.context.validEmail = {id: 'admin_registration_email', input: ''};
		this.context.validPassword = {id: 'admin_registration_password', input: ''};
		this.context.validPasswordRepeat = {id: 'admin_registration_password_repeat', input: ''};
	},
	getInitialState: function(){
		return {
			shop: '',
			email: '',
			password: '',
			password_repeat: ''
		}
	},
	onChangeShop: function(event){
		this.context.validShop.input = $('#'+this.context.validShop.id).val();

		Validation.divEmptyWithInputGroup(this.context.validShop);

		if(!_.isUndefined(event))
			this.setState({shop: event.target.value});
	},
	onChangeEmail: function(event){
		this.context.validEmail.input = $('#'+this.context.validEmail.id).val();

		this.context.validEmail.message = 'Bắt buộc nhập';
		Validation.divEmptyWithInputGroup(this.context.validEmail);
		
		this.context.validEmail.message = 'Phải nhập email chính xác';
		Validation.divEmailWithInputGroup(this.context.validEmail);

		if(!_.isUndefined(event))
			this.setState({email: event.target.value});
	},
	onChangePassword: function(event){
		this.context.validPassword.input = $('#'+this.context.validPassword.id).val();

		this.context.validPassword.message = 'Bắt buộc nhập';
		Validation.divEmptyWithInputGroup(this.context.validPassword);

		this.context.validPassword.message = 'Phải nhập ít nhất 6 ký tự';
		
		Validation.divMinWithInputGroup(this.context.validPassword, 6);
		
		this.context.validPassword.message = 'Phải giống như mật khẩu nhập lại';
		this.context.validPasswordRepeat.message = 'Phải giống như mật khẩu chính';

		Validation.divCompareWithInputGroup(this.context.validPassword, this.context.validPasswordRepeat);

		if(!_.isUndefined(event))
			this.setState({password: event.target.value});
	},
	onChangePasswordRepeat: function(event){
		this.context.validPasswordRepeat.input = $('#'+this.context.validPasswordRepeat.id).val();

		this.context.validPasswordRepeat.message = 'Bắt buộc nhập';
		Validation.divEmptyWithInputGroup(this.context.validPasswordRepeat);

		
		this.context.validPasswordRepeat.message = 'Phải nhập ít nhất 6 ký tự';
		Validation.divMinWithInputGroup(this.context.validPasswordRepeat, 6);
		
		Validation.divMinWithInputGroup(this.context.validPasswordRepeat, 6);
		
		this.context.validPassword.message = 'Phải giống như mật khẩu nhập lại';
		this.context.validPasswordRepeat.message = 'Phải giống như mật khẩu chính';

		Validation.divCompareWithInputGroup(this.context.validPasswordRepeat, this.context.validPassword);

		if(!_.isUndefined(event))
			this.setState({password_repeat: event.target.value});
	},
	onSubmit: function(){
		this.onChangeShop();
		this.onChangeEmail();
		this.onChangePassword();
		this.onChangePasswordRepeat();
	},
	render: function(){
		return (
			<span>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="shop" size="18"/>
							</span>
							<input className="form-control" id="admin_registration_shop" type="text" placeholder="Tên cửa hiệu" value={this.state.shop} onChange={this.onChangeShop}/>
						</div>
					</div>
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
					Đăng ký tài khoản cửa hiệu vào hệ thống của chúng tôi. Bản quyền Redimed.
				</p>
			</span>
		);
	}
});

module.exports = Registration;