var MyAccount = React.createClass({
	module: "myProfile",
	$module: null,
	propTypes: {
		onClickTab: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
	},
	onClick: function(keyRef){
		this.module = keyRef;
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
		this.props.onClickTab(keyRef);
	},
	setActive: function(){
		for(var key in this.refs){
			if(this.module === key){
				this.$module.addClass("active");
			}
			else {
				var $item = $(React.findDOMNode(this.refs[key]));
					$item.removeClass("active");
			}
		}
	},
	getStep: function(){
		return this.module;
	},
	render: function(){
		return (
			<List className="list-inline quicklink-header-account-box no-margin-left border-bottom no-margin-bottom">
				<ListItem ref="myProfile" className="no-padding-left">
					<Link className="no-padding-left" onClick={this.onClick.bind(null, "myProfile")}>
						<Image className="margin-right bg-red" 
						       src="images/icon-my-profile.png" 
						       style={{width: "48", height: "48"}} />
						My Profile
					</Link>
				</ListItem>
				<ListItem ref="paymentInfomation" className="no-padding-left">
					<Link className="no-padding-left" onClick={this.onClick.bind(null, "paymentInfomation")}>
						<Image className="margin-right bg-orange" 
						       src="images/icon-payment.png" 
						       style={{width: "48", height: "48"}} />
						Payment Information
					</Link>
				</ListItem>
				<ListItem ref="billingActivity">
					<Link className="no-padding-left" onClick={this.onClick.bind(null, "billingActivity")}>
						<Image className="margin-right bg-blue" 
						       src="images/icon-billing.png" 
						       style={{width: "48", height: "48"}} />
						Billing Activity
					</Link>
				</ListItem>
				<ListItem ref="loginCredential">
					<Link className="no-padding-left" onClick={this.onClick.bind(null, "loginCredential")}>
						<Image className="margin-right bg-violet" 
						       src="images/icon-login.png" 
						       style={{width: "48", height: "48"}} />
						Login Credentials
					</Link>
				</ListItem>
			</List>
			);
	}
});
module.exports = MyAccount;