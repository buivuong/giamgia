var Left = require('client/user/components/login/left');
var FormLogin = require('client/user/components/login/formLogin');
var Bottom = require('client/user/components/login/bottom');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin, CheckNoToken],
	componentWillMount: function(){
		$("body").addClass("signin");
	},
	componentWillUnmount: function(){
		$("body").removeClass("signin");
	},
	render: function(){
		return (
			<Section>
				<Panel className="signinpanel">
					<Row className="row">
						<Left />
						<Column className="col-md-5">
							<FormLogin />
						</Column>
					</Row>
					<Bottom />
				</Panel>
			</Section>
			);
	}
});
module.exports = View;