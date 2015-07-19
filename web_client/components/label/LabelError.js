var LabelError = React.createClass({
	propTypes: {
		position: React.PropTypes.string
	},
	getInitialState: function(){
		return {
			display: 'none',
			message: ''
		}
	},
	getDefaultProps: function(){
		return {
			position: 'above'
		}
	},
	open: function(message){
		this.setState({
			display: 'block',
			message: message
		});
	},
	hide: function(){
		this.setState({
			display: 'none',
			message: ''
		});
	},
	render: function(){
		return (
			<p className="text-danger" style={{display: this.state.display, fontSize: '0.8em'}}>
				{this.state.message}
			</p>
		)
	}
});

module.exports = LabelError;