var PaymentUpdate = require('client/session/components/steps/payment/paymentUpdate');
var StepPayment = React.createClass({
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
				<PaymentUpdate />
				<Wrap className="text-center margin-bottom-6x">
					<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Back
							</Link>
						<ListItem>
						</ListItem>
							<Link className="btn btn-primary  btn-lg">
								Update Payment
							</Link>
						</ListItem>
					</List>
				</Wrap>
			</div>
			);
	}
});
module.exports = StepPayment;