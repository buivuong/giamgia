var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Cookies = require('cookies-js');

require('materialize');
require('materialize.css');
require('style.css');
require('google-connect');
require('google-mask-clusterer');
require('tipso.css');
require('tipso');

var App = require('app');
var Admin = require('admin/admin');
var Admin_Registration = require('admin/registration/views/template');
var Admin_Login = require('admin/login/views/template');
var Test = require('test');
var Admin_Forgot = require('admin/forgot/views/template');
var Admin_LoggedIn = require('admin/loggedIn');
var Admin_Dashboard = require('admin/dashboard/views/main');
var Admin_Shop_List = require('admin/shop/views/list/template');
/*var Admin_Shop_Add = require('admin/shop/views/add/template');*/

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="admin" handler={Admin}>
			<Route name="admin_registration" path="registration" handler={Admin_Registration}/>
			<Route name="admin_login" path="login" handler={Admin_Login}/>
			<Route name="admin_forgot" path="forgot" handler={Admin_Forgot}/>
			<Route name="loggedIn" handler={Admin_LoggedIn}>
				<Route name="admin_dashboard" path="dashboard" handler={Admin_Dashboard}/>
				<Route name="admin_shops" path="shops" handler={Admin_Shop_List}/>
				/*<Route name="admin_shops" path="shop/add" handler={Admin_Shop_Add}/>*/
			</Route>
		</Route>
		<Route name="test" handler={Test}/>
	</Route>
);

Router.run(routes, function(Handler){
	if(Cookies.get('admin_user')){
		var admin_user = JSON.parse(Cookies.get('admin_user'));

		$.ajaxPrefilter(function(options) {
	        options.beforeSend = function (xhr) {
	            xhr.setRequestHeader('Authorization', 'bearer '+admin_user.token);
	        }
		});
	}

	React.render(<Handler/>, document.body);
});