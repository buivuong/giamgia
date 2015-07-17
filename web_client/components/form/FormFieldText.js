var LabelError = require('components/label/LabelError');
var Valid = require('valid');

var Field = React.createClass({
	$root: null,
	focus: 0,
	isClickedForm: 0,
	propTypes: {
		id: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		validate: React.PropTypes.object,
		required: React.PropTypes.bool,
		type: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			type: 'text'
		}
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));

		if(this.props.required)
			this.$root.addClass('required');
	},
	clear: function(){
		this.$root.find('input').val(null);
	},
	clearError: function(){
		this.$root.removeClass('error');
		this.refs.label_error.hide();
	},
	addError: function(message){
		this.$root.addClass('error');
		this.refs.label_error.open(message);
	},
	onChangeInput: function(event){
		if(this.focus || this.isClickedForm){
			var error = Valid.getClientError(this.props.validate, event.target.value);
			if(is.not.empty(error)){
				this.addError(error);
			}else{
				this.clearError();
			}
		}
	},
	onFocusInput: function(event){
		this.focus = 1;
		return this.focus;
	},
	clickForm: function(){
		this.isClickedForm = 1;
    },
	render: function(){
		var placeholder = (is.undefined(this.props.placeholder))?this.props.label:this.props.placeholder;

		return (
			<div className="field">
        		<label htmlFor={this.props.id}>{this.props.label}</label>
        		<input id={this.props.id} name={this.props.name} type={this.props.type} 
        			onFocus={this.onFocusInput} onChange={this.onChangeInput} placeholder={placeholder}/>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Field;