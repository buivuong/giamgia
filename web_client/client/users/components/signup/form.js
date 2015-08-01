var Form = require('components/form/Form');
var FormFieldText = require('components/form/FormFieldText');
var FormFieldSelect = require('components/form/FormFieldSelect');
var FormFieldMask = require('components/form/FormFieldMask');
var Notification = require('components/dialog/Notification');
var Config = require('config');
var Loader = require('components/loader/Common');
var UsersStore = require('client/users/UsersStore');
var UsersActions = require('client/users/UsersActions');
var IntlMixin = ReactIntl.IntlMixin;

var FormSignup = React.createClass({
	mixins: [IntlMixin],
	componentDidMount: function(){
		this.refs.form.setRefs(this.refs);
	},
	onSubmit: function(event){
        this.refs.loader.open();

		var serializeObject = this.refs.form.getSerializeObject();
        serializeObject.updated_at = serializeObject.created_at = moment().tz(Config.serverTimezone).format('YYYY-MM-DD HH:mm:ss');
            
		UsersActions.register.triggerPromise(serializeObject)
		.then(function(response){
			this.refs.loader.hide();
            this.refs.dialog_form_success.open();
		}.bind(this))
		.catch(function(error){
			this.refs.loader.hide();
            this.refs.dialog_form_error.open();
            this.refs.password.clear();
            this.refs.password_repeat.clear();
			this.refs.form.openErrors(error);
		}.bind(this))
	},
	onChangePass: function(event){
		var passwordRepeat = this.refs.password_repeat.getValue();
		if(event.target.value !== passwordRepeat){
			this.refs.password_repeat.addError(this.getIntlMessage('SIGNUP_ERR_SAME_PASSWORD'));
		}else{
			this.refs.password_repeat.clearError();
		}
	},
	onChangePassRepeat: function(event){
		var password = this.refs.password.getValue();
		if(event.target.value !== password){
			this.refs.password_repeat.addError(this.getIntlMessage('SIGNUP_ERR_SAME_PASSWORD'));
		}else{
			this.refs.password_repeat.clearError();
		}
	},
	render: function(){
		return (
			<Form onSubmit={this.onSubmit} ref="form">
                <Notification ref="dialog_form_error">
                    <div className="modal-header"><h3>{this.getIntlMessage('APP_HEADER_NOTIFY')}</h3></div>
                    <div className="modal-body" style={{height: 'auto'}}>
                        <p className="text-danger">{this.getIntlMessage('APP_ERR_VALID')}</p>
                    </div>
                </Notification>
                <Notification ref="dialog_form_success">
                    <div className="modal-header"><h3>{this.getIntlMessage('APP_HEADER_NOTIFY')}</h3></div>
                    <div className="modal-body" style={{height: 'auto'}}>
                        <p className="text-success">{this.getIntlMessage('SIGNUP_SUCCESS')}</p>
                    </div>
                </Notification>
				<Loader ref="loader"/>
        		<h3 className="nomargin">{this.getIntlMessage('SIGNUP_HEADER_MAIN')}</h3>
        		<p className="mt5 mb20">
        			{this.getIntlMessage('SIGNUP_HEADER_DESC')}
        			&nbsp;
        			<a><strong>{this.getIntlMessage('SIGNIN_HEADER_MAIN')}</strong></a>
        		</p>
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_USERNAME')}</label>
                    <FormFieldText ref="username"
                        placeholder=""
                        name="username"
                        maxlength={150}
                        validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_EMAIL')}</label>
                    <FormFieldText ref="email"
                        placeholder=""
                        name="email"
                        maxlength={150}
                        validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), email: this.getIntlMessage('APP_ERR_EMAIL')}}/>
                </div>
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_PASSWORD')}</label>
                    <FormFieldText ref="password"
                        type="password"
                        placeholder=""
                        name="password"
                        maxlength={50}
                        onChange={this.onChangePass}
                        validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), min: this.getIntlMessage('SIGNUP_ERR_MIN_PASSWORD')}}/>
                </div>
                
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_PASSWORD_REPEAT')}</label>
                    <FormFieldText ref="password_repeat"
                        type="password"
                        placeholder=""
                        name="password_repeat"
                        maxlength={50}
                        onChange={this.onChangePassRepeat}
                        validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), min: this.getIntlMessage('SIGNUP_ERR_MIN_PASSWORD_REPEAT')}}/>
                </div>
                <div className="mb10">
                    <label className="control-label">
                        {this.getIntlMessage('SIGNUP_LABEL_FIRST_NAME')}
                    </label>
                    <FormFieldText ref="first_name"
                            placeholder={this.getIntlMessage('SIGNUP_LABEL_FIRST_NAME')}
                            name="first_name"
                            maxlength={150}
                            validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>
                <div className="mb10">
                    <label className="control-label">
                        {this.getIntlMessage('SIGNUP_LABEL_LAST_NAME')}
                    </label>
                    <FormFieldText ref="last_name"
                            placeholder={this.getIntlMessage('SIGNUP_LABEL_LAST_NAME')}
                            name="last_name"
                            maxlength={150}
                            validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_GENDER')}</label>
                    <FormFieldSelect name="gender" ref="gender"
                		placeholder={this.getIntlMessage('SIGNUP_LABEL_GENDER')} 
                		data={Config.genders} dataValue="value" dataText="name"
                		validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>

                <div className="mb10">
                	<label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_BIRTHDAY')}</label>
                	<FormFieldMask ref="dob"
                		type="date"
                		mask="dd/mm/yyyy"
                		placeholder="dd/mm/yyyy"
                		name="dob"
                		validate={{
                			required: this.getIntlMessage('APP_ERR_REQUIRED'),
                			date: this.getIntlMessage('APP_ERR_DATE')
                		}}/>
                </div>

                <div className="mb10">
                	<label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_COUNTRY')}</label>
                	<FormFieldSelect name="country" ref="country"
                		placeholder={this.getIntlMessage('SIGNUP_LABEL_COUNTRY')} data={Config.countries} dataValue="code" dataText="name"
                		validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>
                <br/>
                <button className="btn btn-primary btn-block" type="submit">{this.getIntlMessage('SIGNUP_BUTTON')}</button>
			</Form>
		)
	}
});

module.exports = FormSignup;