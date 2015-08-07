var Identification  = React.createClass({
	render: function(){
		return (
				<Panel className="panel panel-primary panel-alt no-border-radius">
					<Panel className="panel-heading no-border-radius">
						<Panel className="panel-btns">
							<Title type="h4" className="no-margin">
								Identification
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
											Name:
										</TableHeader>
										<TableColumn>
											Đặng Thị Huyền Trang
										</TableColumn>
									</TableRow>
									<TableRow>
										<TableHeader>
											Email:
										</TableHeader>
										<TableColumn>
											dieu@offer.vn
										</TableColumn>
									</TableRow>
								</Table>
							</Column>
							<Column className="col-sm-6 col-xs-12 border-bluelight border-left">
								<Wrap className="padding-right-large padding-left-large">
									<Sentence className="no-margin-bottom discription">
										<Image src="images/identification_03.png" style={{width: "82", height: "99"}} />
										Your name and email address are used as a primary identification for Online Care Anywhere. 
										You recommend that you used a private email address, since you may choose to receive private 
										health information by email
									</Sentence>
								</Wrap>
							</Column>
						</Row>
					</Panel>
				</Panel>
			);
	}
});
module.exports = Identification;