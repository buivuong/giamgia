var Link = React.createClass({
	$root: null,
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = React.findDOMNode(this);
	},
	componentWillUnmount: function(){
		this.$root = null;
	},
	addDisabled: function(){
		this.$root.setAttribute("disabled", true);
	},
	clearDisabled: function(){
		this.$root.removeAttribute("disabled");
	},
	render: function(){
		return (
			<a className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</a>
		)
	}
});

module.exports = Link;