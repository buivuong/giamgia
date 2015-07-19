var Form = require('components/form/Form');
var FormFieldText = require('components/form/FormFieldText');
var FormFieldSelect = require('components/form/FormFieldSelect');
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
		
		UsersActions.register.triggerPromise(serializeObject)
		.then(function(response){
			this.refs.loader.hide();
		})
		.catch(function(error){
			this.refs.loader.hide();
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
				<Loader ref="loader"/>

        		<h3 className="nomargin">{this.getIntlMessage('SIGNUP_HEADER_MAIN')}</h3>
        		<p className="mt5 mb20">
        			{this.getIntlMessage('SIGNUP_HEADER_DESC')}
        			&nbsp;
        			<a><strong>{this.getIntlMessage('SIGNIN_HEADER_MAIN')}</strong></a>
        		</p>
    			
    			<label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_NAME')}</label>
    			<div className="row mb10">
                    <div className="col-sm-6">
						<FormFieldText ref="first_name"
		    				placeholder={this.getIntlMessage('SIGNUP_LABEL_FIRST_NAME')}
		    				name="first_name"
		    				validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                    </div>
                    <div className="col-sm-6">
                        <FormFieldText ref="last_name"
		    				placeholder={this.getIntlMessage('SIGNUP_LABEL_LAST_NAME')}
		    				name="last_name"
		    				validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                    </div>
                </div>
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_USERNAME')}</label>
                    <FormFieldText ref="username"
	    				placeholder=""
	    				name="username"
	    				validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                </div>
                
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_PASSWORD')}</label>
                    <FormFieldText ref="password"
                    	type="password"
	    				placeholder=""
	    				name="password"
	    				onChange={this.onChangePass}
	    				validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), min: this.getIntlMessage('SIGNUP_ERR_MIN_PASSWORD')}}/>
                </div>
                
                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_PASSWORD_REPEAT')}</label>
                    <FormFieldText ref="password_repeat"
                    	type="password"
	    				placeholder=""
	    				name="password_repeat"
	    				onChange={this.onChangePassRepeat}
	    				validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), min: this.getIntlMessage('SIGNUP_ERR_MIN_PASSWORD_REPEAT')}}/>
                </div>

                <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_BIRTHDAY')}</label>
                <div className="row mb10">
					<div className="col-sm-5">
						<FormFieldSelect name="month" ref="month"
							placeholder={this.getIntlMessage('SIGNUP_LABEL_MONTH')} 
							data={Config.monthOfYear} dataValue="value" dataText="value"
							validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                    </div>
                    <div className="col-sm-3">
                    	<FormFieldText ref="day"
                    		type="numeric"
	    					placeholder={this.getIntlMessage('SIGNUP_LABEL_DAY')}
	    					name="day"
	    					maxlength={2}
	    					validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                    </div>
                    <div className="col-sm-4">
                    	<FormFieldText ref="year"
                    		type="numeric"
	    					placeholder={this.getIntlMessage('SIGNUP_LABEL_YEAR')}
	    					name="year"
	    					maxlength={4}
	    					validate={{required: this.getIntlMessage('APP_ERR_REQUIRED')}}/>
                    </div>
                </div>

                <div className="mb10">
                    <label className="control-label">{this.getIntlMessage('SIGNUP_LABEL_EMAIL')}</label>
                    <FormFieldText ref="email"
    					placeholder=""
    					name="email"
    					validate={{required: this.getIntlMessage('APP_ERR_REQUIRED'), email: this.getIntlMessage('APP_ERR_EMAIL')}}/>
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