var TestInternet = React.createClass({
	getInitialState: function(){
		return {display: "none"};
	},
	show: function(){
		this.setState({
			display: "none"});
	}
	,
	hide: function(){
		this.setState({
			display: "block"});
	},
	render: function(){
		return (
			<Panel className="tab-content" style={{display: this.state.display}}>
				<Panel className="tab-pane active">
					<Wrap className="border-bluelight border-round padding-round-large text-center">
						<Box className="test-computer-box">
							<Title type="h2" className="color-main">
								Test your internet connection
							</Title>
							<Link className="margin-top btn btn-primary">
								Begin Test
							</Link>
						</Box>
						<Divider className="border-bluelight" />
						<Link className="margin-top btn btn-primary">
							Skip
						</Link>
					</Wrap>
				</Panel>
			</Panel>
			);
	}
});
module.exports = TestInternet;