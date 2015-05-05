var React = require('react');
var Router = require('react-router');
var Home = require('./modules/home/parts/home.jsx');
var App = require('./modules/app.jsx');

var font_google = require('./libs/theme/font-google.css');

var bootstrap = require('./libs/bootstrap/css/bootstrap.css');
var bootstrap_theme = require('./libs/bootstrap/css/bootstrap-theme.css');

/* THEME */
var theme_style = require('./libs/theme/style.css');
var theme_responsive = require('./libs/theme/responsive.css');
var theme_animate = require('./libs/theme/animate.css');
/* END THEME */

var facebookConnect = require('facebook-connect');

/* ADMIN */
var Admin = require('./admin/admin.jsx');
var Admin_Registration = require('./admin/registration/parts/template.jsx');
/* END ADMIN */

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="home" handler={Home}/>
		<Route name="admin" handler={Admin}>
			<Route name="registration" handler={Admin_Registration}/>
		</Route>
	</Route>
);

var router = Router.create({
	routes: routes
});

router.run(function(Handler, state){
	React.render(<Handler/>, document.body);
});