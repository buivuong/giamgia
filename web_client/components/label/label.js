var Label = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
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