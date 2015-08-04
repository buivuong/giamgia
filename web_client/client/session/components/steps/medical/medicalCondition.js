var MedicalCondition = React.createClass({
	render: function(){
		return (
				<Box className="myhealth-history-box">
					<Row className="row">
						<Column className="col-xs-12">
							<Title type="h4" className="color-main">
								My Health Conditions
							</Title>
							<Form className="form-group row">
								<Label className="color-black col-sm-10 col-xs-12">
									Do you have any health conditions?
								</Label>
								<Column className="col-sm-2 col-xs-12 text-right right-special">
									<Row className="row">
										<Column className="col-xs-6">
											<Wrap className="radio">
												<input type="radio" value="1" />
												<Label className="color-black">
													Yes
												</Label>
											</Wrap>
										</Column>
										<Column className="col-xs-6">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													No
												</Label>
											</Wrap>
										</Column>
									</Row>
								</Column>
							</Form>
							<Panel className="table-responsive">
								<Table className="table table-info">
									<thead>
										<TableRow>
											<TableHeader>
												My Conditions:
											</TableHeader>

											<TableHeader>
												Reported Date
											</TableHeader>

											<TableHeader>
												Source?
											</TableHeader>

											<TableHeader>
											</TableHeader>
										</TableRow>
									</thead>
									<tbody>
										<TableRow>
											<TableColumn>
												Diabetes
											</TableColumn>

											<TableColumn> 
												11/07/2015
											</TableColumn>

											<TableColumn>
												Seft reported
											</TableColumn>

											<TableColumn className="text-right">
												<Button className="btn btn-remove btn-sm">
													Remove
												</Button>
											</TableColumn>
										</TableRow>
									</tbody>
								</Table>
								<Form className="form-horizontal padding-round-small">
									<Input type="text" className="form-control" placeholder="Add new conditions" />
								</Form>
							</Panel>
						</Column>
					</Row>
				</Box>
			);
	}
});
module.exports = MedicalCondition;