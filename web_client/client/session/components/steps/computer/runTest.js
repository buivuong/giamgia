var RunTest = React.createClass({
	propTypes: {
			onClick: React.PropTypes.func
		},
	getInitialState: function(){
		return {display: "none"};
	},
	show: function(){
		this.setState({
			display: "block"
		});
	},
	hide: function(){
		this.setState({
			display: "none"
		});
	},
	handlerRun: function(){
		this.props.onClick();
	},
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius" style={{display: this.state.display}}>
				<Panel className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							Test My Computer
						</Title>
					</Panel>
				</Panel>
				<Panel className="panel-body padding-round-large">
					<Row className="row padding-bottom-larger padding-top-larger text-center">
						<Sentence>
							Is your computer ready for your visit?
						</Sentence>
						<Sentence className="font-size-12px">
							This test was last run on 7/7/2015
						</Sentence>
						<Link className="btn btn-primary" onClick={this.handlerRun}>
							Run Test
						</Link>
					</Row>
				</Panel>
			</Panel>
			);
	}
});
module.exports = RunTest;