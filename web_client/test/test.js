var Test = React.createClass({
	render: function(){
		return (
			<Section>
				<Panel className="leftpanel" style={{display: 'block'}}>
					<Panel className="logopanel">
						<Image src="images/logo-1.png" style={{width: '210', height: '38'}}/>
					</Panel>
					<Inner className="leftpanelinner">
						<List className="nav nav-pills nav-stacked nav-bracket">
							<ListItem className="active">
								<Link>
									<Image src="images/icon-home.png"/>
									<Span>Home</Span>
								</Link>
							</ListItem>
							<ListItem>
								<Link>
									<Image src="images/icon-myheart.png"/>
									<Span>My Health</Span>
								</Link>
							</ListItem>
							<ListItem>
								<Link>
									<Image src="images/icon-mail.png"/>
									<Span>Message Center</Span>
								</Link>
							</ListItem>
							<ListItem>
								<Link>
									<Image src="images/icon-help-support.png"/>
									<Span>Help & Support</Span>
								</Link>
							</ListItem>
						</List>
					</Inner>
				</Panel>
				<Panel className="mainpanel">
					
					<Header className="headerbar">
						<MenuToggle/>
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
										Logout
									</Link>
								</ListItem>
							</List>
						</Header>
					</Header>

					<Breadcrump className="quicklink-box">
						<Link className="color-grey">
							Home
						</Link>
						<Link className="quicklink color-grey">
							404
						</Link>
					</Breadcrump>

					<Panel className="text-center padding-top-6x padding-bottom-6x">
						<Title type="h1" className="color-main fontsize-60px">
							<Bold>404</Bold>
						</Title>
						<Title type="h3" className="fontsize-36px">
							File not found
						</Title>
						<Sentence>The site configured at this address does not contain the requested file.</Sentence>
						<Sentence>If this is your site, make sure that the filename case matches the URL.</Sentence>
						<Sentence className="margin-top-4x font-size-18px"><Bold>Please refer to the menu!</Bold></Sentence>
					</Panel>

					<Footer>
						<Divider className="footer-hr"/>
						<Row className="row">
							<Column className="col-md-6 col-xs-12 pull-right">
								<Row className="row">
									<Column className="col-sm-6 col-xs-12">
										<Panel className="hotline-footer color-black">
											<Span className="text-left">
												<Link className="color-black">1-800-400-MED - TEK</Link><br/>
												<Link className="color-grey">1-800-400-6354</Link>
											</Span>
										</Panel>
									</Column>
									<Column className="col-sm-6 col-xs-12">
										<List className="social-box list-inline">
											<ListItem>
												<Link>
													<Icon className=" fa fa-facebook color-white"/>
												</Link>
											</ListItem>
											<ListItem>
												<Link>
													<Icon className=" fa fa-twitter color-white"/>
												</Link>
											</ListItem>
											<ListItem>
												<Link>
													<Icon className=" fa fa-linkedin color-white"/>
												</Link>
											</ListItem>
											<ListItem>
												<Link>
													<Icon className=" fa fa-youtube color-white"/>
												</Link>
											</ListItem>
										</List>
									</Column>
								</Row>
							</Column>
							<Column className="col-md-6 col-xs-12 pull-left">
								<List className="list-inline menu-footer font-size-12px no-margin-bottom">
									<ListItem><Link>Home</Link></ListItem>
									<ListItem>
										<Link className="font-size-12px color-white no-border-radius">Terms of Use</Link>
									</ListItem>
									<ListItem>
										<Link className="font-size-12px color-white no-border-radius">Privacy Policy</Link>
									</ListItem>
									<ListItem>
										<Link className="font-size-12px color-white no-border-radius">Legal Notices</Link>
									</ListItem>
									<ListItem>
										<Link className="font-size-12px color-white no-border-radius">Contact Us</Link>
									</ListItem>
								</List>
								<Link className="copyright color-grey font-size-12px">Copyright @ 2015 - MED - TEK</Link>
							</Column>
						</Row>
					</Footer>

				</Panel>
			</Section>
		)
	}
});

module.exports = Test;