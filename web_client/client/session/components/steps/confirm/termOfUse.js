var TermOfUse = React.createClass({
	render: function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
				<Panel className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							Terms of Use
						</Title>
					</Panel>
				</Panel>
				<Panel className="panel-body padding-round-large">
					<Panel className="padding-bottom-larger padding-top-larger">
						<Sentence>
							Please acknowledge that you have read the following statements by typing your first and last initials (i.e, "DN") in the box below. Check the box to the left of the statement to indicate your agreement. You must accept Terms of Use in order to proceed.
						</Sentence>
						<Panel className="border-main border-round text-center margin-bottom margin-top padding-round">
							<Sentence className="color-black">
								{"You have reported that you 're currently located in California."}
							</Sentence>
							<Sentence className="color-black">
								{'If you are now located in a defferent state, please update your location in My Account -> My Profile'}
							</Sentence>
						</Panel>
						<Form>
							<Wrap className="form-group">
								<Column className="col-sm-offset-1 col-sm-10">
									<Wrap className="checkbox">
										<Label>
											<input type="checkbox" />
											I give permission for this doctor to see my Medication History and
											<Span className="color-main">
												<Bold>
													Health Summary
												</Bold>
											</Span>
											(Optional)
										</Label>
									</Wrap>
								</Column>
							</Wrap>
							<Wrap className="form-group">
								<Column className="col-sm-offset-1 col-sm-10">
									<Wrap className="checkbox">
										<Label>
											<input type="checkbox" />
											I certify that I have read anh accept the
											<Span className="color-main">
												<Bold>
													Statement from Blue Cross Blue Shield of Minnesota
												</Bold>
											</Span>
											(Required)
										</Label>
									</Wrap>
								</Column>
							</Wrap>
							<Wrap className="form-group">
								<Column className="col-sm-2 col-sm-offset-1">
									<Input type="text" className="form-control" />
								</Column>
								<Column className="col-sm-9">
									Your initials ("DN")
								</Column>
							</Wrap>
						</Form>
					</Panel>
				</Panel>
			</Panel>
			);
	}
});
module.exports = TermOfUse;