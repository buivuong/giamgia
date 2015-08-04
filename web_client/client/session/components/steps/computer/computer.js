var RunTest = require('client/session/components/steps/computer/runTest');
var BeginTest = require('client/session/components/steps/computer/steps/beginTest');
var Computer = React.createClass({
	componentDidMount: function(){
		this.refs.runTest.show();
	},
	getInitialState: function(){
		return { display: "none"};
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
	handlerRunTest: function(){
		this.refs.runTest.hide();
		this.refs.beginTest.show();
	},
	handlerBeginTest: function(keyRef){
		console.log(keyRef);
	},
	render: function(){
		return (
			<div style={{display: this.state.display}}>
				<RunTest ref="runTest" onClick={this.handlerRunTest}/>
				<BeginTest ref="beginTest" onClick={this.handlerBeginTest} />
				<Wrap className="text-center margin-bottom-6x">
					<List className="list-inline">
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Back
							</Link>
						</ListItem>
						<ListItem>
							<Link className="btn btn-primary btn-lg">
								Continute
							</Link>
						</ListItem>
					</List>
				</Wrap>
			</div>
			);
	}
});
module.exports = Computer;