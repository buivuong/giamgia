var React = require('react');

var Map = React.createClass({
	propTypes: {
		width: React.PropTypes.string,
		height: React.PropTypes.string,
		zoom: React.PropTypes.string
	},
	map: null,
	geocoder: null,
	marker: null,
	removeMarker: function(){
		this.marker.setMap(null);
	},
	showCurrentPosition: function(position){
		console.log(position);

		var lat = position.coords.latitude;
  		var lng = position.coords.longitude;

  		var latlng = new google.maps.LatLng(lat, lng);
  		var geocoder = new google.maps.Geocoder();
  		geocoder.geocode({latLng: latlng}, function(results, status){
  			console.log(status);
  			if(status === 'OK'){
  				if(results[0]){
  					console.log(results[0].formatted_address);
  				}
  			}else{
  				alert('No result Found');
  			}
  		});

  		this.map.setCenter(new google.maps.LatLng(lat, lng));

  		this.marker = new google.maps.Marker({
			map: this.map,
			position: new google.maps.LatLng(lat, lng)
		});
	},
	getCurrentLocation: function(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position){
				this.showCurrentPosition(position);
			}.bind(this), function(error){
				console.log(error);
			}.bind(this), {maximumAge: 600000});
		}else{
			alert("Geolocation is not supported by this browser.");
		}
	},
	getDefaultProps: function(){
		return {
			width: '100%',
			height: '400px',
			zoom: '13'
		}
	},
	load: function(option){
		var center = new google.maps.LatLng(option.lat, option.long);

		var options = {
			zoom: parseInt(this.props.zoom),
			center: center,
			disableDefaultUI: true
		}

		this.map = new google.maps.Map(this.getDOMNode(), options);
		this.geocoder = new google.maps.Geocoder();
	},
	loadMarkerWithAddress: function(address){
		setTimeout(function(){
			this.geocoder.geocode({address: address}, function(results, status){
				if(status == google.maps.GeocoderStatus.OK){

	    			this.map.setCenter(results[0].geometry.location);
	    			if(this.marker !== null)
	    				this.removeMarker();

	    			this.marker = new google.maps.Marker({
	        			map: this.map,
	        			position: results[0].geometry.location
	    			});
	   			
	  			} else {
	    			//alert("Geocode was not successful for the following reason: " + status);
	  			}
			}.bind(this));
		}.bind(this), 200);
	},
	load2: function(){
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
			<div style={{width: this.props.width, height: this.props.height}}></div>
		);
	}
});

module.exports = Map;