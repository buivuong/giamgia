var AppFooter = React.createClass({
	openTOE: function(){
		this.refs.dialog_tou.show();
	},
	closeTOE: function(){
		this.refs.dialog_tou.hide();
	},
	render: function(){
		return (
			<Footer>
				<Dialog ref="dialog_tou" className="modal-dialog doctorgroup-detail-wrap modal-wrap">
					<DialogContent className="modal-content no-border-radius">
						<DialogHeader className="modal-header bg-main color-white">
							<Button className="close color-white" onClick={this.closeTOE}>&times;</Button>
							<Title type="h4" className="modal-title">Doctor Details</Title>
						</DialogHeader>
						<DialogBody className="modal-body text-center">
							<Sentence className="margin-bottom">
								<Bold>Term of Use</Bold>
							</Sentence>
						</DialogBody>
					</DialogContent>
				</Dialog>

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
								<Link className="font-size-12px color-white no-border-radius" onClick={this.openTOE}>
									Terms of Use
								</Link>
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