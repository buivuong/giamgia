var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Dev = React.createClass({
	render: function(){
		return (
			<div className="ui fluid container">
				<RouteHandler/>
			</div>
		)
	}
});

module.exports = Dev;