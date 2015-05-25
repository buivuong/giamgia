var React = require('react');
var Cookies = require('cookies-js');

var Sidebar = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	getInitialState: function(){
		return {
			name: null
		}
	},
	componentWillMount: function(){
		if(Cookies.get('admin_user')){
			var admin_user = JSON.parse(Cookies.get('admin_user'));
			this.setState({name: admin_user.name});
		}else this.setState({name: 'No Name'});
	},
	goToDashboard: function(){
		this.context.router.transitionTo('admin_dashboard');
	},
	goToShops: function(){
		this.context.router.transitionTo('admin_shops');
	},
	render: function(){
		return (
			<aside id="left-sidebar-nav">
				<ul id="slide-out" className="side-nav fixed leftside-navigation ps-container ps-active-y" style={{width: '240px'}}>
					<li className="user-details cyan darken-2">
						<div className="row">
							<div className="col s4 m4 l4">
								<img src="images/avatar.jpg" className="circle responsive-img valign profile-image"/>
							</div>
							<div className="col s8 m8 l8">
								<a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn">{this.state.name}</a>
								<p className="user-roal">Quản trị</p>
							</div>
						</div>
					</li>
					<li className="bold">
						<a className="waves-effect waves-cyan" onClick={this.goToDashboard}>
							<i className="mdi-action-dashboard"></i> Trang chủ
						</a>
					</li>
					<li className="bold">
						<a className="waves-effect waves-cyan" onClick={this.goToShops}>
							<i className="mdi-action-store"></i> Các cửa hàng
							<span className="new badge">4</span>
						</a>
					</li>
					<li className="bold">
						<a className="waves-effect waves-cyan">
							<i className="mdi-social-person"></i> Quản lý người dùng
						</a>
					</li>
					<li className="bold">
						<a className="waves-effect waves-cyan">
							<i className="mdi-action-settings"></i> Thiết lập
						</a>
					</li>
				</ul>
			</aside>
		);
	}
});

module.exports = Sidebar;