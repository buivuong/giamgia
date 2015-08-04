var Hr = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		style: React.PropTypes.object
	},
	render: function(){
		return (
			<hr className={this.props.className} onClick={this.props.onClick} style={this.props.style} />
			);
	}
});
module.exports = Hr;