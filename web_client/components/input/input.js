var Input = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		name: React.PropTypes.string,
		type: React.PropTypes.string.isRequired,
		placeholder: React.PropTypes.string
	},
	render: function(){
		return (
			<input className={this.props.className} placeholder={this.props.placeholder} type={this.props.type}/>
		)
	}
});

module.exports = Input;