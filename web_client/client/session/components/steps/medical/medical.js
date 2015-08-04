var MedicalCondition = require('client/session/components/steps/medical/medicalCondition');
var MedicalMedication = require('client/session/components/steps/medical/medicalMedication');
var MedicalAllergie = require('client/session/components/steps/medical/medicalAllergie');
var MedicalSerieAndProcedure = require('client/session/components/steps/medical/medicalSurgerieAndProcedure');
var MedicalPrimaryCare = require('client/session/components/steps/medical/medicalPrimaryCare');
var StepMedicalHistory = React.createClass({
	getInitialState: function(){
		return {display: "none"};
	},
	show: function(){
		this.setState({display: "block"});
	},
	hide: function(){
		this.setState({
			display: "none"
		});
	},
	render: function(){
		return (
			<div style={{display: this.state.display}}>
				<MedicalCondition />
				<MedicalMedication />
				<MedicalAllergie />
				<MedicalSerieAndProcedure />
				<MedicalPrimaryCare />
				<Wrap className="text-center margin-bottom-6x">
					<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Back
							</Link>
						</ListItem>
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Continute
							</Link>
						</ListItem>
					</List>
				</Wrap>
			</div>
			);
	}
});
module.exports = StepMedicalHistory;