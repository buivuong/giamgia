var Tab = React.createClass({
	
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	render: function(){
		return (
			<div className={this.props.className} style={this.props.style} onClick={this.props.onClick}>
				{this.props.children}
			</div>
			);
	}
});
module.exports = Tab;