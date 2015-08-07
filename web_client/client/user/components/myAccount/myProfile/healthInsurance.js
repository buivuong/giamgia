var HealthInsurance = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
				<Panel className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							Health Insurance Information
						</Title>
						<Link className="btn btn-sm btn-primary pull-right font-size-12px color-white no-border-radius">
							Edit
						</Link>
					</Panel>
				</Panel>
				<Panel className="panel-body">
					<Row className="row padding-bottom-larger padding-top-larger">
						<Column className="col-sm-offset-1 col-sm-5 col-xs-12">
							<Table>
								<TableRow>
									<TableHeader>
										Health Plan:
									</TableHeader>
									<TableColumn>
									</TableColumn>
								</TableRow>

								<TableRow>
									<TableHeader>
										Subsriber:
									</TableHeader>
									<TableColumn>
									</TableColumn>
								</TableRow>
							</Table>
						</Column>
						<Column className="col-sm-6 col-xs-12 border-bluelight border-left">
							<Wrap className="padding-right-large padding-left-large">
								<Sentence className="no-margin-bottom discription">
									<Image src="images/insurancel_03.png" style={{width: "82", height: "99"}} />
									doctors may use this information to submit claims for care you receive online.
									 Please make sure this information is complete, accurate and up to date.
								</Sentence>
							</Wrap>
						</Column>
					</Row>
				</Panel>
			</Panel>
			);
	}
});
module.exports = HealthInsurance;