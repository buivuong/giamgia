var Step = React.createClass({
	$module: null,
	module: "doctor",
	propTypes:{
		onClickTab: React.PropTypes.func,
	},
	componentDidMount: function(){
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
	},
	componentWillUnmount: function(){
		this.$module = null;
		this.module = "doctor";
	},
	onClick: function(keyRef){
		this.module = keyRef;
		this.$module = $(React.findDOMNode(this.refs[this.module]));
		this.setActive();
		this.props.onClickTab(this.getStep());
	},
	setActive: function(){
		for(var key in this.refs){
			if(key===this.module){
				this.$module.addClass("active");
			}
			else {
				var $item = $(React.findDOMNode(this.refs[key]));
					$item.removeClass("active");
			}
		}
	},
	getStep: function(){
		return this.module;
	},
	render: function(){
		return (
			<List className="nav nav-pills nav-justified">
				<ListItem ref="doctor">
					<Link onClick={this.onClick.bind(this,"doctor")}>Choose Doctor</Link>
				</ListItem>
				<ListItem ref="medical">
					<Link onClick={this.onClick.bind(this,"medical")}>Medical History</Link>
				</ListItem>
				<ListItem ref="computer">
					<Link onClick={this.onClick.bind(this,"computer")}>Test Computer</Link>
				</ListItem>
				<ListItem ref="payment">
					<Link onClick={this.onClick.bind(this,"payment")}>Payment</Link>
				</ListItem>
				<ListItem ref="confirm">
					<Link onClick={this.onClick.bind(this,"confirm")}>Confirmation</Link>
				</ListItem>
			</List>
			);
	}
});
module.exports = Step;