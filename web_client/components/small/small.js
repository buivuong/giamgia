var Small = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<div className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
			</div>
			);
	}
});
module.exports = Small;