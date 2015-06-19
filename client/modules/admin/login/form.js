var React = require('react');

var Form = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	render: function(){
		return (
			<div className="ui form segment">
				<h2 className="ui center aligned icon header">
					<i className="circular map marker icon"></i>
			  		Đăng nhập
				</h2>
				<div className="field">
					<div className="ui left icon input">
						<input type="text" placeholder="Địa chỉ email"/>
						<i className="mail icon"></i>
					</div>
				</div>
				<div className="field">
					<div className="ui left icon input">
						<input type="password" placeholder="Mật khẩu"/>
						<i className="lock icon"></i>
					</div>
				</div>
				<div className="field">
					<button className="ui fluid green button">Đăng nhập</button>
				</div>
			</div>
		);
	}
});

module.exports = Form;