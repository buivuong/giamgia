var MyHealthWizard = React.createClass({
	propTypes: {
		module: React.PropTypes.string
	},
	componentDidMount: function(){
		this.refs[this.props.module].addClass('active');
	},
	render: function(){
		return (
			<Wizard className="basic-wizard myhealth-wizard">
				<List className="nav nav-pills nav-justified">
					<ListItem ref="health_history">
						<Link>Health History</Link>
					</ListItem>
					<ListItem ref="lifestyle">
						<Link>Lifestyle</Link>
					</ListItem>
					<ListItem ref="family_history">
						<Link>Family History</Link>
					</ListItem>
				</List>
			</Wizard>
		)
	}
});

module.exports = MyHealthWizard;