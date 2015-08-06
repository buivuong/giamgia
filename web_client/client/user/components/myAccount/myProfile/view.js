var Identification = require('client/user/components/myAccount/myProfile/identification');
var PersonalInformation = require('client/user/components/myAccount/myProfile/personalInfomation');
var MyProfile = React.createClass({
	render: function(){
		return (
			<div>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box"></Box>
					<Header className="header-title">
						<Title type="h2" className="dashboard">
							My Profile
						</Title>
					</Header>
					<Divider />
				</Box>
				<Identification />
				<PersonalInformation />
			</div>
			);
	}
});
module.exports = MyProfile;