var Link = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
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