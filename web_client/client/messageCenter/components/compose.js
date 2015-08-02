var IntlMixin = ReactIntl.IntlMixin;

var Compose = React.createClass({
	mixins: [IntlMixin],
	render: function(){
		return (
			<div>
				<Breadcrump className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						Message Center
					</Link>
					<Link className="quicklink color-grey">
						Compose
					</Link>
				</Breadcrump>
				<Box className="header-profile-box">
					<Image src="images/icon-messagecenter-body.png" style={{width: '41', height: '41'}}/>
					<Header className="header-title">
						<Title type="h2" className="dashboard">
							<Link>
								Compose
							</Link>
						</Title>
					</Header>
				</Box>
				<Wrap className="general-wrap">
					<Panel className="panel-email margin-top-larger">
						<Box className="border-bluelight border-round box-no-shadow padding-round-large">
							<Panel className="panel-body">
								<Form className="form-horizontal">
									<FormGroup className="form-group mb5">
										<Label className="col-sm-1">To</Label>
										<Column className="col-sm-10">
											<select>
				                                <option value=""></option>
				                                <option value="Anna Fat">Nguyễn Minh Trung</option>
				                                <option value="Bilbo Bagens">Nguyễn Ngọc Thu Trang</option>
				                                <option value="Catherine Zones">Bùi Anh Tuấn</option>
				                            </select>
										</Column>
									</FormGroup>
									<FormGroup className="form-group mb5">
										<Label className="col-sm-1">Subject</Label>
										<Column className="col-sm-10">
											<Input type="text" placeholder="Subject" className="form-control"/>
										</Column>
									</FormGroup>
									<FormGroup className="form-group mb5">
										<Label className="col-sm-1">Message</Label>
										<Column className="col-sm-10">
											<textarea placeholder="Your message here..." className="form-control" rows="5"/>
										</Column>
									</FormGroup>
								</Form>
							</Panel>
							<Panel className="panel-footer no-padding-left">
								<Row className="row">
									<Column className="col-sm-10 col-sm-offset-1">
										<List className="list-inline">
											<ListItem>
												<Link className="btn btn-remove btn-lg">Back</Link>
											</ListItem>
											<ListItem>
												<Link><Button className="btn btn-primary btn-lg">Send</Button></Link>
											</ListItem>
										</List>
									</Column>
								</Row>
							</Panel>
						</Box>
					</Panel>
				</Wrap>
			</div>
		)
	}
});

module.exports = Compose;