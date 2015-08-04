var Label = React.createClass({
	$root: null,
	color: null,
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
		this.color = this.$root.css('color');
	},
	componentWillMount: function(){
		this.$root = color = null;
	},
	addError: function(){
		this.$root.css('color', '#a94442');
	},
	removeError: function(){
		this.$root.css('color', this.color);
	},
	render: function(){
		return (
			<label className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</label>
		)
	}
});

module.exports = Label;