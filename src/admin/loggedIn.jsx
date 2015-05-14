var React = require('react');
var Router = require('react-router');
var Auth = require('../mixins/admin_auth.jsx');
var Left_Menu = require('./views/lmenu.jsx');

var RouteHandler = Router.RouteHandler;

var LoggedIn = React.createClass({
	mixins: [Auth],
	contextTypes: {
		router: React.PropTypes.func
	},
	render: function(){
		return (
			<section className="content">
				<Left_Menu/>
				<RouteHandler/>
			</section>
		);
	}
});

module.exports = LoggedIn;