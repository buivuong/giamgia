var Form = require('components/form/Form');
var FormFieldText = require('components/form/FormFieldText');
var IntlMixin = ReactIntl.IntlMixin;

var FormLogin = React.createClass({
	mixins: [IntlMixin],
	componentDidMount: function(){
		this.refs.form.setRefs(this.refs);
	},
	onSubmit: function(){
		
	},
	render: function(){
		return (
			<Form onSubmit={this.onSubmit} ref="form">
        		<h4 className="nomargin">Sign In</h4>
        		<p className="mt5 mb20">Login to access your account.</p>
    			
    			<FormFieldText ref="username"
    				customInputClass="form-control uname"
    				placeholder="Username"
    				name="username"
    				validate={{required: 'Required'}}>
        		</FormFieldText>
        		<FormFieldText ref="password"
    				customInputClass="form-control pword"
    				placeholder="Password"
    				name="password"
    				validate={{required: 'Required'}}>
        		</FormFieldText>
        		<a href=""><small>Forgot Your Password?</small></a>
        		<button className="btn btn-primary btn-block">Sign In</button>
			</Form>
		)
	}
});

module.exports = FormLogin;