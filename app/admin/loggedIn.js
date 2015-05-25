var React = require('react');
var Router = require('react-router');
var Nav = require('admin/views/nav');
var Sidebar = require('admin/views/sidebar');

var RouteHandler = Router.RouteHandler;

var LoggedIn = React.createClass({
	render: function(){
		return (
			<span>
				<Nav/>
				<div id="main">
					<div className="wrapper">
						<Sidebar/>
						<RouteHandler/>
					</div>
				</div>
			</span>
		);
	}
});

module.exports = LoggedIn;