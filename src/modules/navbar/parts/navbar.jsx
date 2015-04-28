/* INCLUDE MODULE */
var React = require('react');
var NavbarItem = require('./item.jsx');
var Dialog = require('../../../components/dialog.jsx');
var FormLogin = require('../../../modules/security/login/parts/form.jsx');
var FormRegistration = require('../../../modules/security/registration/parts/form.jsx');
var FacebookLogin = require('../../../modules/security/login/parts/facebookLogin.jsx');
/* END INCLUDE MODULE */

/* DECLARE VARIABLES */
/* END DECLARE VARIABLES */

/* MAIN MODULE */
var Navbar = React.createClass({
	getInitialState: function(){
		return {
			isLoginLoad: false,
			isRegistrationLoad: false
		}
	},
	clickNavbarItem: function(item){
		switch(item){
			case 'login':
				this.refs.dialog.show();
				this.setState({isLoginLoad: true});
				break;
			case 'register':
				this.refs.registrationDialog.show();
				this.setState({isRegistrationLoad: true});
				break;

		}
	},
	render: function(){
		return (
			<div className="ui inverted menu">
				<NavbarItem text="Trang chủ" />
				<div className="right menu">
					<NavbarItem text="Đăng ký" onClickItem={this.clickNavbarItem.bind(this,'register')} />
					<NavbarItem text="Đăng nhập" onClickItem={this.clickNavbarItem.bind(this,'login')} />
					<NavbarItem text="Hướng dẫn sử dụng" onClickItem={this.clickNavbarItem.bind(this,'guide')} />
				</div>

				<Dialog ref="dialog" size="small">
					<div className="header">
						Đăng nhập sử dụng hay <FacebookLogin/>
					</div>
					<div className="content">
						<FormLogin isLoad={this.state.isLoginLoad}/>
					</div>
				</Dialog>

				<Dialog ref="registrationDialog" size="small">
					<div className="header">
						Đăng ký sử dụng, chỉ với hai bước
					</div>
					<div className="content">
						<FormRegistration isLoad={this.state.isRegistrationLoad}/>
					</div>
				</Dialog>
			</div>
		);
	}
});
/* END MAIN MODULE */

module.exports = Navbar;