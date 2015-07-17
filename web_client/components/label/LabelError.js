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
			display: 'inline-block',
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
			<div className={'ui pointing '+this.props.position+' red label'} style={{display: this.state.display}}>
      			{this.state.message}
    		</div>
		)
	}
});

module.exports = LabelError;