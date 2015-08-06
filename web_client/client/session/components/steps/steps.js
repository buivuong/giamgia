var Doctor = require('client/session/components/steps/doctor/doctor');
var Medical = require('client/session/components/steps/medical/medical');
var Computer = require('client/session/components/steps/computer/computer');
var Payment = require('client/session/components/steps/payment/payment');
var Confirm = require('client/session/components/steps/confirm/confirm');
var StepTemplate = require("client/templates/step");

var	Steps = React.createClass({
	tabRefs: null,
	componentDidMount: function(){
		this.tabRefs=["doctor", "medical", "computer", "payment", "confirm"];
		this.refs["doctor"].show();
	},
	componenWillUnMount: function(){
		this.tabRefs = null;
	},
	onClickTab: function(keyParams){
		for(var i=0; i<this.tabRefs.length; i++){
			if(this.tabRefs[i]===keyParams){
				this.refs[this.tabRefs[i]].show();
			}
			else{
				this.refs[this.tabRefs[i]].hide();
			}
		}
	},
	render: function(){
		return (
			<div>
				<Breadcrump className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						Choose Doctor
					</Link>
				</Breadcrump>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box"></Box>
						<Header className="header-title">
							<Title type="h2" className="dashboard">
								Choose Doctor
							</Title>
						</Header>
						<Divider />
				</Box>
				<Box className="connect-box general-wrap">
					<Panel className="panel-body panel-body-nopadding">
						<Wizard className="basic-wizard">
							<StepTemplate ref="step" onClickTab={this.onClickTab}/>
							<Tab className="tab-content">
								<Tab className="tab-pane active">
									<Row className="row">
										<Column className="col-xs-12">
											<Doctor ref="doctor" />
											<Medical ref="medical" />
											<Computer ref="computer" />
											<Payment ref="payment" />
											<Confirm ref="confirm" />
										</Column>
									</Row>
								</Tab>
							</Tab>
						</Wizard>
					</Panel>
				</Box>
			</div>
			);
	}
});
module.exports = Steps;