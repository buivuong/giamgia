var IntlMixin = ReactIntl.IntlMixin;
var Valid = require('valid');
var FormModel = require('client/user/components/register/model');
var UserActions = require('client/user/UserActions');
var UserStore = require('client/user/UserStore');
var Config = require('config');

var FormRegister = React.createClass({
	validation: {
		first_name: false,
		last_name: false,
		email: false,
		username: false,
		password: false,
		password_repeat: true
	},
	validation_server: {
		username: true,
		email: true
	},
	getInitialState: function(){
		return {
			timestamp: moment().valueOf()
		}
	},
	componentWillUnmount: function(){
		this.validation = {
			first_name: false,
			last_name: false,
			email: false,
			username: false,
			password: false,
			password_repeat: true
		}
		this.validation_server = {
			username: true,
			email: true
		}
	},
	onChangeFirstName: function(){
		var first_name = this.refs.first_name.getValue();
		var last_name = this.refs.last_name.getValue();

		var check_first_name = Valid.getClientError(FormModel.first_name, first_name);
		var check_last_name = Valid.getClientError(FormModel.last_name, last_name);

		if(check_first_name){
			this.validation.first_name = false;
			this.refs.first_name.addError();
			this.refs.first_last_name_label.addError();
			this.refs.first_last_name_error.addError(check_first_name);
		}else{
			this.validation.first_name = true;
			this.refs.first_name.removeError();
			if(check_last_name){
				this.validation.last_name = false;
				this.refs.last_name.addError();
				this.refs.first_last_name_label.addError();
				this.refs.first_last_name_error.addError(check_last_name);
			}else{
				this.validation.last_name = true;
				this.refs.last_name.removeError();
				this.refs.first_last_name_label.removeError();
				this.refs.first_last_name_error.removeError();
			}
		}
	},
	onChangeLastName: function(){
		var first_name = this.refs.first_name.getValue();
		var last_name = this.refs.last_name.getValue();

		var check_first_name = Valid.getClientError(FormModel.first_name, first_name);
		var check_last_name = Valid.getClientError(FormModel.last_name, last_name);

		if(check_last_name){
			this.validation.last_name = false;
			this.refs.last_name.addError();
			this.refs.first_last_name_label.addError();
			this.refs.first_last_name_error.addError(check_last_name);
		}else{
			this.validation.last_name = true;
			this.refs.last_name.removeError();
			if(check_first_name){
				this.validation.first_name = false;
				this.refs.first_name.addError();
				this.refs.first_last_name_label.addError();
				this.refs.first_last_name_error.addError(check_first_name);
			}else{
				this.validation.first_name = true;
				this.refs.first_name.removeError();
				this.refs.first_last_name_label.removeError();
				this.refs.first_last_name_error.removeError();
			}
		}
	},
	onChangeUsername: function(){
		var username = this.refs.username.getValue();

		var check_username = Valid.getClientError(FormModel.username, username);

		if(check_username){
			this.validation.username = false;
			this.refs.username.addError();
			this.refs.username_label.addError();
			this.refs.username_error.addError(check_username);
		}else{
			this.validation.username = true;
			this.refs.username.removeError();
			this.refs.username_label.removeError();
			this.refs.username_error.removeError();
		}
	},
	onChangePassword: function(){		
		var password = this.refs.password.getValue();

		var check_password = Valid.getClientError(FormModel.password, password);

		if(check_password){
			this.validation.password = false;
			this.refs.password.addError();
			this.refs.password_label.addError();
			this.refs.password_error.addError(check_password);
		}else{
			this.validation.password = true;
			this.refs.password.removeError();
			this.refs.password_label.removeError();
			this.refs.password_error.removeError();

			var password_repeat = this.refs.password_repeat.getValue();

			if(password !== password_repeat){
				this.validation.password_repeat = false;
				this.refs.password_repeat.addError();
				this.refs.password_repeat_label.addError();
				this.refs.password_repeat_error.addError("Must like password");
			}else{
				this.validation.password_repeat = true;
				this.refs.password_repeat.removeError();
				this.refs.password_repeat_label.removeError();
				this.refs.password_repeat_error.removeError();
			}
		}
	},
	onChangeEmail: function(){
		var email = this.refs.email.getValue();

		var check_email = Valid.getClientError(FormModel.email, email);

		if(check_email){
			this.validation.email = false;
			this.refs.email.addError();
			this.refs.email_label.addError();
			this.refs.email_error.addError(check_email);
		}else{
			this.validation.email = true;
			this.refs.email.removeError();
			this.refs.email_label.removeError();
			this.refs.email_error.removeError();
		}
	},
	onChangePasswordRepeat: function(){
		var password_repeat = this.refs.password_repeat.getValue();
		var password = this.refs.password.getValue();

		if(password !== password_repeat){
			this.validation.password_repeat = false;
			this.refs.password_repeat.addError();
			this.refs.password_repeat_label.addError();
			this.refs.password_repeat_error.addError("Must like password");
		} 
		else {
			this.validation.password_repeat = true;
			this.refs.password_repeat.removeError();
			this.refs.password_repeat_label.removeError();
			this.refs.password_repeat_error.removeError();
		}
	},
	onChange: function(key, event){
		switch(key){
			case 'first_name':
				this.onChangeFirstName();
				break;
			case 'last_name':
				this.onChangeLastName();
				break;
			case 'email':
				this.onChangeEmail();
				break;
			case 'username':
				this.onChangeUsername();
				break;
			case 'password':
				this.onChangePassword();
				break;
			case 'password_repeat':
				this.onChangePasswordRepeat();
				break;
		}
	},
	onBlurUsername: function(event){
		if(this.validation.username){
			var username = this.refs.username.getValue();

			this.refs.loader.show();
			UserActions.checkUsername.triggerPromise({username: username})
			.then(function(response){
				this.refs.loader.hide();
				this.validation_server.username = true;
				this.refs.username.removeError();
				this.refs.username_label.removeError();
				this.refs.username_error.removeError();
			}.bind(this))
			.catch(function(error){
				if(error.status === 400){
					this.refs.loader.hide();
					this.validation_server.username = false;
					this.refs.username.addError();
					this.refs.username_label.addError();
					this.refs.username_error.addError('Username exists');
				}
			}.bind(this))
		}
	},
	onBlurEmail: function(event){
		if(this.validation.email){
			var email = this.refs.email.getValue();

			this.refs.loader.show();
			UserActions.checkEmail.triggerPromise({email: email})
				.then(function(response){
				this.refs.loader.hide();
				this.validation_server.email = true;
				this.refs.email.removeError();
				this.refs.email_label.removeError();
				this.refs.email_error.removeError();
			}.bind(this))
			.catch(function(error){
				if(error.status === 400){
					this.refs.loader.hide();
					this.validation_server.email = false;
					this.refs.email.addError();
					this.refs.email_label.addError();
					this.refs.email_error.addError('Email exists');
				}
			}.bind(this))
		}
	},
	onSubmit: function(event){
		var error = false;

		for(var key in this.validation){
			if(!this.validation[key]){
				error = true;
				this.onChange(key);
			}
		}

		for(var key in this.validation_server){
			if(!this.validation_server[key]){
				error = true;
			}
		}

		if(!error){
			this.refs.loader.show();

			var serializedObject = this.refs.form.getSerializedObject();
			serializedObject.created_at = serializedObject.updated_at = moment().tz(Config.serverTimezone).format('YYYY-MM-DD HH:mm:ss');
			serializedObject.deleted = 'no';
			serializedObject.active = 'no';
			serializedObject.type = 'patient';

			UserActions.register.triggerPromise(serializedObject)
			.then(function(response){
				this.refs.loader.hide();
				this.setState({timestamp: moment().valueOf()});
				this.componentWillUnmount();
			}.bind(this))
			.catch(function(response){
				this.refs.loader.hide();
			}.bind(this))
		}
	},
	render: function(){
		return (
			<Form type="form" onSubmit={this.onSubmit} ref="form" key={this.state.timestamp}>
				<Loader ref="loader"/>
				<Title type="h3" className="nomargin">
					Sign Up
				</Title>
				<Sentence className="mt5 mb20">
					Already a member?&nbsp;
					<Link><Bold>Sign in</Bold></Link>
				</Sentence>

				<Label className="control-label" ref="first_last_name_label">
					Name
				</Label>
				<Row className="row mb10">
					<Column className="col-sm-6">
						<Input type="text" 
							name="first_name" 
							className="form-control" 
							placeholder="Firstname"
							onChange={this.onChange.bind(this, 'first_name')}
							ref="first_name"/>
					</Column>
					<Column className="col-sm-6">
						<Input type="text" 
							name="last_name"
							className="form-control" 
							placeholder="Lastname"
							onChange={this.onChange.bind(this, 'last_name')}
							ref="last_name"/>
					</Column>
				</Row>
				<LabelError ref="first_last_name_error"/>

				<Row className="mb10">
					<Label ref="username_label" className="control-label">Username</Label>
					<Input type="text" 
						name="username"
						className="form-control"
						onChange={this.onChange.bind(this, 'username')}
						onBlur={this.onBlurUsername}
						ref="username"/>
					<LabelError className="mt5" ref="username_error"/>
				</Row>

				<Row className="mb10">
					<Label ref="email_label" className="control-label">Email Address</Label>
					<Input type="text" 
						name="email"
						className="form-control"
						onChange={this.onChange.bind(this, 'email')}
						onBlur={this.onBlurEmail}
						ref="email"/>
					<LabelError className="mt5" ref="email_error"/>
				</Row>

				<Row className="mb10">
					<Label ref="password_label" className="control-label">Password</Label>
					<Input type="password"
						name="password"
						className="form-control"
						onChange={this.onChange.bind(this, 'password')}
						ref="password"/>
					<LabelError className="mt5" ref="password_error"/>
				</Row>

				<Row className="mb10">
					<Label ref="password_repeat_label" className="control-label">Retype Password</Label>
					<Input type="password"
						className="form-control"
						onChange={this.onChange.bind(this, 'password_repeat')}
						ref="password_repeat"/>
					<LabelError className="mt5" ref="password_repeat_error"/>
				</Row>

				<br/>

				<Button className="btn btn-primary btn-block" type="submit">Sign Up</Button>
			</Form>
		)
	}
});

module.exports = FormRegister;