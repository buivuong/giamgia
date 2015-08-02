var AppFooter = React.createClass({
	render: function(){
		return (
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
		)
	}
});

module.exports = AppFooter;