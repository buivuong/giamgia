var Left = React.createClass({
	render: function(){
		return (
			<Column className="col-md-7">
				<Wrap className="signin-info">
					<Panel className="logopanel">
						<Image src="images/logo.png" style={{height: "33", width: "185"}} />
					</Panel>
					<Wrap className="mb20"></Wrap>
					<Title type="h5">
						<Bold>
							Welcome to Bracket Bootstrap 3 Template!
						</Bold>
					</Title>
					<List>
						<ListItem>
							<Icon className="fa fa-arrow-circle-o-right mr5"></Icon>Fully Responsive Layout
						</ListItem>
						<ListItem>
							<Icon className="fa fa-arrow-circle-o-right mr5"></Icon>HTML5/CSS3 Valid
						</ListItem>
						<ListItem>
							<Icon className="fa fa-arrow-circle-o-right mr5"></Icon>Retina Ready
						</ListItem>
						<ListItem>
							<Icon className="fa fa-arrow-circle-o-right mr5"></Icon>WYSIWYG CKEditor
						</ListItem>
						<ListItem>
							<Icon className="fa fa-arrow-circle-o-right mr5"></Icon>and much more...
						</ListItem>
					</List>
					<Wrap className="mb20"></Wrap>
					<Bold>
						Not a member?
						<Link>
							Sign Up
						</Link>
					</Bold>
				</Wrap>
			</Column>
			);
	}
});
module.exports = Left;