var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var IntlMixin = ReactIntl.IntlMixin;

var My = require('client/templates/my');

var Core = React.createClass({
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
				</Breadcrump>
				<My module="myhealth"/>
				<Box className="header-profile-box no-img-header-box">
					<Box className="img-box"/>
					<Header className="header-title">
						<Title type="h2" className="dashboard">My Health</Title>
					</Header>
				</Box>
				<Box className="profile-title-box">
					<Title type="h3" className="color-black no-margin-top">Dieu Nguyen</Title>
					<Span className="margin-right-large sex color-black arial">
						Gender: Female
					</Span>
					<Span className="age color-black arial">
						Age: 40
					</Span>
					<List className="save-box list-inline">
						<ListItem>
							<Link className="color-black">
								<Image src="images/icon-print-body.png"/>Print
							</Link>
						</ListItem>
						<ListItem>
							<Link className="color-black">
								<Image src="images/icon-pdf-body.png"/>PDF
							</Link>
						</ListItem>
						<ListItem className="no-padding-right">
							<Link className="color-black">
								<Image src="images/icon-message-body.png"/>Message
							</Link>
						</ListItem>
					</List>
				</Box>

				<RouteHandler/>

			</div>
		)
	}
});

module.exports = Core;