var React = require('react');

var LeftMenu = React.createClass({
	render: function(){
		return (
			<div className="sidebar">
				<a>
					<div className="logo-container">
						<h1>Giảm giá</h1>
						<h4>Quản lý hệ thống</h4>
					</div>
				</a>
				<div className="sidebar-profile">
					<div className="user-avatar">
						<img alt="avatar" src="../images/avatar.png"/>
					</div>
					<div className="user-info">
						<a>Admin</a>
						<br/>
						<span>Quản trị hệ thống</span>
					</div>
					<div style={{marginTop: '10px'}}>
						<b style={{color: 'white'}}>buivuongdhmo@yahoo.com.vn</b>
					</div>
				</div>
				<ul className="menu">
					<li className="lightblue active">
						<a>
							<span className="menu-icon"></span>
							<span className="menu-text">Trang chủ</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = LeftMenu;