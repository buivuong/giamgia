var React = require('react');
var Login_Form = require('modules/admin/login/form');

var Template = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	render: function(){
		return (
			<div className="ui one column stackable center aligned page grid">
   				<div className="column six wide" style={{marginTop: '30px', textAlign: 'left'}}>
       				<Login_Form/>
       				<a>Quên mật khẩu ?</a>
   				</div>
			</div>
		);
	}
});

module.exports = Template;