var React = require('react');
var Router = require('react-router');
var Home = require('./modules/home/parts/home.jsx');
var App = require('./modules/app.jsx');

var css = require('./libs/semantic/dist/semantic.css');
var facebookConnect = require('facebook-connect');

var jquery = require('jquery-browserify');
var semantic = require('semantic-ui');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="home" handler={Home}/>
	</Route>
);

var router = Router.create({
	routes: routes
});

router.run(function(Handler, state){
	React.render(<Handler/>, document.body);
});