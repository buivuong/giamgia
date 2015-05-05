/* INCLUDE MODULE */
var React = require('react');
var Router = require('react-router');
var AuthMixin = require('../mixins/auth.jsx');
var Navbar = require('../modules/navbar/parts/navbar.jsx');
/* END INCLUDE MODULE */

/* DECLARE VARIABLES */
var RouteHandler = Router.RouteHandler;
/* END DECLARE VARIABLES */

/* MAIN MODULE */
var App = React.createClass({
	mixins: [AuthMixin],
	contextTypes: {
		router: React.PropTypes.func
	},
	componentWillMount: function(){
		this.willTransitionTo(this.context.router);
	},
	render: function(){
		return (
			<RouteHandler/>
		);
	}
});
/* END MAIN MODULE */

module.exports = App;