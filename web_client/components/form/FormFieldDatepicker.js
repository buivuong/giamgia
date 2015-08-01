var LabelError = require('components/label/LabelError');
var Valid = require('valid');
var Config = require('config');

var Field = React.createClass({
	$root: null,
	$datepicker: null,
	$hidden: null,
	propTypes: {
		customClass: React.PropTypes.string,
		customInputClass: React.PropTypes.string,
		name: React.PropTypes.string,
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
		this.$datepicker = $(React.findDOMNode(this.refs.datepicker));
		this.$hidden = $(React.findDOMNode(this.refs.hidden));

		this.$datepicker.datetimepicker({
			timepicker: false,
			mask: true,
			format: 'd/m/Y',
			onShow: function(ct){
				var value = ct.dateFormat('Y-m-d')+' '+moment().format('HH:mm:ss');
				this.value = moment(value).tz(Config.serverTimezone).format('YYYY-MM-DD HH:mm:ss');
				this.$hidden.val(this.value);
			}.bind(this),
			onSelectDate: function(ct, $i){
				var value = ct.dateFormat('Y-m-d')+' '+moment().format('HH:mm:ss');
				this.value = moment(value).tz(Config.serverTimezone).format('YYYY-MM-DD HH:mm:ss');
				this.$hidden.val(this.value);

				var error = Valid.getClientError(this.props.validate, this.value);
				if(is.not.empty(error)){
					this.addError(error);
				}else{
					this.clearError();
				}
			}.bind(this)
		});
	},
	clear: function(){
		this.$datepicker.val(null);
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
    	return this.$datepicker.val();
    },
	render: function(){
		return (
			<div className={this.props.customClass}>
        		{this.props.children}
        		<input type="hidden" name={this.props.name} ref="hidden"/>
        		<input ref="datepicker" type="text" className={this.props.customInputClass}/>
        		<LabelError message="" ref="label_error"/>
        	</div>
		)
	}
});

module.exports = Field;