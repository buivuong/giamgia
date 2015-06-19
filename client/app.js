var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	/*componentDidMount: function(){
		var loader = '<div class="loader-wrapper">'
				+ '<div class="loader"></div>'
				+ '<div class="loader-section section-left"></div>'
				+ '<div class="loader-section section-right"></div>'
				+ '</div>';

		$('body').append(loader);
	},*/
	render: function(){
		return (
			<RouteHandler/>
		);
	}
});

module.exports = App;