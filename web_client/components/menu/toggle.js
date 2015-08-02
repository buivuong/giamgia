var Toggle = React.createClass({
	$root: null,
	propTypes: {
		onClick: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	isCollapsed: function(){
		return this.$root.hasClass('menu-collapsed');
	},
	collapsed: function(className){
		this.$root.addClass('menu-collapsed');
	},
	unCollapsed: function(className){
		this.$root.removeClass('menu-collapsed');
	},
	render: function(){
		return (
			<Link className="menutoggle" onClick={this.props.onClick}>
				<Icon className="fa fa-bars"/>
			</Link>
		)
	}
});

module.exports = Toggle;