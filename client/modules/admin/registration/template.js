var React = require('react');
var Registration_Form = require('admin/registration/form');

var Template = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	render: function(){
		return (
			<div className="ui one column stackable center aligned page grid">
   				<div className="column six wide" style={{marginTop: '30px', textAlign: 'left'}}>
       				<Registration_Form/>
   				</div>
			</div>
		);
	}
});

module.exports = Template;