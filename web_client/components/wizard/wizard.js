var Wizard = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		style: React.PropTypes.object
	},
	render: function(){
		return (
			<div className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</div>
			);
	}
});
module.exports = Wizard;