var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = require('app');
var Home = require('modules/home/index');

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="home" handler={Home}/>
	</Route>
);

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.body);
});