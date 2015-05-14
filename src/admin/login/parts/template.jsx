var React = require('react');
var Loader = require('../../../components/loader.jsx');
var Login = require('./login.jsx');
var Auth_Non_Mixin = require('../../../mixins/admin_non_auth.jsx');

var Template = React.createClass({
	mixins: [Auth_Non_Mixin],
	contextTypes: {
		router: React.PropTypes.func
	},
	setLoader: function(isLoad){
		if(isLoad) this.refs.loader.play();
		else
			this.refs.loader.stop();
	},
	goToForgot: function(){
		this.context.router.transitionTo('admin_forgot');
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
												<h4>Đăng nhập hệ thống</h4>
											</div>
											<Login setLoader={this.setLoader}/>
										</div>
										<div className="row" id="footer-outer">
											<div className="col-md-6">
												<a onClick={this.goToForgot}>Quên mật khẩu ?</a>
											</div>
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