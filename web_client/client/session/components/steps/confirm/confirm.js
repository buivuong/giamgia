var TermOfUse  = require('client/session/components/steps/confirm/termOfUse');
var StepConfirmation = React.createClass({
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
				<TermOfUse />
				<Wrap className="text-center margin-bottom-6x">
					<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Back
							</Link>
						</ListItem>
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Connect
							</Link>
						</ListItem>
					</List>
				</Wrap>
				<Sentence>
					<Span className="color-red">
						*
					</Span>
					Your credit card will only be charged upon completion of this conversation. Charges will appear on your credit card bill as "BCBSM", Inc. "All charges for completed conversations are final. For more details, please refer to our refund policy." 
				</Sentence>
			</div>
			);
	}
});
module.exports = StepConfirmation;