var React = require('react');
var Auth_Mixin = require('admin_auth');

var Dashboard = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [Auth_Mixin],
	render: function(){
		return (
			<div>
				saasasasasasas
			</div>			
		);
	}
});

module.exports = Dashboard;