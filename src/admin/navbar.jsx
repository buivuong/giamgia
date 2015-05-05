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
			</div>
		);
	}
});

module.exports = LeftMenu;