var Button = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		type: React.PropTypes.string,
		onClick: React.PropTypes.func
	},
	getDefaultProps: function(){
		return {
			type: 'button'
		}
	},
	render: function(){
		return (
			<button type={this.props.type} className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</button>
		)
	}
});

module.exports = Button;