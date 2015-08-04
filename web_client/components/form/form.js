var Form = React.createClass({
	$root: null,
	serializedObject: null,
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		type: React.PropTypes.string,
		onSubmit: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	componentWillUnmount: function(){
		this.$root = null;
		this.serializedObject = null;
	},
	onSubmit: function(event){
		event.preventDefault();

		if(is.not.undefined(this.props.onSubmit)){
			this.serializedObject = this.$root.serializeObject();
			this.props.onSubmit(event);
		}
	},
	getSerializedObject: function(){
		return this.serializedObject;
	},
	render: function(){
		if(this.props.type === 'form')
			return (
				<form onSubmit={this.onSubmit} className={this.props.className} style={this.props.style} noValidate>
					{this.props.children}
				</form>
			)
		else
			return (
				<div className={this.props.className} style={this.props.style}>
					{this.props.children}
				</div>
			)
	}
});

module.exports = Form;