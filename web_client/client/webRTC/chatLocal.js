var ChatLocal = React.createClass({
	sendChannel: null,
	receiveChannel: null,
	dataChannelSend: null,
	dataChannelReceive: null,
	localPeerConnection: null,
	remotePeerConnection: null,
	componentDidMount: function(){
		this.dataChannelSend = React.findDOMNode(this.refs.dataChannelSend);
		this.dataChannelReceive = React.findDOMNode(this.refs.dataChannelReceive);
	},
	componentWillUnmount: function(){
		this.sendChannel = null;
		this.receiveChannel = null;
		this.localPeerConnection = null;
		this.remotePeerConnection = null;
		this.dataChannelSend = null;
		this.dataChanelReceive = null;
	},
	log: function(text){
		console.log("At time: " + (performance.now()/1000).toFixed(3) + "--->" + text);
	},
	createConnection: function(){
		if(navigator.webkitGetUserMedia){
			RTCPeerConnection = webkitRTCPeerConnection;
		}
		else if(navigator.mozGetUserMedia){
			RTCPeerConnection = mozRTCPeerConnection;
			RTCSessionDescription = mozRTCSessionDescription;
			RTCIceCandidate = mozRTCIceCandidate;
		}
		this.log("RTCPeerConnection object:" + RTCPeerConnection);

		var servers = null;
		var pc_constraints = {
			'optional': [
			{
				'DtlsSrtpKeyAgreement': true
			}
			]};
		this.localPeerConnection = new RTCPeerConnection(servers, pc_constraints);
		this.log("Create local peer connection object, with Data Chanel");
		try{
			this.sendChannel = this.localPeerConnection.createDataChannel("sendDataChanel", {"reliable": true});
			this.log("Created reliable send data chanel");
		}
		catch(e){
			alert("Failed to create data chanel!");
			this.log("createDataChanel failed with following message:" + e.message);
		}

		this.localPeerConnection.onicecandidate = this.gotLocalCandidate;

		this.sendChannel.onopen = this.handleSendChannelStateChange;
		this.sendChannel.onclose = this.handleSendChannelStateChange;

		this.remotePeerConnection = new RTCPeerConnection(servers, pc_constraints);
		this.log("Create remote peer connection object, with DataChanel");

		this.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
		this.remotePeerConnection.ondatachannel = this.gotReceiveChannel;

		this.localPeerConnection.createOffer(this.gotLocalDescription, this.onSignalingError);
	},
	onSignalingError: function(error){
		console.log("Failed to create signaling message: " + error.name);
	},
	sendData: function(){
		this.sendChannel.send(this.getValue("dataChannelSend"));
		this.log("send data:"+this.getValue("dataChannelSend"));
	},
	closeDataChannels: function(){
		this.log("Closing data chanel");
		this.sendChannel.close();
		this.log("Closed data chanel with label: " + this.sendChannel.label);

		this.receiveChanel.close();
		this.log("Closed data chanel with label: " + this.receiveChannel.label);

		this.localPeerConnection.close();
		this.remotePeerConnection.close();

		this.localPeerConnection = null;
		this.remotePeerConnection = null;
		this.log("Closed peer connection");

		this.dataChannelSend.value = "";
		this.dataChannelReceive.value ="";

		this.dataChannelSend.placeholder = "1: Press start; 2: Enter text; 3 Press send.";
	},
	gotLocalDescription: function(desc){
		this.localPeerConnection.setLocalDescription(desc);
		this.remotePeerConnection.setRemoteDescription(desc);

		this.remotePeerConnection.createAnswer(this.gotRemoteDescription, this.onSignalingError);
	},
	gotRemoteDescription: function(desc){
		this.remotePeerConnection.setLocalDescription(desc);
		this.log("Answer form remotePeerConnection /'s SDP: \n" + desc.sdp);
		this.localPeerConnection.setRemoteDescription(desc);
	},
	gotLocalCandidate: function(event){
		this.log("Local ice callback");
		if(event.candidate){
			this.remotePeerConnection.addIceCandidate(event.candidate);
			this.log("Local Ice candidate: \n" + event.candidate.candidate);
		}
	},
	gotRemoteIceCandidate: function(event){
		this.log("Remote Ice callback");
		if(event.candidate){
			this.localPeerConnection.addIceCandidate(event.candidate);
			this.log("Remote Ice candidate: \n" + event.candidate.candidate);
		}
	},
	gotReceiveChannel: function(event){
		this.log("Receive channel callback: event---->" + event);
		this.receiveChannel = event.channel;

		this.receiveChannel.onopen = this.handleReceiveChannelStateChange;
		this.receiveChannel.onmessage = this.handleMessage;
		this.receiveChannel.onclose = this.handleReceiveChannelStateChange;
	},
	handleMessage: function(event){
		this.log("Receive message: " + event.data);
		this.dataChannelReceive.value = event.data;
		this.dataChannelSend.value = "";
	},
	handleSendChannelStateChange: function(){
		var readyState = this.sendChannel.readyState;
		this.log("Send chanel state is: " + readyState);
		if(readyState == "open"){
			this.dataChannelSend.focus();
			this.dataChannelSend.placeholder = "";
		}
		else {
			//DO NOTHING
		}
	},
	handleReceiveChannelStateChange: function(){
		var readyState = this.receiveChannel.readyState;
		this.log("Receive chanel state is:" + readyState);
	},
	getValue: function(ref){
		return React.findDOMNode(this.refs[ref]).value;
	},
	render: function(){
		return (
			<div>
				<Row className="row">
					<Column className="col-md-5">
						<textarea ref="dataChannelSend" rows="5" cols="10" className="form-control">
						</textarea>
					</Column>
					<Column className="col-md-5">
						<textarea ref="dataChannelReceive" rows="5" cols="10" className="form-control">
						</textarea>
					</Column>
				</Row>
			</div>
			);
	}
});
module.exports = ChatLocal;