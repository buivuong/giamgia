var PaymentUpdate = React.createClass({
	render : function(){
		return (
			<Panel className="panel panel-primary panel-alt no-border-radius">
				<Panel className="panel-heading no-border-radius">
					<Panel className="panel-btns">
						<Title type="h4" className="no-margin">
							Payment
						</Title>
					</Panel>
				</Panel>
				<Panel className="panel-body padding-round-large">
					<Row className="row padding-bottom-larger padding-top-larger">
						<Column className="col-sm-8 col-sm-offset-2 col-xs-12">
							<Wrap className="text-center">
								<Sentence className="color-main font-size-18px">
									<Bold>
										<Span className="margin-right">
											Visit Cost:
										</Span>
											$45.00
									</Bold>
								</Sentence>
							</Wrap>
							<Sentence>
								Have a coupon?
								<Link>
									Enter coupon code
								</Link>
							</Sentence>
							<Hr className="border-bluelight" />
							<Title type="h3" className="color-main">
								Credit Card Information
							</Title>
							<Form className="form-horizontal">
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Name of Card:
									</Label>
									<Column className="col-sm-8">
										<Input type="text" className="form-control" />
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Credit Card
									</Label>
									<Column className="col-sm-8">
										<select className="form-control">
											<option>- Credit Card -</option>
										</select>
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Credit Card Number:
									</Label>
									<Column className="col-sm-8">
										<Input type="text" className="form-control"/>
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Expires
									</Label>
									<Column className="col-sm-4 col-xs-6">
										<select className="form-control">
											<option>- Mouth -</option>
											<option>1</option>
											<option>2</option>
										</select>
									</Column>
									<Column className="col-sm-4 col-xs-6">
										<select className="form-control">
											<option>- Year -</option>
											<option>2015</option>
											<option> 2014</option>
										</select>
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Security Code:
									</Label>
									<Column className="col-sm-4">
										<Input type="text" className="form-control" />
									</Column>
									<Column className="col-sm-4">
										<Link className="font-size-18px color-main">
											<Bold>
												?
											</Bold>
										</Link>
									</Column>
								</Wrap>
							</Form>
							<Title type="h3" className="color-main">
								Credit Card Information
							</Title>
							<Form className="form-horizontal">
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
										Address 1:
									</Label>
									<Column className="col-sm-8">
										<Input type="text" className="form-control" />
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Address 2:
									</Label>
									<Column className="col-sm-8">
										<Input type="text" className="form-control" />
									</Column>
								</Wrap>
								<Wrap className="form-group">
									<Label className="col-sm-4 control-label">
										<Span className="color-red">
											*
										</Span>
											Credit Card
									</Label>
									<Column className="col-sm-4">
										<Input type="text" className="form-control" />
									</Column>
									<Column className="col-sm-2">
										<select type="text" className="form-control no-padding">
											<option>State</option>
										</select>
									</Column>
									<Column className="col-sm-2">
										<Input type="text" className="form-control" />
									</Column>
								</Wrap>
							</Form>
						</Column>
					</Row>
				</Panel>
			</Panel>
			);
	}
});
module.exports = PaymentUpdate;