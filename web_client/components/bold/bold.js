var Bold = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<b className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</b>
		)
	}
});

module.exports = Bold;