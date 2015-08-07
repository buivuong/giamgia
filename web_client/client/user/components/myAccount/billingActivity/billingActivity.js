var BuillingActivity = React.createClass({
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
	render: function(){
		return (
			<div style={{display: this.state.display}}>
				Billing Activity
			</div>
			);
	}
});
module.exports = BuillingActivity;