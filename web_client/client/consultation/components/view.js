var My = require('client/templates/my');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin, CheckToken],
	render: function(){
		return (
			<div>
				<Breadcrump className="quicklink-box">
					<Link className="color-grey">
						Home
					</Link>
					<Link className="quicklink color-grey">
						My Health
					</Link>
					<Link className="quicklink color-grey">
						My Consultations
					</Link>
				</Breadcrump>
				<My module="consultation"/>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box"/>
					<Header className="header-title">
						<Title type="h2" className="dashboard">My Consultations</Title>
					</Header>
					<Divider/>
				</Box>
				<Wrap className="myhealth-myconsultations-wrap arial general-wrap margin-top-large padding-top-4x">
					<Row className="row">
						<Column className="col-xs-12">
							<Panel className="margin-bottom-6x">
								<Form className="form-inline text-right margin-bottom-large">
									<Label className="margin-right">
										Search to Doctor:
									</Label>
									<Box className="form-search-box">
										<Input type="text" className="form-control" placeholder="Search doctor"/>
										<Image className="" src="images/icon-search-blue.png"/>
									</Box>
								</Form>
								<Form className="form-inline text-right">
									<Label className="margin-right">Or From: </Label>
									<Input className="form-control margin-right hasDatepicker" placeholder="mm/dd/yyyy" type="text"/>
									<Label className="margin-right">To: </Label>
									<Input className="form-control" placeholder="mm/dd/yyyy" type="text"/>
								</Form>
							</Panel>
							<Panel className="table-responsive border-round">
								<Table className="table table-primary">
									<thead>
										<TableRow>
											<TableHeader>Patient</TableHeader>
											<TableHeader>Disease</TableHeader>
											<TableHeader>Doctor</TableHeader>
											<TableHeader>Time</TableHeader>
											<TableHeader>Result</TableHeader>
										</TableRow>
									</thead>
									<tbody>
										<TableRow className="detailed-exam">
											<TableColumn>Dieu Nguyen</TableColumn>
											<TableColumn>Headache</TableColumn>
											<TableColumn>Peter Tran</TableColumn>
											<TableColumn>From 01/04/2015 to 05/07/2015</TableColumn>
											<TableColumn><Link className="text-underline">View Detail</Link></TableColumn>
										</TableRow>
									</tbody>
								</Table>
							</Panel>
						</Column>
					</Row>
				</Wrap>
			</div>
		)
	}
});

module.exports = View;