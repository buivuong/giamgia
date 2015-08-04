var ListItem = React.createClass({
	$root: null,
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	addClass: function(className){
		this.$root.addClass(className);
	},
	removeClass: function(className){
		this.$root.removeClass(className);
	},
	render: function(){
		return (
			<li className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</li>
		)
	}
});

module.exports = ListItem;