var MyAccount = require('client/templates/myAccount');
var MyProfile = require('client/user/components/myAccount/myProfile/view');
var View  = React.createClass({
	onClickTab: function(keyRef){
		console.log(keyRef);
	},
	render: function(){
		return (
			<div>
				<div className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						My Account
					</Link>
					<Link className="quicklink color-grey">
						My Profile
					</Link>
				</div>
				<Wrap className="general-wrap">
					<MyAccount ref="myAccount" onClickTab={this.onClickTab}/>
				</Wrap>
				<MyProfile />
			</div>
			);
	}
});
module.exports = View;