var Panel = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		src: React.PropTypes.string,
		onClick: React.PropTypes.func
	},
	render: function(){
		return (
			<img className={this.props.className} onClick={this.props.onClick} style={this.props.style} src={this.props.src}/>
		)
	}
});

module.exports = Panel;