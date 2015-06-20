var React = require('react');
var RegistrationController = require('controllers/admin/registration.js');
var FormMixin = require('mixins/FormMixin');

var Form = React.createClass({
	id_pre: 'admin_registration_',
	mixins: [FormMixin],
	onClickSubmit: function(){
		RegistrationController.onClickSubmit(this);
	},
	render: function(){
		return (
			<div className="ui form segment">
				<h2 className="ui center aligned icon header">
					<i className="circular map marker icon"></i>
			  		Cuối tháng đi đâu
				</h2>
				<div className="field">
					<div className="ui left icon input">
						<input type="text" placeholder="Tên đăng ký" id={this.id_pre+'name'}/>
						<i className="user icon"></i>
					</div>
				</div>
				<div className="field">
					<div className="ui left icon input">
						<input type="text" placeholder="Địa chỉ email" id={this.id_pre+'email'}/>
						<i className="mail icon"></i>
					</div>
				</div>
				<div className="field">
					<div className="ui left icon input">
						<input type="password" placeholder="Mật khẩu" id={this.id_pre+'password'}/>
						<i className="lock icon"></i>
					</div>
				</div>
				<div className="field">
					<div className="ui left icon input">
						<input type="password" placeholder="Nhập lại mật khẩu" id={this.id_pre+'repeat_password'}/>
						<i className="lock icon"></i>
					</div>
				</div>
				<div className="field">
					<button className="ui fluid green button" onClick={this.onClickSubmit}>Đăng ký sử dụng</button>
				</div>
			</div>
		);
	}
});

module.exports = Form;