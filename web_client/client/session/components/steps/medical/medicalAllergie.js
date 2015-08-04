var MedicalAllergie = React.createClass({
	render: function(){
		return (
			<Box className="myhealth-history-box">
				<Row className="row">
					<Column className="col-xs-12">
						<Title type="h4" className="color-main">
							My Allergies
						</Title>
						<Form className="form-group row">
							<Label className="color-black col-sm-10 col-xs-12">
								Do you have any Allergies or Drug Sensitivities?
							</Label>
							<Column className="col-sm-2 col-xs-12 text-right right-special">
								<Row className="row">
									<Column className="col-xs-6">
										<Wrap className="radio">
											<input type="radio" />
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
											My Allergies:
										</TableHeader>

										<TableHeader>
											Severity:
										</TableHeader>

										<TableHeader>
											Reaction:
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
											Antibiotic
										</TableColumn>

										<TableColumn>
											Unspecified
										</TableColumn>

										<TableColumn>
											Strong
										</TableColumn>

										<TableColumn>
											Seft Reported
										</TableColumn>

										<TableColumn className="text-right">
											<Button className="btn btn-remove btn-sm">
												Remove
											</Button>
										</TableColumn>
									</TableRow>
									<Form className="form-inline">
										<TableRow>
											<TableColumn>
												<Input type="text" className="fofm-control" />
											</TableColumn>

											<TableColumn>
												<Label className="control-label">
													Severity:
												</Label>
												<select className="form-control">
                                                    <option>Not sure</option>
                                                    <option>Mild</option>
                                                    <option>Moderate</option>
                                                    <option>Severe</option>
                                                </select>
											</TableColumn>

											<TableColumn>
												<Wrap className="form-group">
													<Label className="control-label">
														Rashes on the skin
													</Label>
													<Input type="text" className="form-control" placeholder="Rashes on the skin"/>
												</Wrap>
											</TableColumn>

											<TableColumn>
											</TableColumn>

											<TableColumn>
											</TableColumn>
										</TableRow>
									</Form>
								</tbody>
							</Table>	
						</Panel>
					</Column>
				</Row>
			</Box>
			);
	}
});
module.exports = MedicalAllergie;