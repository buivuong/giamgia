var React = require('react');
var Router = require('react-router');
var Nav = require('admin/views/nav');

var RouteHandler = Router.RouteHandler;

var LoggedIn = React.createClass({
	render: function(){
		return (
			<span>
				<Nav/>
				<div id="main">
					<div className="wrapper">

					</div>
				</div>
				<RouteHandler/>
			</span>
		);
	}
});

module.exports = LoggedIn;