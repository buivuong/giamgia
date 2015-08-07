var MyAccount = require('client/templates/myAccount');
var MyProfile = require('client/user/components/myAccount/myProfile/view');
var BuillingActivity = require('client/user/components/myAccount/billingActivity/billingActivity');
var LoginCredential = require('client/user/components/myAccount/loginCredential/view');
var PaymentInfomation = require('client/user/components/myAccount/paymentInfomation/paymentInfomation');

var View  = React.createClass({
	modules: null,
	mixins: [CheckToken],
	componentDidMount: function(){
		this.modules = ["myProfile", "paymentInfomation", "billingActivity", "loginCredential"];
		this.refs["myProfile"].show(); //set default
	},
	componenWillUnmount: function(){
		this.modules = null;
	},
	onClickTab: function(keyRef){
		for(var i = 0; i < this.modules.length; i++){
			if(this.modules[i] === keyRef){
				this.refs[this.modules[i]].show();
			}
			else{
				this.refs[this.modules[i]].hide();
			}
		}
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
				<MyProfile ref="myProfile"/>
				<PaymentInfomation ref="paymentInfomation"/>
				<BuillingActivity ref="billingActivity"/>
				<LoginCredential ref="loginCredential"/>
			</div>
			);
	}
});
module.exports = View;