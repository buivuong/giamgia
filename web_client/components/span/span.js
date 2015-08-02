var Span = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<span className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</span>
		)
	}
});

module.exports = Span;