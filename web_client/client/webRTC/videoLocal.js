var is = require('is_js');
var VideoWebRTC = React.createClass({
	localVideo: null,
	remoteVideo: null,
	localStream: null,
	localPeerConnection: null,
	remotePeerConnection: null,
	quanlity: "qvgaConstraints",
	constraints: {
		qvgaConstraints: {
		video: {
			mandatory: {
				maxWidth: 320,
				maxHeight: 240
				}
			}
		},
		vgaConstraints: {
			video: {
				mandatory: {
					maxWidth: 640,
					maxHeight: 480
				}
			}
		},
		hdConstraints: {
			video: {
				mandatory: {
					minWidth: 1280,
					minHeight: 960
				}
			}
		}
	},
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
	},
	componentDidMount: function(){
		this.localVideo = React.findDOMNode(this.refs.localVideo);
		this.remoteVideo = React.findDOMNode(this.refs.remoteVideo);
	},
	componentWillUnmount: function(){
		this.localVideo = null;
		this.remoteVideo = null;
		this.constraints = null;
		this.quanlity = null;
	},
	log: function(text){
		console.log("At time:" + (performance.now()/1000).toFixed(3) + "----->" + text);
	},
	start: function(){
		this.log("Requesting local stream");
		navigator.getUserMedia = navigator.getUserMedia ||
			    				 navigator.webkitGetUserMedia ||
			    				 navigator.mozGetUserMedia;
		navigator.getUserMedia(this.constraints[this.quanlity], this.successCallback, this.errorCallback);
	},
	successCallback: function(stream){
		this.log("Received local stream");
		if(window.URL){
			//chrome
			this.localVideo.src = window.URL.createObjectURL(stream);
		}
		else {
			//firefox, opera
			this.localVideo.src = stream;
		}
		this.localVideo.play();
		this.localStream = stream;
	},
	errorCallback: function(error){
		console.log(error);
	},
	onChangeQuanlity: function(quanlity){
		this.quanlity = quanlity;
			if(this.localStream){
			this.localStream.src = null;
			this.localStream.stop();
		}
		this.start();
	},
	onCall: function(){
		if(navigator.webkitGetUserMedia && 
		   is.not.null(this.localStream) &&
		   is.not.null(this.remoteStream)){
			if(this.localStream.getVideoTracks().length > 0){
				this.log("Using video device: " + this.localStream.getVideoTracks()[0].label);
			}
			if(this.localStream.getAudioTracks().length > 0){
				this.log("Using audio device: " + this.localStream.getAudioTracks()[0].label);
			}
		}

		//chorme
		if(navigator.webkitGetUserMedia){
			RTCPeerConnection = webkitRTCPeerConnection;
		}
		else {
			//firefox
			RTCPeerConnection = mozRTCPeerConnection;
			RTCSessionDescription = mozRTCSessionDescription;
			RTCIceCandidate = mozRTCIceCandidate;
		}
		this.log("RTCPeerConnection object:" + RTCPeerConnection);

		var servers = null;

		this.localPeerConnection = new RTCPeerConnection(servers);
		this.log("Create local peer connection object localPeerConnection");
		this.localPeerConnection.onicecandidate = this.gotLocalIceCandidate;

		this.remotePeerConnection = new RTCPeerConnection(servers);
		this.log("Creaate remote peer connection object remotePeerConnection");
		this.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
		this.remotePeerConnection.onaddstream = this.gotRemoteStream;
		this.localPeerConnection.addStream(this.localStream);
		this.log("Added localStream to localPeerConnection");
		this.localPeerConnection.createOffer(this.gotLocalDescription, this.onSignalingError);
	},
	onSignalingError: function(error){
		console.log("Fail to create signaling message: " + error.name);
	},
	gotLocalDescription: function(description){
		this.localPeerConnection.setLocalDescription(description);
		this.log("Offer from localPeerConnection: \n" + description.sdp);

		this.remotePeerConnection.setRemoteDescription(description);
		this.remotePeerConnection.createAnswer(this.gotRemoteDescription, this.onSignalingError);
	},
	gotRemoteDescription: function(description){
		this.remotePeerConnection.setLocalDescription(description);
		this.log("Answer form remotePeerConnection: \n" + description.sdp);

		this.localPeerConnection.setRemoteDescription(description);
	},
	onHangup: function(){
		this.log("Ending call");
		if(is.not.null(this.localPeerConnection)){
			this.localPeerConnection.close();
			this.localStream = null;
		}
		if(is.not.null(this.remotePeerConnection)){
			this.remotePeerConnection.close();
			this.remoteStream = null;
		}
	},
	gotRemoteStream: function(event){
		if(window.URL){
			this.remoteVideo.src = window.URL.createObjectURL(event.stream);
		}
		else {
			this.remoteVideo.src = event.stream;
		}
		this.remoteVideo.play();
		this.log("Received stream");
	},
	gotLocalIceCandidate: function(event){
		if(event.candidate){
			this.remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
			this.log("Local ICE candiate: \n" + event.candidate.candidate);
		}
	},
	gotRemoteIceCandidate: function(event){
		if(event.candidate){
			this.localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
			this.log("Remote ICE candidate: \n" + event.candidate.candidate);
		}
	},
	render: function(){
		return (
			<div>
				<video ref="localVideo" className={this.props.className} style={this.props.style} onClick={this.onClick}>
				</video>
				<video ref="remoteVideo" className={this.props.className} style={this.props.style} onClick={this.onClick}>
				</video>
			</div>
			);
	}
});
module.exports = VideoWebRTC;