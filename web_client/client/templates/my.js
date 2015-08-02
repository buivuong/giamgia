var IntlMixin = ReactIntl.IntlMixin;

var My = React.createClass({
	mixins: [IntlMixin],
	propTypes: {
		module: React.PropTypes.string.isRequired
	},
	componentDidMount: function(){
		this.refs[this.props.module].addClass('active');
	},
	render: function(){
		return (
			<Wrap className="general-wrap">
				<List className="list-inline quicklink-header-box font-size-12px no-margin-left border-bottom no-margin-bottom">
					<ListItem className="no-padding-left" ref="myhealth">
						<Link className="no-padding-left">
							<Image className="margin-right img-circle" src="images/icon-myhealth-inner.png"/>My Health
						</Link>
					</ListItem>
					<ListItem ref="doctor">
						<Link>
							<Image className="margin-right img-circle" src="images/icon-mydoctors-inner.png"/>My Doctors
						</Link>
					</ListItem>
					<ListItem ref="appointment">
						<Link>
							<Image className="margin-right img-circle" src="images/icon-myappointment-inner.png"/>My Appointments
						</Link>
					</ListItem>
					<ListItem ref="consultation">
						<Link>
							<Image className="margin-right img-circle" src="images/icon-myconsultation-inner.png"/>My Consultations
						</Link>
					</ListItem>
					<ListItem ref="record">
						<Link>
							<Image className="margin-right img-circle" src="images/icon-myrecords-inner.png"/>My Records
						</Link>
					</ListItem>
				</List>
			</Wrap>
		)
	}
});

module.exports = My;