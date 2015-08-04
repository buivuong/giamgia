var My = require('client/templates/my');
var IntlMixin = ReactIntl.IntlMixin;

var View = React.createClass({
	mixins: [IntlMixin],
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
						My Appointment
					</Link>
				</Breadcrump>
				<My module="appointment"/>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box"/>
					<Header className="header-title">
						<Title type="h2" className="dashboard">My Appointment</Title>
					</Header>
					<Divider/>
				</Box>
				<Box className="myhealth-myappointment-wrap body-box arial">
					<Panel className="table-responsive">
						<Table className="table table-primary margin-top-large margin-bottom-large">
							<thead>
								<TableRow>
									<TableHeader>Patient</TableHeader>
									<TableHeader>Disease</TableHeader>
									<TableHeader>Doctor</TableHeader>
									<TableHeader>Date</TableHeader>
									<TableHeader>Time</TableHeader>
									<TableHeader>Status</TableHeader>
								</TableRow>
							</thead>
							<tbody>
								<TableRow className="detailed-exam">
									<TableColumn>Dieu Nguyen</TableColumn>
									<TableColumn>Headache</TableColumn>
									<TableColumn>Peter Tran</TableColumn>
									<TableColumn>07/11/2015</TableColumn>
									<TableColumn>0.45 AM</TableColumn>
									<TableColumn>Done</TableColumn>
								</TableRow>
							</tbody>
						</Table>
					</Panel>
				</Box>
			</div>
		)
	}
});

module.exports = View;