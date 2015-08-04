var Valid = require('valid');

var Input = React.createClass({
	$root: null,
	borderColor: null,
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		name: React.PropTypes.string,
		type: React.PropTypes.string.isRequired,
		placeholder: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onBlur: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
		this.borderColor = this.$root.css('border-color');
	},
	componentWillUnmount: function(){
		this.$root = null;
		this.borderColor = null;
	},
	getValue: function(){
		return this.$root.val();
	},
	addError: function(){
		this.$root.css('border-color', '#a94442');
	},
	removeError: function(){
		this.$root.css('border-color', this.borderColor);
	},
	render: function(){
		return (
			<input className={this.props.className} 
				placeholder={this.props.placeholder} 
				name={this.props.name}
				onChange={this.props.onChange}
				onBlur={this.props.onBlur}
				type={this.props.type}/>
		)
	}
});

module.exports = Input;