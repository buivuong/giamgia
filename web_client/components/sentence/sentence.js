var Sentence = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<p className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</p>
		)
	}
});

module.exports = Sentence;