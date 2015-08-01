var LabelError = require('components/label/LabelError');
var Valid = require('valid');
var Config = require('config');

var Field = React.createClass({
	$root: null,
	$hidden: null,
	propTypes: {
		customClass: React.PropTypes.string,
		customInputClass: React.PropTypes.string,
		name: React.PropTypes.string,
		mask: React.PropTypes.string,
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		validate: React.PropTypes.object,
		onChange: React.PropTypes.func
	},
	getDefaultProps: function(){
		return {
			customClass: 'form-group',
			customInputClass: 'form-control',
			data: []
		}
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
		this.$hidden = $(React.findDOMNode(this.refs.hidden));
		this.$hidden.val('');

		$(React.findDOMNode(this.refs.mask)).inputmask(this.props.mask, {
			placeholder: this.props.placeholder,
			onBeforeWrite: function(event, buffer, caretPos, opts){
				if(is.not.undefined(event.target)){
					var value = buffer.join('');
					var database_value = '';

					if(value === this.props.mask){
						value = '';
					}
					
					if(this.props.type === 'date'){
						if(is.not.empty(value)){
							var split = value.split('/');
							database_value = split[2]+'-'+split[1]+'-'+split[0];

							if(is.dateString(database_value))
								database_value = moment(database_value).tz(Config.serverTimezone).format('YYYY-MM-DD');
						}

						this.$hidden.val(database_value);
					}

					var error = Valid.getClientError(this.props.validate, value);

					if(is.not.empty(error)){
						this.addError(error);
					}else{
						this.clearError();
					}
				}
			}.bind(this)
		});
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
        		<input type="hidden" ref="hidden" name={this.props.name}/>
        		<input type="text" ref="mask" className={this.props.customInputClass} placeholder={this.props.placeholder}/>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Field;