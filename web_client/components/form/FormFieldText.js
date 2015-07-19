var LabelError = require('components/label/LabelError');
var Valid = require('valid');

var Field = React.createClass({
	$root: null,
	propTypes: {
		customClass: React.PropTypes.string,
		customInputClass: React.PropTypes.string,
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		name: React.PropTypes.string,
		validate: React.PropTypes.object,
		maxlength: React.PropTypes.number,
		onChange: React.PropTypes.func
	},
	getDefaultProps: function(){
		return {
			customClass: 'form-group',
			customInputClass: 'form-control',
			maxlength: 150,
			type: 'text'
		}
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	clear: function(){
		this.$root.find('input').val(null);
	},
	clearError: function(){
		this.$root.removeClass('has-error');
		this.refs.label_error.hide();
	},
	addError: function(message){
		var split_message = message.split(":");
		if(split_message.length > 0){
			this.$root.addClass('has-error');
			this.refs.label_error.open(split_message[0]);
		}
	},
	checkNumeric: function(character, value){
		if(this.props.type === 'numeric'){
    		if(is.not.number(parseInt(character))){
    			this.$root.find('input').val(value.slice(0, -1));
    		}
    	}
	},
	checkMaxLength: function(value){
		if(value.length > this.props.maxlength){
    		this.$root.find('input').val(value.slice(0, -1));
    	}
	},
    onChangeInput: function(event){
    	var character = event.target.value.slice(-1);

    	this.checkNumeric(character, event.target.value);
    	this.checkMaxLength(event.target.value);

    	var error = Valid.getClientError(this.props.validate, event.target.value);
		if(is.not.empty(error)){
			this.addError(error);
		}else{
			this.clearError();
			if(is.function(this.props.onChange))
				this.props.onChange(event);
		}
    },
    getValue: function(){
    	return this.$root.find('input').val();
    },
	render: function(){
		return (
			<div className={this.props.customClass}>
        		{this.props.children}
        		<input 
        			type={this.props.type} 
        			name={this.props.name} 
        			className={this.props.customInputClass} 
					placeholder={this.props.placeholder} 
					onChange={this.onChangeInput}/>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Field;