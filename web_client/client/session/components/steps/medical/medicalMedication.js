var MedicalMedication = React.createClass({
	render: function() {
		return (
			<Box className="myhealth-history-box">
				<Row className="row">
					<Column className="col-xs-12">
						<Title type="h4" className="color-main">
							My Medications
						</Title>
						<Form className="form-group row">
							<Label className="color-black col-sm-10 col-xs-12">
								Are you currently taking any medication?
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
									<Column>
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
											My Medications:
										</TableHeader>

										<TableHeader>
											Dosage:
										</TableHeader>

										<TableHeader>
											Frequency
										</TableHeader>

										<TableHeader>
											Reported date
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
											Aperin
										</TableColumn>

										<TableColumn>
											2 pill
										</TableColumn>

										<TableColumn>
											Once daily
										</TableColumn>

										<TableColumn>
											07/20/2015
										</TableColumn>

										<TableColumn>
											Self Reported
										</TableColumn>

										<TableColumn className="text-right">
											<Button className="btn btn-remove btn-sm">
												Remove
											</Button>
										</TableColumn>
									</TableRow>
									<Form>
										<TableRow>
											<TableColumn>
												<Input type="text" className="form-control" placeholder="Add new medications:"/>
											</TableColumn>

											<TableColumn>
												<Input type="text" className="form-control width-70px" placeholder="1 pill" />
											</TableColumn>

											<TableColumn>
												<select className="form-control">
													<option>Once</option>
			                                        <option>Twice</option>
			                                        <option>Three times</option>
			                                        <option>As Needed</option>
												</select>
											</TableColumn>

											<TableColumn>
												 <select className="form-control">
			                                        <option>Daily</option>
			                                        <option>Hourly</option>
			                                        <option>Weekly</option>
			                                        <option>Mouthly</option>
			                                    </select>
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
module.exports = MedicalMedication;