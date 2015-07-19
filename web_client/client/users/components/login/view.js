var LeftView = require('client/users/components/login/left');
var FootView = require('client/users/components/login/foot');
var FormLogin = require('client/users/components/login/form');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin],
	componentWillMount: function(){
		$('body').addClass('signin');
	},
	componentWillUnmount: function(){
		$('body').removeClass('signin');
	},
	render: function(){
		return (
			<section>
				<div className="signinpanel">
					<div className="row">
						<LeftView/>
						<div className="col-md-5">
                			<FormLogin/>
            			</div>
					</div>
					<FootView/>
				</div>
			</section>
		)
	}
});

module.exports = View;