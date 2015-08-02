var Section = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<section className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
				{this.props.children}
			</section>
		)
	}
});

module.exports = Section;