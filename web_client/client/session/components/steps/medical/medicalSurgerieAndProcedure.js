var MedicalSerieAndProcedure = React.createClass({
	render: function(){
		return (
			<Box className="myhealth-history-box">
				<Row className="row">
					<Column className="col-xs-12">
						<Title type="h4" className="color-main">
							My Surgeries and Procedures
						</Title>
						<Form className="form-group row">
							<Label className="color-black col-sm-10 col-xs-12">
								Have you ever had any surgeries or medical procedures?
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
								</thead>
								<tbody>
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
								</tbody>
							</Table>
							<Row className="row">
								<Column className="col-sm-6 col-xs-12">
									<Divider className="border-blue no-margin-top" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Ankle
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Wrap className="radio">
												<Label className="color-black">
													When
												</Label>
												<select className="color-black select-sm">
                                                    <option value="">{"Don't know"}</option>
                                                    <option value="father">1988</option>
                                                    <option value="mother">2015</option>
                                                </select>
											</Wrap>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													CABG (Bypass surgery)
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Craniotomy
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Gall bladder
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Hip replacement
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Lung resection
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Plastic Surgery
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="form-group">
												<Input type="text" className="form-control" placeholder="other" />
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
								</Column>
								<Column className="col-sm-6 col-xs-12">
									<Divider className="border-blue no-margin-top" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Appendectomy
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Colon resection
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Ear Tubes
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Head or neck
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													EKnee
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Pacemaker
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
									<Form className="form-group row">
										<Column className="col-sm-6 col-xs-12">
											<Wrap className="radio">
												<input type="radio" />
												<Label className="color-black">
													Wrist
												</Label>
											</Wrap>
										</Column>
										<Column className="col-sm-6 col-xs-12 right-special text-right">
											<Label className="color-black">
												When
											</Label>
											<select className="color-black select-sm">
                                                <option value="">{"Don't know"}</option>
                                                <option value="father">1988</option>
                                                <option value="mother">2015</option>
                                            </select>
										</Column>
									</Form>
									<Divider className="border-bluelight no-margin-top margin-bottom" />
								</Column>
							</Row>
						</Panel>
					</Column>
				</Row>
			</Box>
			);
	}
});
module.exports = MedicalSerieAndProcedure;