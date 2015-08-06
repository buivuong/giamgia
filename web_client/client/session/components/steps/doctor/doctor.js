

var AboutVisit = require('client/session/components/steps/doctor/aboutVisit');
var AboutYou = require('client/session/components/steps/doctor/aboutYou');
var StepChooseDoctor = React.createClass({
	getInitialState: function(){
		return {display: "none"};
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
				<AboutVisit />
				<AboutYou />
				<Wrap className="text-center margin-bottom-6x">
					<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary  btn-lg">
								Next
							</Link>
						</ListItem>
					</List>
				</Wrap>
			</div>
			);
	}
});
module.exports = StepChooseDoctor;