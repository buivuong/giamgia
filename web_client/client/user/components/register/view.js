var IntlMixin = ReactIntl.IntlMixin;

var FormRegister = require('client/user/components/register/form');

var Register = React.createClass({
	mixins: [IntlMixin],
	componentWillMount: function(){
		$('body').addClass('signin');
	},
	componentWillUnmount: function(){
		$('body').removeClass('signin');
	},
	render: function(){
		return (
			<Section>
				<Panel className="signuppanel">
					<Row className="row">
						<Column className="col-md-6">
							<Wrap className="signup-info">
								<Panel className="logopanel">
									<Image src="images/logo.png" style={{width: '185', height: '33'}}/>
								</Panel>
								<div className="mb20"/>
								<Title type="h5">
									<Bold>Bootstrap 3 Admin Template!</Bold>
								</Title>
								<Sentence>Bracket is a theme that is perfect if you want to create your own content management, monitoring or any other system for your project.</Sentence>
								<Sentence>Below are some of the benefits you can have when purchasing this template.</Sentence>
								<div className="mb20"/>
								<Panel className="feat-list">
									<Icon className="fa fa-wrench"/>
									<Title type="h4" className="text-primary">
										Easy to Customize
									</Title>
									<Sentence>Bracket is design to fit on all browser widths and all resolutions on all mobile devices. Try to scale your browser and see the results.</Sentence>
								</Panel>
								<Panel className="feat-list mb20">
									<Icon className="fa fa-search-plus"/>
									<h4 className="text-primary">Retina Ready</h4>
									<Sentence>When a user load a page, a script checks each image on the page to see if theres a high-res version of that image. If a high-res exists, the script will swap that image in place.</Sentence>
								</Panel>
								<Title type="h4" className="mb20">
									and much more...
								</Title>
							</Wrap>
						</Column>
						<Column className="col-md-6">
							<FormRegister/>
						</Column>
					</Row>
				</Panel>
			</Section>
		)
	}
});

module.exports = Register;