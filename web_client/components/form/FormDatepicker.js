var LabelError = require('components/label/LabelError');
var Valid = require('valid');

var Form = React.createClass({
	$root: null,
	value: '',
	propTypes: {
		id: React.PropTypes.string.isRequired,
		label: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		validate: React.PropTypes.object,
		required: React.PropTypes.bool
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));

		if(this.props.required)
			this.$root.addClass('required');

		this.$root.find('input').datetimepicker({
			timepicker: false,
			mask: false,
			format: 'd/m/Y',
			onSelectDate: function(ct, $i){
				this.value = ct.dateFormat('Y-m-d')+' '+moment().format('HH:mm:ss');
				if(this.focus || this.isClickedForm){
					var error = Valid.getClientError(this.props.validate, this.value);
					if(is.not.empty(error)){
						this.addError(error);
					}else{
						this.clearError();
					}
				}
			}.bind(this)
		});
	},
	getDate: function(){
		return this.value;
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
        		<input id={this.props.id} type="text" placeholder={placeholder}/>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Form;