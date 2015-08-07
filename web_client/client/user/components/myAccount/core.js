var Router = require('react-router');


var Core = React.createClass({
	mixins: [CheckToken],
	onClick: function(toRouter){
		this.context.router.transitionTo("client_my_account_view");
	},
	render: function(){
		return (
			<div>
				<Box className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						My Account
					</Link>
				</Box>
				<Box className="header-profile-box">
					<Image src="images/icon-account-body.png" style={{width: "41", height: "41"}} />
					<Header className="header-title">
						<Title type="h3" className="dashboard">
							My Account
						</Title>
					</Header>
					<Divider />
				</Box>
				<Wrap className="myaccount-wrap general-wrap">
					<Row className="row home-body-box">
						<Column className="col-md-5 col-md-offset-1 col-sm-6 col-xs-12 margin-bottom-larger">
							<Link onClick={this.onClick.bind(null, "myProfile")} className="color-grey text-no-underline">
								<Image src="images/icon-my-profile.png" 
									   className="middle pull-left margin-right bg-red" style={{width: "70", height: "70"}} />
								<Title type="h3" className="fontsize-24px color-black no-margin-top no-margin-bottom">
									My Profile
								</Title>
								<Span className="line-height">
										View and manage your medical
								</Span>
								<Span className="line-height">
									history in one place.
								</Span>
							</Link>
						</Column>
						<Column className="col-sm-6 col-xs-12 margin-bottom-larger">
							<Link onClick={this.onClick.bind(null, "paymentInfomation")} className="color-grey text-no-underline">
								<Image src="images/icon-payment.png" 
									   className="fontsize-24px color-black no-margin-top no-margin-bottom" 
									   style={{width: "70", height: "70"}}/>
							   <Title type="h3" className="fontsize-24px color-black no-margin-top no-margin-bottom">
							   		Payment Information
							   </Title>
							   <Span className="line-height">
							   		Contact doctors, create alerts
							   </Span>
							   <Span className="line-height">
									and system notifications.
								</Span>
							</Link>
						</Column>
					</Row>
					<Row className="row home-body-box">
						<Column className="col-md-5 col-md-offset-1 col-sm-6 col-xs-12 margin-bottom-larger">
							<Link onClick={this.onClick.bind(null, "billingActivity")} className="color-grey text-no-underline">
								<Image className="middle pull-left margin-right bg-blue" 
									   src="images/icon-billing.png" style={{height: "70", width: "70"}} />
								<Title type="h3" className="fontsize-24px color-black no-margin-top no-margin-bottom">
									Billing Activity
								</Title>
								<Span className="line-height">
									Manage your account information,
								</Span>
								<Span className="line-height">
										including payment, sign-in and more.
								</Span>
							</Link>
						</Column>
						<Column className="col-sm-6 col-xs-12 margin-bottom-larger">
							<Link onClick={this.onClick.bind(null, "loginCredential")} className="color-grey text-no-underline">
								<Image src="images/icon-login.png" 
									   className="middle pull-left margin-right bg-violet"
									   style={{width: "70", height: "70"}} />
								<Title type="h3" className="fontsize-24px color-black no-margin-top no-margin-bottom">
									Login Credentials
								</Title>
								<Span className="line-height">
									Find solutions for top issues, common
								</Span>
								<Span className="line-height">
										problems & get technical support.
								</Span>
							</Link>
						</Column>
					</Row>
				</Wrap>
				</div>
			);
	}
});
module.exports = Core;