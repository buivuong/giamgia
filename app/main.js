var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

require('materialize');
require('materialize.css');
require('style.css');

var App = require('app');
var Admin = require('admin/admin');
var Admin_Registration = require('admin/registration/views/template');
var Admin_Login = require('admin/login/views/template');

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="admin" handler={Admin}>
			<Route name="admin_registration" path="registration" handler={Admin_Registration}/>
			<Route name="admin_login" path="login" handler={Admin_Login}/>
		</Route>
	</Route>
);

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