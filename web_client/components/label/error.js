var LabelError = React.createClass({
	$root: null,
	propTypes: {
		className: React.PropTypes.string
	},
	getInitialState: function(){
		return {message: ''};
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	componentWillUnmount: function(){
		this.$root = null;
	},
	addError: function(message){
		this.setState({message: message});
		this.$root.css({'display': 'block'});
	},
	removeError: function(){
		this.setState({message: ''});
		this.$root.css({display: 'none'});
	},
	render: function(){
		return (
			<p className={"text-danger "+this.props.className} style={{display: 'none', fontSize: '0.8em'}}>{this.state.message}</p>
		)
	}
});

module.exports = LabelError;