var Form = require('components/form/Form');
var FormFieldText = require('components/form/FormFieldText');
var FormFieldDatepicker = require('components/form/FormFieldDatepicker');
var FormFieldMask = require('components/form/FormFieldMask');
var FormFieldSelect = require('components/form/FormFieldSelect');
var Loader = require('components/loader/Common');
var TestStore = require('client/test/TestStore');
var TestActions = require('client/test/TestActions');
var IntlMixin = ReactIntl.IntlMixin;
var Config = require('config');

var FormTest = React.createClass({
	postToServer: "",
	mixins: [IntlMixin],
	getInitialState: function(){
		return {list: []}
	},
	componentDidMount: function(){
		this.refs.form.setRefs(this.refs);
		TestActions.list.triggerPromise()
		.then(function(response){
			this.setState({list: response.data});
		}.bind(this))
		.catch(function(error){
		}.bind(this))
	},
	onSubmit: function(event){
		this.refs.loader.open();
		var serializeObject = this.refs.form.getSerializeObject();
		var serializeObjectStr = JSON.stringify(serializeObject);

		if(serializeObjectStr !== this.postToServer){
			this.postToServer = serializeObjectStr;

			TestActions.add.triggerPromise(serializeObject)
			.then(function(response){
				this.refs.loader.hide();
			})
			.catch(function(error){
				this.refs.loader.hide();
				this.refs.form.openErrors(error);
			}.bind(this))
		}
	},
	render: function(){
		return (
			<Form onSubmit={this.onSubmit} ref="form">
				<Loader ref="loader"/>
				<div className="row mb10">
					<div className="col-sm-6">
	                    <label className="control-label">
	                        Input text with maxlength 10 and required
	                    </label>
	                    <FormFieldText ref="input_text_1"
		                        placeholder="Test Placeholder"
		                        name="input_text_1"
		                        maxlength={10}
		                		validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
		            </div>
		            <div className="col-sm-6">
		            	<label className="control-label">
	                        Input text with maxlength 100 and required and email
	                    </label>
	                    <FormFieldText ref="input_text_2"
		                        placeholder="Test Placeholder"
		                        name="input_text_2"
		                        maxlength={100}
		                		validate={{
		                			required: this.getIntlMessage('APP_ERR_REQUIRED'),
		                			email: this.getIntlMessage('APP_ERR_EMAIL')
		                		}}/>
		            </div>
                </div>

                <div className="row mb10">
					<div className="col-sm-6">
	                    <label className="control-label">
	                        Input password and must be larger than 2 and smaller than 6
	                    </label>
	                    <FormFieldText ref="input_text_3"
	                    		type="password"
		                        placeholder="Test Placeholder"
		                        name="input_text_3"
		                        maxlength={5}
		                		validate={{
		                			required: this.getIntlMessage('APP_ERR_REQUIRED'),
		                			min: this.getIntlMessage('APP_ERR_MIN')
		                		}}/>
		            </div>
		            <div className="col-sm-6">
		            	<label className="control-label">
	                        Input numeric with maxlength 3
	                    </label>
	                    <FormFieldText ref="input_text_4"
		                        placeholder="Test Placeholder"
		                        type="numeric"
		                        name="input_text_4"
		                        maxlength={3}
		                		validate={{
		                			required: this.getIntlMessage('APP_ERR_REQUIRED')
		                		}}/>
		            </div>
                </div>

                <div className="row mb10">
					<div className="col-sm-6">
	                    <label className="control-label">
	                        Date Picker
	                    </label>
	                    <FormFieldDatepicker ref="input_text_5"
	                    		placeholder="Test Placeholder"
	                    		name="input_text_5"
	                    		validate={{
	                    			required: this.getIntlMessage('APP_ERR_REQUIRED')
	                    		}}/>
		            </div>
		            <div className="col-sm-6">
		            	<label className="control-label">
	                        Mask Input Date
	                    </label>
	                    <FormFieldMask ref="input_text_6"
		                		type="date"
		                		mask="dd/mm/yyyy"
		                		placeholder="dd/mm/yyyy"
		                		name="input_text_6"
		                		validate={{
		                			required: this.getIntlMessage('APP_ERR_REQUIRED'),
		                			date: this.getIntlMessage('APP_ERR_DATE')
		                		}}/>
		            </div>
                </div>

                <div className="row mb10">
					<div className="col-sm-6">
	                    <label className="control-label">
	                        Test Select not server
	                    </label>
	                    <FormFieldSelect name="input_text_7" ref="input_text_7"
                			placeholder={this.getIntlMessage('SIGNUP_LABEL_COUNTRY')} 
                			data={Config.countries} dataValue="code" dataText="name"
                			validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
		            </div>
		            <div className="col-sm-6">
		            	<label className="control-label">
	                        Test Select server
	                    </label>
	                    <FormFieldSelect name="input_text_8" ref="input_text_8"
                			placeholder={this.getIntlMessage('SIGNUP_LABEL_COUNTRY')} 
                			data={this.state.list} dataValue="id" dataText="name"
                			validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
		            </div>
                </div>

                <div className="row mb10">
                	<div className="col-sm-6">
                		<label className="control-label">
                			
                		</label>
                	</div>
                </div>

                <button className="btn btn-primary" type="submit">{this.getIntlMessage('SIGNUP_BUTTON')}</button>
			</Form>
		)
	}
});

module.exports = FormTest;