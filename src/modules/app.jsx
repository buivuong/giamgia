/* INCLUDE MODULE */
var React = require('react');
var Router = require('react-router');
/* END INCLUDE MODULE */

/* DECLARE VARIABLES */
var RouteHandler = Router.RouteHandler;
/* END DECLARE VARIABLES */

/* MAIN MODULE */
var App = React.createClass({
	render: function(){
		return (
			<RouteHandler/>
		);
	}
});
/* END MAIN MODULE */

module.exports = App;