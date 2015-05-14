var React = require('react');
var Icon = require('../../../components/icon.jsx');
var Validation = require('../../../config/validation.jsx');
var $ = require('jquery-browserify');
var _ = require('lodash');
var moment = require('moment');
var Dialog = require('../../../components/dialog.jsx');
var ForgotModel = require('../models/forgot.jsx');
var Confirm = require('../../../components/confirm.jsx');

var Forgot = React.createClass({
	propTypes: {
		setLoader: React.PropTypes.func
	},
	contextTypes: {
		validEmail: React.PropTypes.object
	},
	componentWillMount: function(){
		this.context.validEmail = {id: 'admin_forgot_email', input: ''};
	},
	getInitialState: function(){
		return {
			email: ''
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
					this.context.validEmail.message = error.message;
					Validation.divErrorWithInputGroupFromServer(this.context.validEmail);
				}else if(error.type === 'email'){
					this.refs.dialog_email_error.open();
				}
			}.bind(this))
		}
	},
	render: function(){
		return (
			<span>
				<Confirm header="Thông báo" ref="dialog_email_error" type="error">
					Email không gửi được ! Mời bạn thử lại lần nữa.
				</Confirm>
				<Confirm header="Thông báo" ref="dialog_email_success" type="success">
					Gửi email thành công. Mời bạn vui lòng kiểm tra email để xác nhận.
				</Confirm>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<Icon icon="email" size="18"/>
							</span>
							<input className="form-control" id="admin_forgot_email" type="text" placeholder="Địa chỉ email" value={this.state.email} onChange={this.onChangeEmail} maxLength="100"/>
						</div>
					</div>
				</div>

				<div className="row" style={{marginTop: '10px'}}>
					<div className="col-md-12">
						<button className="btn btn-lg btn-info btn-block" type="button" onClick={this.onSubmit}>
							Gửi email
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

module.exports = Forgot;