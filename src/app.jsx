var React = require('react');
var Router = require('react-router');
var Home = require('./modules/home/parts/home.jsx');
var App = require('./modules/app.jsx');
var $ = require('jquery-browserify');

var font_google = require('./libs/theme/font-google.css');

var bootstrap = require('./libs/bootstrap/css/bootstrap.css');
var bootstrap_theme = require('./libs/bootstrap/css/bootstrap-theme.css');

/* THEME */
var theme_style = require('./libs/theme/style.css');
var theme_responsive = require('./libs/theme/responsive.css');
var theme_animate = require('./libs/theme/animate.css');
/* END THEME */

//var facebookConnect = require('facebook-connect');

/* ADMIN */
var Admin = require('./admin/admin.jsx');
var Admin_Registration = require('./admin/registration/parts/template.jsx');
var Admin_Login = require('./admin/login/parts/template.jsx');
var Admin_Forgot = require('./admin/forgot/parts/template.jsx');

var LoggedIn = require('./admin/loggedIn.jsx');
var Admin_Dashboard = require('./admin/dashboard/parts/template.jsx');
/* END ADMIN */

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="admin" handler={Admin}>
			<Route name="admin_registration" path="registration" handler={Admin_Registration}/>
			<Route name="admin_login" path="login" handler={Admin_Login}/>
			<Route name="admin_forgot" path="forgot" handler={Admin_Forgot}/>
			<Route name="loggedIn" handler={LoggedIn}>
				<Route name="admin_dashboard" path="dashboard" handler={Admin_Dashboard}/>
			</Route>
		</Route>
	</Route>
);

var router = Router.create({
	routes: routes
});

Router.run(routes, function(Handler){
	if(localStorage.getItem('admin_user')){
		var admin_user = JSON.parse(localStorage.getItem('admin_user'));

		$.ajaxPrefilter(function(options) {
	        options.beforeSend = function (xhr) { 
	            xhr.setRequestHeader('Authorization', 'bearer '+admin_user.token);
	        }
		});
	}

	React.render(<Handler/>, document.body);
});