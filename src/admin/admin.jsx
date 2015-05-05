var React = require('react');
var Router = require('react-router');
var Navbar = require('./navbar.jsx');

var RouteHandler = Router.RouteHandler;

var Admin = React.createClass({
	render: function(){
		return (
			<section className="content">
				<Navbar/>
				
				<RouteHandler/>
			</section>
		);
	}
});

module.exports = Admin;