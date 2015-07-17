var Video = React.createClass({
	$root: null,
	video: null,
	stream: null,
	constraints: {
		qvga: {
			video: {
				mandatory: {
					maxWidth: 320,
					maxHeight: 240
				}
			},
			audio: true
		},
		vga: {
			video: {
				mandatory: {
					maxWidth: 640,
					maxHeight: 480
				}
			},
			audio: true
		},
		hd: {
			video: {
				mandatory: {
					maxWidth: 1024,
                    maxHeight: 768,
					minWidth: 1024,
					minHeight: 768
				}
			},
			audio: true
		}
	},
	getMedia: function(type, event){
		var constraintsObj = null;

		for(var key in this.constraints){
			if(key === type){
				constraintsObj = this.constraints[type];
				break;
			} 
		}

		if(!!this.stream){
			this.video.src = '';
			this.stream.stop();
		}
		navigator.getUserMedia(constraintsObj, this.successCallback, this.errorCallback);
	},
	successCallback: function(stream){
		window.stream = this.stream = stream;
		if(window.URL){
			this.video.src = window.URL.createObjectURL(stream);
		}else{
			this.video.src = stream;
		}

		this.video.play();
	},
	errorCallback: function(error){
		window.alert('Không hỗ trợ camera');
		console.log("navigator.getUserMedia error: ", error);
	},
	componentDidMount: function(){
		this.$root = React.findDOMNode(this);

		this.video = this.$root.querySelector("video");

	},
	log: function(text){
		console.log("At time: " + (performance.now() / 1000).toFixed(3) + " --> " + text);
	},
	start: function(){
		this.log("Requesting local stream");
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

		navigator.getUserMedia(this.constraints.qvga, this.successCallback, this.errorCallback);
	},
	onSignalingError: function(error){
		console.log('Failed to create signaling message : ' + error.name);
	},
	gotLocalDescription: function(description){
		// Add the local description to the local PeerConnection
		localPeerConnection.setLocalDescription(description);
		this.log("Offer from localPeerConnection: \n" + description.sdp);
		// ...do the same with the 'pseudoremote' PeerConnection
		// Note: this is the part that will have to be changed if you want
		// the communicating peers to become remote
		// (which calls for the setup of a proper signaling channel)
		remotePeerConnection.setRemoteDescription(description);
		// Create the Answer to the received Offer based on the 'local' description
		remotePeerConnection.createAnswer(this.gotRemoteDescription, this.onSignalingError);
	},
	gotRemoteDescription: function(description){
		// Set the remote description as the local description of the
		// remote PeerConnection.
		remotePeerConnection.setLocalDescription(description);
		this.log("Answer from remotePeerConnection: \n" + description.sdp);
		// Conversely, set the remote description as the remote description of the
		// local PeerConnection
		localPeerConnection.setRemoteDescription(description);
	},
	call: function(){
		this.log('Starting call');

		if(navigator.webkitGetUserMedia){
			if(this.stream.getVideoTracks().length > 0){
				this.log('Using video device: ' + this.stream.getVideoTracks()[0].label);
			}

			if(this.stream.getAudioTracks().length > 0){
				this.log('Using audio device: ' + this.stream.getAudioTracks()[0].label);
			}
		}

		// Chrome
		if (navigator.webkitGetUserMedia) {
			RTCPeerConnection = webkitRTCPeerConnection;
		// Firefox
		} else if(navigator.mozGetUserMedia){
			RTCPeerConnection = mozRTCPeerConnection;
			RTCSessionDescription = mozRTCSessionDescription;
			RTCIceCandidate = mozRTCIceCandidate;
		}
		this.log("RTCPeerConnection object: " + RTCPeerConnection);

		var servers = null;
		localPeerConnection = new RTCPeerConnection(servers);
		this.log("Created local peer connection object localPeerConnection");
		// Add a handler associated with ICE protocol events
		localPeerConnection.onicecandidate = this.gotLocalIceCandidate;

		// Create the remote PeerConnection object
		remotePeerConnection = new RTCPeerConnection(servers);
		this.log("Created remote peer connection object remotePeerConnection");
		remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
		// Add a handler associated with ICE protocol events...

		// ...and a second handler to be activated as soon as the remote
		// stream becomes available.
		remotePeerConnection.onaddstream = this.gotRemoteStream;

		// Add the local stream (as returned by getUserMedia())
		// to the local PeerConnection.
		localPeerConnection.addStream(this.stream);
		this.log("Added localStream to localPeerConnection");

		// We're all set! Create an Offer to be 'sent' to the callee as soon
		// as the local SDP is ready.
		localPeerConnection.createOffer(this.gotLocalDescription, this.onSignalingError);
	},
	gotRemoteStream: function(event){
		// Associate the remote video element with the retrieved stream
		if (window.URL) {
			// Chrome
			document.getElementById('manh').src = window.URL.createObjectURL(event.stream);
		} else {
			// Firefox
			document.getElementById('manh').src = event.stream;
		}
		this.log("Received remote stream");
	},
	gotLocalIceCandidate: function(event){
		if (event.candidate) {
			// Add candidate to the remote PeerConnection
			remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
			this.log("Local ICE candidate: \n" + event.candidate.candidate);
		}
	},
	gotRemoteIceCandidate: function(event){
		if (event.candidate) {
			// Add candidate to the local PeerConnection
			localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
			this.log("Remote ICE candidate: \n " + event.candidate.candidate);
		}
	},
	hangup: function(){
		log("Ending call");
		// Close PeerConnection(s)
		localPeerConnection.close();
		remotePeerConnection.close();
	},
	render: function(){
		return (
			<div>
				<video autoPlay/>
			</div>
		)
	}
});

module.exports = Video;

/*<button onClick={this.getMedia.bind(this, 'qvga')}>320x240</button>
				<button onClick={this.getMedia.bind(this, 'vga')}>640x480</button>
				<button onClick={this.getMedia.bind(this, 'hd')}>1280x960</button>*/