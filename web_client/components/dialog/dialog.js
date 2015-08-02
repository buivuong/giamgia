var Dialog = React.createClass({
	$root: null,
	propTypes: {
		className: React.PropTypes.string,
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	show: function(){
		this.$root.modal('show');
	},
	hide: function(){
		this.$root.modal('hide');
	},
	render: function(){
		return (
			<div className="modal fade">
				<div className={this.props.className}>
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Dialog;