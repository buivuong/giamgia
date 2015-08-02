var Title = React.createClass({
	propTypes: {
		type: React.PropTypes.string.isRequired,
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	},
	render: function(){
		if(this.props.type === 'h1')
			return (
				<h1 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h1>
			)
		else if(this.props.type === 'h2')
			return (
				<h2 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h2>
			)
		else if(this.props.type === 'h3')
			return (
				<h3 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h3>
			)
		else if(this.props.type === 'h4')
			return (
				<h4 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h4>
			)
		else if(this.props.type === 'h5')
			return (
				<h5 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h5>
			)
		else if(this.props.type === 'h6')
			return (
				<h6 className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
					{this.props.children}
				</h6>
			)
	}
});

module.exports = Title;