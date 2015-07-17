var Form = require('components/form/Form');
var FormFieldText = require('components/form/FormFieldText');
var FormDatepicker = require('components/form/FormDatepicker');
var FormRTE = require('components/form/FormRTE');
var Dimmer = require('components/Dimmer');
var DevsStore = require('dev/stores/DevsStore');
var DevsActions = require('dev/actions/DevsActions');
var IntlMixin = ReactIntl.IntlMixin;

var Add = React.createClass({
	id: 'dev_add_',
	mixins: [IntlMixin],
	componentDidMount: function(){
		this.refs.form.setInputRefs(this.refs);
	},
	onSubmit: function(event){
		this.refs.form.clearErrors();
		this.refs.dimmer.open();
		var serializeObject = this.refs.form.getSerializeObject();
		var content = this.refs.content.getHTML();
		var datepicker = this.refs.datepicker.getDate();

		var data = extend({}, serializeObject, {content: content, datepicker: datepicker});

		DevsActions.add.triggerPromise(data)
		.then(function(response){
			this.refs.dimmer.hide();
			this.refs.form.clearAll();

		}.bind(this))
		.catch(function(err){
			this.refs.dimmer.hide();
			this.refs.form.openErrors(err);
		}.bind(this))
	},
	render: function(){
		return (
			<div className="ui basic segment">
				<Dimmer ref="dimmer"/>
				<Form onSubmit={this.onSubmit} ref="form">
					<FormFieldText id={this.id+'name'} name="name" label={this.getIntlMessage('MDL_DEV_LABEL_NAME')} 
						required 
						ref="name"
						validate={{required: 'ERR_FIELD_REQUIRED'}}/>
					<FormRTE label={this.getIntlMessage('MDL_DEV_LABEL_CONTENT')} required ref="content"
						validate={{required: 'ERR_FIELD_REQUIRED'}}/>
					<FormDatepicker id={this.id+'datepicker'} label="Thời gian" required ref="datepicker"
						validate={{required: 'ERR_FIELD_REQUIRED'}}/>
					<button type="submit" className="ui fluid button">{this.getIntlMessage('APP_BTN_ADD')}</button>
				</Form>
			</div>
		)
	}
})

module.exports = Add;