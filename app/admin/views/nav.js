var React = require('react');
var Cookies = require('cookies-js');
var Confirm = require('Confirm');
var Tooltip = require('Tooltip');

var Nav = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    logout_accept: function(){
        this.refs.dialog_logout.close();
        $.ajaxPrefilter(function(options) {
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('Authorization', 'bearer');
            }
        });
        Cookies.expire('admin_user');
        this.context.router.transitionTo('admin_login');
    },
    componentDidMount: function(){
        Tooltip.open({dom: React.findDOMNode(this.refs.menu_logout), content: 'Đăng xuất'});
        Tooltip.open({dom: React.findDOMNode(this.refs.menu_guide), content: 'Hướng dẫn chi tiết'});
    },
    logout: function(){
        this.refs.dialog_logout.open();
    },
	render: function(){
		return (
            <span>
                <Confirm ref="dialog_logout" onOk={this.logout_accept}>
                    <h4>Thông báo</h4>
                    <p>Bạn có đồng ý thoát ra khỏi chương trình không ?</p>
                </Confirm>
    			<header className="page-topbar">
    				<div className="navbar-fixed">
    					<nav className="cyan">
    						<div className="nav-wrapper">
    							<h1 className="logo-wrapper">
    								<a className="brand-logo darken-1">
    									<img src="images/logo-2.gif" style={{width: '200px', height: '34px'}}/>
    								</a>
    								<span className="logo-text">Cuối tháng đi đâu</span>
    							</h1>
    							<ul className="right hide-on-med-and-down">
                            		<li>    
                                		<a className="waves-effect waves-block waves-light"
                                            ref="menu_guide">
                                			<i className="mdi-social-public"></i>
                                		</a>
                            		</li>
                            		<li>
                            			<a className="waves-effect waves-block waves-light toggle-fullscreen">
                            				<i className="mdi-action-settings-overscan"></i>
                            			</a>
                            		</li>
                            		<li>
                            			<a className="waves-effect waves-block waves-light">
                            				<i className="mdi-social-notifications"></i>
                            			</a>
                            		</li>
                            		<li>
                            			<a className="waves-effect waves-block waves-light" onClick={this.logout}
                                            ref="menu_logout">
                            				<i className="mdi-hardware-keyboard-tab"></i>
                            			</a>
                            		</li>
                        		</ul>
    						</div>
    					</nav>
    				</div>
    			</header>
            </span>
		);
	}
});

module.exports = Nav;