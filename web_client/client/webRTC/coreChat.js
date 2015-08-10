var ChatLocal = require('client/webRTC/chatLocal');
var CoreChat = React.createClass({
	onChat: function(action){
		switch(action){
			case "start":
				this.refs.chat.createConnection();
				break;
			case "send":
				this.refs.chat.sendData();
				break;
			case "stop":
				this.refs.chat.closeDataChannels();
				break;
			default: break;
		}
	},
	render: function(){
		return (
			<div>
			<List className="list-inline">
					<ListItem>
						<Link className="btn btn-primary" onClick={this.onChat.bind(null, "start")}>
							Start
						</Link>
					</ListItem>
					<ListItem>
						<Link className="btn btn-primary" onClick={this.onChat.bind(null, "send")}>
							Send
						</Link>
					</ListItem>
					<ListItem>
						<Link className="btn btn-primary" onClick={this.onChat.bind(null, "stop")}>
							Stop
						</Link>
					</ListItem>
				</List>
				<ChatLocal ref="chat" />
			</div>
			);
	}
});
module.exports = CoreChat;