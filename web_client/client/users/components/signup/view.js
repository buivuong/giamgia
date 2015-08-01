var Left = require('client/users/components/signup/left');
var FormSignup = require('client/users/components/signup/form');
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
				<div className="signuppanel">
					<div className="row">
						<div className="col-md-6">
							<Left/>
						</div>
						<div className="col-md-6">
							<FormSignup/>
						</div>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = View;