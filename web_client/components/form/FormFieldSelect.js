var LabelError = require('components/label/LabelError');
var Valid = require('valid');

var Field = React.createClass({
	$root: null,
	propTypes: {
		customClass: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		name: React.PropTypes.string,
		validate: React.PropTypes.object,
		data: React.PropTypes.array.isRequired,
		dataText: React.PropTypes.string.isRequired,
		dataValue: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func
	},
	getDefaultProps: function(){
		return {
			customClass: 'form-group',
			data: []
		}
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
		this.$root.find('select').select2({
			width: '100%',
            placeholder: this.props.placeholder
		})
		.live('change', function(event){
			var error = Valid.getClientError(this.props.validate, event.target.value);    	

			if(is.not.empty(error)){
				this.addError(error);
			}else{
				this.clearError();
			}
		}.bind(this))
	},
	clear: function(){
		this.$root.find('input').val(null);
	},
	clearError: function(){
		this.$root.removeClass('has-error');
		this.refs.label_error.hide();
	},
	addError: function(message){
		this.$root.addClass('has-error');
		this.refs.label_error.open(message);
	},
    getValue: function(){
    	return this.$root.find('input').val();
    },
	render: function(){
		return (
			<div className={this.props.customClass}>
        		{this.props.children}
        		<select name={this.props.name}>
        			<option value=""></option>
    				{
    					this.props.data.map(function(item, index){
    						return <option key={index} value={item[this.props.dataValue]}>{item[this.props.dataText]}</option>
    					}, this)
    				}
        		</select>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Field;