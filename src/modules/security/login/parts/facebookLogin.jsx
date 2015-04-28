var React = require('react');
var FacebookMixin = require('../../../../mixins/facebook.jsx');

var FacebookLogin = React.createClass({
	mixins: [FacebookMixin],
	clickLogin: function(){
		this.clickLoginFacebook();
	},
	render: function(){
		return (
			<div className="ui facebook button" onClick={this.clickLogin}>
  				<i className="facebook icon"></i>
  				Đăng nhập Facebook
			</div>
		);
	}
});

module.exports = FacebookLogin;