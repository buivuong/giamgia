var Identification = require('client/user/components/myAccount/myProfile/identification');
var PersonalInformation = require('client/user/components/myAccount/myProfile/personalInfomation');
var HealthInsurance = require('client/user/components/myAccount/myProfile/healthInsurance');
var MyChildren = require('client/user/components/myAccount/myProfile/myChildren');
var MyProfile = React.createClass({
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
					<Box className="img-box"></Box>
					<Header className="header-title">
						<Title type="h2" className="dashboard">
							My Profile
						</Title>
					</Header>
					<Divider />
				</Box>
				<Wrap className="general-wrap myaccount-box margin-bottom-large margin-top-large">
					<Row className="row">
						<Column className="col-xs-12">
							<Identification />
							<PersonalInformation />
							<HealthInsurance />
							<MyChildren />
						</Column>
					</Row>
				</Wrap>
			</div>
			);
	}
});
module.exports = MyProfile;