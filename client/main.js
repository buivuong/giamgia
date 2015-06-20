var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = require('app');
var Admin = require('modules/admin/admin');
var Admin_Registration = require('modules/admin/registration/template');
var Admin_Login = require('modules/admin/login/template');

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="admin" handler={Admin}>
			<Route name="admin_registration" path="registration" handler={Admin_Registration}/>
			<Route name="admin_login" path="login" handler={Admin_Login}/>
		</Route>
	</Route>
);

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.body);
});