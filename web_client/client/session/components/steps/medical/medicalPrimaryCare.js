var MedicalPrimaryCare = React.createClass({
	render: function(){
		return (
			<Box className="myhealth-history-box">
				<Row className="row">
					<Column className="col-xs-12">
						<Title type="h4" className="color-main">
							Primary Care doctors
						</Title>
						<Form className="form-group row">
							<Label className="color-black col-sm-10 col-xs-12">
								Do you have a primary care physician?
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
					</Column>
				</Row>
			</Box>
			);
	}
});
module.exports = MedicalPrimaryCare;