var React = require('react');
var Router = require('react-router');
var Nav = require('admin/nav');

var RouteHandler = Router.RouteHandler;

var LoggedIn = React.createClass({
	render: function(){
		return (
			<span>
				<Nav/>
				<RouteHandler/>
			</span>
		);
	}
});

module.exports = LoggedIn;