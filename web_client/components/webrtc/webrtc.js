var WebRTC = React.createClass({
	pc1: null,
	pc2: null,
	sendChannel: null,
	receiveChannel: null,
	localStream: null,
	sdpConstraints: {
		mandatory: {
			OfferToReceiveAudio: true,
			OfferToReceiveVideo: true
		}
	},
	componentDidMount: function(){
		React.findDOMNode(this.refs.start).disabled = false;
		React.findDOMNode(this.refs.call).disabled = true;
		React.findDOMNode(this.refs.hangup).disabled = true;
	},
	gotStream: function(stream){
		React.findDOMNode(this.refs.local).src = webkitURL.createObjectURL(stream);
		this.localStream = stream;
		React.findDOMNode(this.refs.call).disabled = false;
	},
	start: function(){
		React.findDOMNode(this.refs.start).disabled = true;
		navigator.webkitGetUserMedia({audio: true, video: true}, this.gotStream, function(){});
	},
	call: function(){
		React.findDOMNode(this.refs.call).disabled = true;
		React.findDOMNode(this.refs.hangup).disabled = false;

		var videoTracks = this.localStream.getVideoTracks();
		var audioTracks = this.localStream.getAudioTracks();
		var servers = null;

		this.pc1 = new webkitRTCPeerConnection(servers);

		this.pc1.onicecandidate = function(event){
			if(event.candidate){
				this.pc2.addIceCandidate(new RTCIceCandidate(event.candidate));
			}
		}.bind(this)

		this.pc2 = new webkitRTCPeerConnection(servers);
		this.pc2.onicecandidate = function(){
			if(event.candidate){
				this.pc1.addIceCandidate(new RTCIceCandidate(event.candidate));
			}
		}.bind(this)

		this.pc2.onaddstream = function(event){
			React.findDOMNode(this.refs.remote).src = webkitURL.createObjectURL(event.stream);
		}.bind(this)

		this.pc1.addStream(this.localStream);
		this.pc1.createOffer(function(desc){
			this.pc1.setLocalDescription(desc);
			this.pc2.setRemoteDescription(desc);
			this.pc2.createAnswer(function(desc){
				this.pc2.setLocalDescription(desc);
				this.pc1.setRemoteDescription(desc);
			}.bind(this), null, this.sdpConstraints);
		}.bind(this));
	},
	hangup: function(){
		this.pc1.close();
		this.pc2.close();
		this.pc1 = null;
		this.pc2 = null;

		React.findDOMNode(this.refs.hangup).disabled = true;
		React.findDOMNode(this.refs.call).disabled = false;
	},
	createConnection: function(){
		var servers = null;
		this.pc1 = new webkitRTCPeerConnection(servers, {
			optional: [{RtpDataChannels: true}]
		});

		try{
			this.sendChannel = this.pc1.createDataChannel('sendDataChannel', {reliable: false});
		}catch(e){
			alert('You need Chrome M25 or later with --enable-data-channels flag');
		}

		this.pc1.onicecandidate = function(event){
			if(event.candidate)
				this.pc2.addIceCandidate(event.candidate);
		}
		this.sendChannel.onopen = function(){
			
		}
	},
	render: function(){
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<h2>Send Data</h2>
						<textarea ref="dataChannelSend" rows="5" cols="15" disabled="true"/>
						<button ref="startButton" onClick={this.createConnection}>Start</button>
						<button ref="sendButton" onClick={this.sendData}>Send Data</button>
						<button ref="closeButton" onClick={this.closeDataChannel}>Stop Send Data</button>
					</div>
					<div className="col-md-6">
						<h2>Received Data</h2>
						<textarea ref="dataChannelReceive" rows="5" cols="15" disabled="true"/>
					</div>
				</div>
				<video ref="local" autoPlay="true" muted="true"/>
				<video ref="remote" autoPlay="true"/>
				<button onClick={this.start} ref="start">Start</button>
				<button onClick={this.call} ref="call">Call</button>
				<button onClick={this.hangup} ref="hangup">Hangup</button>
				<textarea ref="text1"/>
				<textarea ref="text2"/>
			</div>
		)
	}
});

module.exports = WebRTC;