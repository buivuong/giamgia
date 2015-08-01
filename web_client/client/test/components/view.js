var FormTest = require('client/test/components/form');
var TableTest = require('client/test/components/table');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin],
	render: function(){
		return (
			<div className="mainpanel" style={{height: "3000px"}}>
				<div className="col-md-12" style={{marginBottom: '10px'}}>
					<h3>Form Test</h3>
					<FormTest/>
				</div>
				<div className="col-md-12">
					<TableTest/>
				</div>
			</div>
		)
	}
});

module.exports = View;