var AboutVisit = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
					<Panel className="panel-heading no-border-radius">
						<Panel className="panel-btns">
							<Title type="h4" className="no-margin">
								About This Visit
							</Title>
						</Panel>
					</Panel>
					<Panel className="panel-body padding-round-large">
						<Row className="row padding-bottom-larger padding-top-larger">
							<Column className="col-sm-8 col-sm-offset-2 col-xs-12">
								<Box className="img-box pull-left">
									<Image src="images/img-doctor-2.jpg" />
								</Box>
								<Box className="doctorgroup-discription-box">
									<Wrap className="name">
										<Sentence className="no-margin-bottom">
											Nguyen Ngọc Thu Trang
										</Sentence>
										<Wrap className="lever">
											<Image src="images/img-lever.png" />
										</Wrap>
									</Wrap>
									<Wrap className="majay color-greydarken">
										<Sentence className="no-margin-bottom">
											Internal Medicine
										</Sentence>
									</Wrap>
								</Box>
								<Form>
									<Sentence className="color-main">
										<Bold>
											What you would like to discuss today
										</Bold>
									</Sentence>
									<Input type="text" className="form-control" style={{size: "100%"}} />
								</Form>
							</Column>
						</Row>
					</Panel>
				</Panel>
			);
	}
});
module.exports = AboutVisit;