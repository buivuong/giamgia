var Divider = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<hr className={this.props.className} onClick={this.props.onClick} style={this.props.style}/>
		)
	}
});

module.exports = Divider;