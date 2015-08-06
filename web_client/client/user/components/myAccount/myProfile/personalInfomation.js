var PersonalInformation = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
			    <Header className="panel-heading no-border-radius">
			        <Panel className="panel-btns">
			          <Title type="h4" className="no-margin">
			          	Personal Information
			          </Title>
			          <Link className="btn btn-sm btn-primary pull-right font-size-12px color-white no-border-radius">
			          	Edit
			          </Link>
			        </Panel>
			    </Header>
				    <Panel className="panel-body">
				        <Row className="row padding-bottom-larger padding-top-larger">
					          <Column className="col-sm-offset-1 col-sm-5 col-xs-12">
					            <Table>
						            <TableRow>
						                <TableHeader>
						                	Date of Birth:
						                </TableHeader>
						                <TableColumn>
						                	01/08/1990
						                </TableColumn>
						            </TableRow>

						             <TableRow>
						                <TableHeader>
						                	Gender:
						                </TableHeader>
						                <TableColumn>
						                	Female
						                </TableColumn>
						            </TableRow>

						            <TableRow>
						                <TableHeader>Home Address:</TableHeader>
						                <TableColumn></TableColumn>
						            </TableRow>

						            <TableRow>
						                <TableHeader>Alternate Address:</TableHeader>
						                <TableColumn></TableColumn>
						            </TableRow>

						            <TableRow>
						                <TableHeader>Phone:</TableHeader>
						                <TableColumn></TableColumn>
						            </TableRow>
						        </Table>
						    </Column>
				          <Column className="col-sm-6 col-xs-12 border-bluelight border-left">
				            <Wrap className="padding-right-large padding-left-large">
				              <Sentence className="no-margin-bottom discription">
					              	<Image src="images/personal_03.png" style={{width: "82", height: "99"}} /> 
					              	Your name and email address are used as a primary identification for 
					              	Online Care Anywhere. You recommend that you used a private email address, 
					              	since you may choose to receive private health information by email
				              </Sentence>
				            </Wrap>
				          </Column>
				        </Row>
			        </Panel>
		      </Panel>
			);
	}
});
module.exports = PersonalInformation;