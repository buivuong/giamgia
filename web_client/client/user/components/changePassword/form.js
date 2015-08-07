var FormModel = require('client/user/components/changePassword/model');
var Valid = require('valid');
var UserActions = require('client/user/UserActions');
var UserStore = require('client/user/UserStore');
var Config = require('config');
var FormChangePassWord = React.createClass({
	validation: {
		old_password: false,
		new_password: false,
		confirm_password: false
	},
	validation_server: {
		old_password: false
	},
	propTypes: {
		onClick: React.PropTypes.func
	},
	mixins : [CheckToken],
	getInitialState: function(){
		return {
			timestamp: moment().valueOf()
		};
	},
	componentWillUnmount: function(){
		this.validation = {
			old_password: false,
			new_password: false,
			confirm_password: false
		};
		this.validation_server = {
			old_password: false
		};
	},
	onClick: function(){
		this.props.onClick("onClickCancel");
	},
	onSubmit: function(){
		var isError = false;
		for(var key in this.validation){
			if(!this.validation[key]){
				this.onChange(key);
				isError = true;
			}
		}

		for(var keyServer in this.validation_server){
			if(!this.validation_server[keyServer]){
				isError = true;
			}
		}

		if(!isError){
			var serializedObject = this.refs.form.getSerializedObject();
				serializedObject.id = this.user.id;
				serializedObject.email = this.user.email;
				serializedObject.change_password_at = moment().tz(Config.serverTimezone).format("DD/MM/YYYY HH:mm:ss");
			this.refs.loader.show();
			UserActions.changePassword.triggerPromise(serializedObject)
				.then(function(response){
					this.refs.loader.hide();
					this.props.onClick("onClickSaveSuccess");
				}.bind(this))
				.catch(function(error){
					this.refs.loader.hide();
					this.props.onClick("onClickSaveFail");
				}.bind(this));
		}
		
	},
	refresh: function(){
		this.setState({
			timestamp: moment().valueOf()
		});
	},
	onChangeOldPassword: function(){
		var old_password = this.refs.old_password.getValue();
		var check_old_password = Valid.getClientError(FormModel.old_password, old_password);
		if(check_old_password){
			this.validation.old_password = false;
			this.refs.old_password.addError();
			this.refs.old_password_label.addError();
			this.refs.old_passsword_label_error.addError(check_old_password);
		}
		else {
			this.validation.old_password = true;
			this.refs.old_password.removeError();
			this.refs.old_password_label.removeError();
			this.refs.old_passsword_label_error.removeError();
		}
	},
	onChangeNewPassword: function(){
		var new_password = this.refs.new_password.getValue();
		var check_new_password = Valid.getClientError(FormModel.new_password, new_password);
		if(check_new_password){
			this.refs.new_password.addError();
			this.refs.new_password_label.addError();
			this.refs.new_password_label_error.addError(check_new_password);
		}
		else {
			this.validation.new_password = true;
			this.refs.new_password.removeError();
			this.refs.new_password_label.removeError();
			this.refs.new_password_label_error.removeError();
		}
	},
	onChangeConfirmPassword: function(){
		var new_password = this.refs.new_password.getValue();
		var confirm_password = this.refs.confirm_password.getValue();
		if(new_password !== confirm_password){
			this.validation.confirm_password = false;
			this.refs.confirm_password.addError();
			this.refs.confirm_password_label.addError();
			this.refs.confirm_password_label_error.addError("Must like password");
		}
		else {
			this.validation.confirm_password = true;
			this.refs.confirm_password.removeError();
			this.refs.confirm_password_label.removeError();
			this.refs.confirm_password_label_error.removeError();
		}
	},
	onBlurOldPassword: function(){
		if(this.validation.old_password){
			var checkOldPassword = {
				old_password: this.refs.old_password.getValue(),
				id: this.user.id
			};

			this.refs.loader.show();
			UserActions.checkOldPassword.triggerPromise(checkOldPassword)
				.then(function(response){
					this.refs.loader.hide();
					this.validation_server.old_password = true;
					this.refs.old_password.removeError();
					this.refs.old_password_label.removeError();
					this.refs.old_passsword_label_error.removeError();
				}.bind(this))
				.catch(function(error){
					this.refs.loader.hide();
					if(error.status === 400){
					this.validation_server.old_password = false;
					this.refs.old_password.addError();
					this.refs.old_password_label.addError();
					this.refs.old_passsword_label_error.addError("Password Wrong !!!");
					}
				}.bind(this));
		}
	},
	onChange: function(key, event){
		switch(key){

			case "old_password":
				this.onChangeOldPassword();
				break;
			case "new_password":
				this.onChangeNewPassword();
				break;
			case "confirm_password":
				this.onChangeConfirmPassword();
				break;
			default: break;
		}
	},
	render: function(){
		return (
			<Form type="form" ref="form" onSubmit={this.onSubmit} key={this.state.timestamp}>
				<Loader ref="loader" />
				<Row className="row mt5">
					<Column className="col-md-5 mt5">
						<Label ref="old_password_label" className="control-label">
							Old Password:
						</Label>
					</Column>
					<Column className="col-md-7">
						<Input type="password" 
							   ref="old_password" 
							   name="old_password" 
							   className="form-control input-sm"
							   onChange={this.onChange.bind(null, "old_password")}
							   onBlur={this.onBlurOldPassword} />
						<LabelError ref="old_passsword_label_error" />
					</Column>
				</Row>

				<Row className="row mt5">
					<Column className="col-md-5 mt5">
						<Label ref="new_password_label" className="control-label">
							New Password:
						</Label>
					</Column>
					<Column className="col-md-7">
						<Input type="password" 
							   ref="new_password" 
							   name="new_password" 
							   className="form-control input-sm"
							   onChange={this.onChange.bind(null, "new_password")} />
						<LabelError ref="new_password_label_error" />
					</Column>
				</Row>
				<Row className="row mt5">
					<Column className="col-md-5 mt5">
						<Label ref="confirm_password_label" className="control-label">
							Confirm New Password:
						</Label>
					</Column>
					<Column className="col-md-7">
						<Input type="password" 
						       ref="confirm_password" 
						       name="confirm_password" 
						       className="form-control input-sm"
						       onChange={this.onChange.bind(null, "confirm_password")} />
						<LabelError ref="confirm_password_label_error" />
					</Column>
				</Row>
				<Divider />
				<Wrap className="text-center">
					<List className="list-inline no-margin-bottom margin-top-4x">
						<ListItem>
							<Link className="btn btn-primary" onClick={this.onClick}>
								Cancel
							</Link>
						</ListItem>
						<ListItem>
							<Button type="submit" className="btn btn-primary">
								Save
							</Button>
						</ListItem>
					</List>
				</Wrap> 
			</Form>          			
			);
	}
});
module.exports = FormChangePassWord;