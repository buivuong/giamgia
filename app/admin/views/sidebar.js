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
	componentDidMount: function(){
		$('#user_dropdown_button').dropdown();
	},
	goToDashboard: function(){
		this.context.router.transitionTo('admin_dashboard');
	},
	goToShops: function(){
		this.context.router.transitionTo('admin_shops');
	},
	goToChangepass: function(){
		this.context.router.transitionTo('admin_changepass');	
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
								<a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn"
									data-activates="user_dropdown" id="user_dropdown_button">
									{this.state.name}
									<i className="mdi-navigation-arrow-drop-down right"></i>
								</a>
								<ul id="user_dropdown" className="dropdown-content">
                                    <li>
                                        <a>
                                            Tiểu sử
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.goToChangepass}>
                                            Thay mật khẩu
                                        </a>
                                    </li>
                                </ul>
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
				</ul>
			</aside>
		);
	}
});

module.exports = Sidebar;