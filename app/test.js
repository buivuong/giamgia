var React = require('react');
var Map = require('Map');

var Test = React.createClass({
	loadMap: function(){
		this.refs.map.load();
	},
	render: function(){
		return (
			<div>
				<button onClick={this.loadMap}>Load</button>
				<Map ref="map" zoom="12"/>
			</div>
		);
	}
});

module.exports = Test;