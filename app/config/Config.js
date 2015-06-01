var Config = {
	baseServerUrl: 'http://localhost:3001/api/ads/v1/',
	baseServerUrlAdmin: 'http://localhost:3001/api/ads/v1/admin/',
	baseUrlMap: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBZMCWWCBARxWex04NbLyQoh0kAue9GZGo&v=3.exp&signed_in=true&language=vn',
	defaultMapLocation: {
		lat: 10.746903,
		long: 106.676292
	},
	poll: function(){
		var loop;
		var timeout = 20;

		loop = function(){
			setTimeout(function(){
				timeout--;
				var scripts = document.getElementsByTagName('script');
				if(scripts.length > 0){
					return 2;
				}else if(timeout > 0){
					loop(id);
				}
				else{
					return 1;
				}
			}, 200)
		}

		return loop();
	}
}

module.exports = Config;