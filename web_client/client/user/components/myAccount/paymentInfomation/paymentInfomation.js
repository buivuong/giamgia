var PaymentInfomation = React.createClass({
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
	render: function() {
		return (
			<div className="" style={{display: this.state.display}}>
				Payment Infomation
			</div>
			);
	}
});
module.exports = PaymentInfomation;