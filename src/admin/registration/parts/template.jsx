var React = require('react');
var Registration = require('./registration.jsx');
var Loader = require('../../../components/loader.jsx');
var Dialog = require('../../../components/dialog.jsx');

var Template = React.createClass({
	setLoader: function(isLoad){
		if(isLoad) this.refs.loader.play();
		else{
			this.refs.loader.stop();
			this.refs.dialog_error.open();
		}
	},
	render: function(){
		return (
			<div>
				<Dialog ref="dialog_error">
					<p>Cô bé đáng yêu của tôi</p>
				</Dialog>
				<div className="register-page simple">
					<section className="content register-page">
						<div className="content-liquid">
							<div className="row" style={{marginRight: 0}}>
								<div className="register-page-container" style={{lineHeight: '446px', minHeight: '446px'}}>
									<div className="boxed animated">
										<div className="inner">
											<Loader within="element" ref="loader"/>
											<div className="login-title text-center">
												<h4>Tạo cửa hiệu mới</h4>
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