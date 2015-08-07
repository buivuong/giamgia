var MyChildren = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
				<Panel className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							My Children
						</Title>
						<Link className="btn btn-sm btn-primary pull-right font-size-12px color-white no-border-radius">
							Add
						</Link>
					</Panel>
				</Panel>
				<Panel className="panel-body">
					<Row className="row padding-bottom-larger padding-top-larger">
						<Column className="col-sm-offset-1 col-sm-5 col-xs-12">
							<Sentence className="padding-round-large">
								<Icon>Click the Add button to add a child</Icon>
							</Sentence>
						</Column>
						<Column className="col-sm-6 col-xs-12 border-bluelight border-left">
							<Wrap className="padding-right-large padding-left-large">
								<Sentence className="no-margin-bottom discription">
									<Image src="images/baby_03.png" style={{width: "82", height: "99"}} />
									Each of your children must have a separate profile to ensure their health information is stored separately.
								</Sentence>
							</Wrap>
						</Column>
					</Row>
				</Panel>
			</Panel>
			);
	}
});
module.exports = MyChildren;