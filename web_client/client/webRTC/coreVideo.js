var VideoLocal = require('client/webRTC/videoLocal');
var Core = React.createClass({
	onQuanlity: function(quanlity){
		this.refs.localVideo.onChangeQuanlity(quanlity);
	},
	onAction: function(action){
		switch(action){
			case "start":
				this.refs.localVideo.start();
				break;
			case "call":
				this.refs.localVideo.onCall();
				break;
			case "hangup":
				this.refs.localVideo.onHangup();
				break;
			default: 
				break;
		}
	},
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
				<Header className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							Demo WebRTC
						</Title>
					</Panel>
				</Header>
				<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary" onClick={this.onQuanlity.bind(null, "qvgaConstraints")}>
								Low
							</Link>
						</ListItem>
						<ListItem>
							<Link className="btn btn-primary" onClick={this.onQuanlity.bind(null, "vgaConstraints")}>
								Medium
							</Link>
						</ListItem>
						<ListItem>
							<Link className="btn btn-primary" onClick={this.onQuanlity.bind(null, "hdConstraints")}>
								Hight
							</Link>
						</ListItem>
					</List>
						<VideoLocal ref="localVideo" />
					<List className="list-inline">
						<ListItem>
						<Link ref="btnStart" className="btn btn-primary" onClick={this.onAction.bind(null, "start")}>
							Check Device
						</Link>
						</ListItem>
						<ListItem>
						<Link ref="btnCall" className="btn btn-primary" onClick={this.onAction.bind(null, "call")}>
							Call
						</Link>
						</ListItem>
						<ListItem>
						<Link ref="btnHangup" className="btn btn-primary" onClick={this.onAction.bind(null, "hangup")}>
							Hangup
						</Link>
						</ListItem>
					</List>
			</Panel>
			);
	}
}); 
module.exports = Core;