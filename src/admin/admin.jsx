var React = require('react');
var Router = require('react-router');
var Left_Menu = require('./lmenu.jsx');

var RouteHandler = Router.RouteHandler;

var Admin = React.createClass({
	render: function(){
		return (
			<section className="content">
				<Left_Menu/>
				<RouteHandler/>
			</section>
		);
	}
});

module.exports = Admin;