var Identification = require('client/user/components/myAccount/loginCredential/identification');
var PhoneAndPin = require('client/user/components/myAccount/loginCredential/phoneAndPin');

var View = React.createClass({
	getInitialState: function(){
		return {
			display: "none"
		};
	},
	show: function(){
		this.setState({
			display: "block"
		});
	},
	hide: function(){
		this.setState({
			display: "none"
		});
	},
	render: function(){
		return (
			<div style={{display: this.state.display}}>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box">
						<Header className="header-title">
							<Title type="h2" className="dashboard">
								Login Credentials
							</Title>
						</Header>
					</Box>
					<Divider />
				</Box>
				<Box className="general-wrap myaccount-box margin-bottom-large margin-top-large">
					<Row className="row">
						<Column className="col-xs-12">
							<Identification />
							<PhoneAndPin />
						</Column>
					</Row>
				</Box>
			</div>
			);
	}
});
module.exports = View;