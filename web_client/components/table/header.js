var TableHeader = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<th className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</th>
		)
	}
});

module.exports = TableHeader;