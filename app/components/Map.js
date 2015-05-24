var React = require('react');

var Map = React.createClass({
	propTypes: {
		width: React.PropTypes.string,
		height: React.PropTypes.string,
		zoom: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			width: '400',
			height: '400',
			zoom: '8'
		}
	},
	load: function(){
		setTimeout(function(){
			var lat = 10.8230989;
			var longt = 106.6296638;

			var center = new google.maps.LatLng(lat, longt);

			var options = {
			  'zoom': 13,
			  'center': center,
			  'mapTypeId': google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(this.getDOMNode(), options);

			var markers = [];
			var latLng = new google.maps.LatLng(lat, longt);
  			var marker = new google.maps.Marker({'position': latLng});
  			markers.push(marker);

  			lat = 10.8230989;
  			longt = 106.6290630;
  			var latLng = new google.maps.LatLng(lat, longt);
  			var marker = new google.maps.Marker({'position': latLng});
  			markers.push(marker);
			
			var markerCluster = new MarkerClusterer(map, markers);
		}.bind(this), 300);
	},
	render: function(){
		return (
			<div style={{width: this.props.width+'px', height: this.props.height+'px'}}></div>
		);
	}
});

module.exports = Map;