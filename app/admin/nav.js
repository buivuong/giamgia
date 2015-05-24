var React = require('react');

var Nav = React.createClass({
	render: function(){
		return (
			<header className="page-topbar">
				<div className="navbar-fixed">
					<nav className="cyan">
						<div className="nav-wrapper">
							<h1 className="logo-wrapper">
								<a className="brand-logo darken-1">
									<img src="images/logo-2.png" style={{width: '200px', height: '34px'}}/>
								</a>
								<span className="logo-text">Cuối tháng đi đâu</span>
							</h1>
							<ul className="right hide-on-med-and-down">
                        		<li className="search-out">
                            		<input type="text" className="search-out-text"/>
                        		</li>
                        		<li>    
                            		<a className="waves-effect waves-block waves-light show-search">
                            			<i className="mdi-action-search"></i>
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
                        			<a className="waves-effect waves-block waves-light">
                        				<i className="mdi-hardware-keyboard-tab"></i>
                        			</a>
                        		</li>
                    		</ul>
						</div>
					</nav>
				</div>
			</header>
		);
	}
});

module.exports = Nav;