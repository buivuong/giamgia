var MyHealthWizard = require('client/templates/myHealthWizard');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin, CheckToken],
	render: function(){
		return (
			<div>
				<Box className="myhealth-body-box">
					<Wrap className="myhealth-history-wrap arial">
						<Title type="h3" className="heading-h2">Personal Health History</Title>
						<Panel className="panel-body panel-body-nopadding">
							<MyHealthWizard module="health_history"/>
						</Panel>
					</Wrap>
				</Box>
			</div>
		)
	}
});

module.exports = View;