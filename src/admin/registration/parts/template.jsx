var React = require('react');
var Registration = require('./registration.jsx');
var Loader = require('../../../components/loader.jsx');
var Auth_Non_Mixin = require('../../../mixins/admin_non_auth.jsx');

var Template = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [Auth_Non_Mixin],
	setLoader: function(isLoad){
		if(isLoad) this.refs.loader.play();
		else
			this.refs.loader.stop();
	},
	render: function(){
		return (
			<div>
				<div className="register-page simple">
					<section className="content register-page">
						<div className="content-liquid">
							<div className="row" style={{marginRight: 0}}>
								<div className="register-page-container" style={{lineHeight: '446px', minHeight: '446px'}}>
									<div className="boxed animated">
										<div className="inner">
											<Loader within="element" ref="loader"/>
											<div className="login-title text-center">
												<h4>Tạo tài khoản mới</h4>
											</div>
											<Registration setLoader={this.setLoader}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
});

module.exports = Template;