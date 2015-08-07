var Adapter = {
	RTCPeerConnection = null;
	getUserMedia = null;
	attachMediaStream = null;
	reattachMediaStream = null;
	webrtcDetectedBrowser = null;
	componentWillUnmount: function(){
		this.RTCPeerConnection = null;
		this.getUserMedia = null;
		this.attachMediaStream = null;
		this.reattachMediaStream = null;
		this.webrtcDetectedBrowser = null;
	},
	componentWillMount: function(){
		if (navigator.mozGetUserMedia) {
  			console.log("This appears to be Firefox");

  		this.webrtcDetectedBrowser = "firefox";

  		// The RTCPeerConnection object.
  		this.RTCPeerConnection = mozRTCPeerConnection;

  		// The RTCSessionDescription object.
  		this.RTCSessionDescription = mozRTCSessionDescription;

  		// The RTCIceCandidate object.
  		this.RTCIceCandidate = mozRTCIceCandidate;

  		// Get UserMedia (only difference is the prefix).
  		// Code from Adam Barth.
  		this.getUserMedia = navigator.mozGetUserMedia.bind(navigator);
	},
	trace: function(){
		if (text[text.length - 1] == '\n') {
    		text = text.substring(0, text.length - 1);
  		}
  		console.log((performance.now() / 1000).toFixed(3) + ": " + text);
	},
	attachMediaStream: function(element, stream){
		console.log("Attaching media stream");
    	element.mozSrcObject = stream;
    	element.play();
	},
	reattachMediaStream: function(to, from) {
    	console.log("Reattaching media stream");
    	to.mozSrcObject = from.mozSrcObject;
    	to.play();
  	}
};

module.exports = Adapter;