var HeaderBar = React.createClass({
	render: function(){
		return (
			<Header className="headerbar">
				{this.props.children}
				<Header className="header-right">
					<List className="headermenu">
						<ListItem>
							<ButtonGroup>
								<Link className="btn btn-default dropdown-toggle tp-icon">
									<Image className="header-envelop" src="images/icon-envelop.png" style={{width: '19', height: '16'}}/>
									<Span className="badge">2</Span>
								</Link>
							</ButtonGroup>
						</ListItem>
						<ListItem>
							<ButtonGroup>
								<Link className="btn btn-default dropdown-toggle tp-icon">
									<Image className="header-clock" src="images/icon-clock.png" style={{width: '17', height: '17'}}/>
									<Span className="badge">5</Span>
								</Link>
							</ButtonGroup>
						</ListItem>
						<ListItem>
							<Span className="account color-black">Dieu Nguyen </Span>
						</ListItem>
						<ListItem>
							<Link className="login">
								My Account
							</Link>
						</ListItem>
						<ListItem>
							<Link className="logout">
								Log Out
							</Link>
						</ListItem>
					</List>
				</Header>
			</Header>
		)
	}
});

module.exports = HeaderBar;