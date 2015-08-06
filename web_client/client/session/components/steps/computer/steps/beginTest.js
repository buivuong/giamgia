var StepComputer = require('client/templates/stepComputer');
var TestInternet = require('client/session/components/steps/computer/steps/testInternet');
var TestMicrophone = require('client/session/components/steps/computer/steps/testMicrophone');
var TestSpeaker = require('client/session/components/steps/computer/steps/testSpeaker');
var TestVideo = require('client/session/components/steps/computer/steps/testVideo');
var TestWebcam = require('client/session/components/steps/computer/steps/testWebcam');
var BeginTest = React.createClass({
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
	onClick: function(keyRef){
		console.log(keyRef);
	},
	render: function(){
		return (
			<div style={{display: this.state.display}}>
				<Box className="header-profile-box">
					<Image src="images/icon-test-computer-body.png" style={{width: "41", height: "41"}} />
					<Header className="header-title">
						<Title type="h2" className="dashboard">
							<Link>
								Test Computer
							</Link>
						</Title>
					</Header>
					<Divider />
				</Box>
				<Wrap className="test-computer-wrap arial general-wrap">
					<Panel className="panel-body panel-body-nopadding">
						<Wizard className="basic-wizard block-wizard">
							<StepComputer onClick={this.onClick}/>
							<TestInternet ref="internet"/>
							<TestMicrophone ref="microphone"/>
							<TestSpeaker ref="speaker"/>
							<TestVideo ref="video"/>
							<TestWebcam ref="webcam" />
						</Wizard>
					</Panel>
				</Wrap>
			</div>
			);
	}
});
module.exports = BeginTest;