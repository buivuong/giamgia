var StepComputer = React.createClass({
	module: "internet",
	$module: null,
	propTypes: {
		onClick: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
	},
	componenWillUnMount: function(){
		this.module = "internet";
		this.$module = null;
	},
	onClick: function(keyRef){
		this.module = keyRef;
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
		this.props.onClick(this.module);
	},
	setActive: function(){
		for(var key in this.refs){
			if(this.module === key){
				this.refs[key].addClass("active");
			}
			else{
				this.refs[key].removeClass("active");
			}
		}
	},
	getStep: function(){
		return this.module;
	},
	render: function(){
		return (
			<List className="nav nav-pills nav-justified">
				<ListItem ref="internet">
					<Link onClick={this.onClick.bind(this,"internet")}>
						<Image className="margin-right" src="images/icon-internet-test.png" width="37" height="39" />
						<Span>
							Internet
						</Span>
					</Link>
				</ListItem>
				<ListItem ref="video">
					<Link onClick={this.onClick.bind(this,"video")}>
						<Image className="margin-right-small" src="images/icon-video-test.png" width="37" height="39" />
						<Span>
							Video
						</Span>
					</Link>
				</ListItem>
				<ListItem ref="webcam">
					<Link onClick={this.onClick.bind(this,"webcam")}>
						<Image className="margin-right-small" src="images/icon-webcam-test.png" width="37" height="39" />
						<Span>
							Webcam
						</Span>
					</Link>
				</ListItem>
				<ListItem ref="microphone">
					<Link onClick={this.onClick.bind(this,"microphone")}>
						<Image className="margin-right-small" src="images/icon-micro-test.png" width="37" height="39" />
						<Span>
							Microphone
						</Span>
					</Link>
				</ListItem>
				<ListItem ref="speaker">
					<Link onClick={this.onClick.bind(this,"speaker")}>
						<Image className="margin-right-small" src="images/icon-speaker-test.png" width="37" height="39" />
						<Span>
							Speaker
						</Span>
					</Link>
				</ListItem>
			</List>
			);
	}
});
module.exports = StepComputer;