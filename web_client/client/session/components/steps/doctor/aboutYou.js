var AboutYou = React.createClass({
render: function(){
	return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
					<Panel className="panel-heading no-border-radius">
						<Panel className="panel-btns">
							<Title type="h4" className="no-margin">
								About You
							</Title>
						</Panel>
					</Panel>
					<Panel className="panel-body padding-round-large">
						<Panel className="panel-body padding-round-large">
							<Row className="row padding-bottom-larger padding-top-larger">
								<Column className="col-sm-8 col-sm-offset-2 col-xs-12">
									<Form className="form-inline">
										<Label><Span className="color-red">*</Span>Phone:</Label>
										<Input type="text" className="form-control" />
										<Span>
											The doctor may call you to follow up.
										</Span>
									</Form>
								</Column>
							</Row>
						</Panel>
					</Panel>
			</Panel>
				
		);
}
});
module.exports = AboutYou;