var React = require('react');
var Registration = require('./registration.jsx');

var Template = React.createClass({
	render: function(){
		return (
			<div className="ui two column centered grid">
				<div className="column">
					<div className="ui segment">
						<Registration/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Template;