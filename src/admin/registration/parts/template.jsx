var React = require('react');
var Registration = require('./registration.jsx');

var Template = React.createClass({
	render: function(){
		return (
			<div className="register-page simple">
				<section className="content register-page">
					<div className="content-liquid">
						<div className="row" style={{marginRight: 0}}>
							<div className="register-page-container" style={{lineHeight: '446px', minHeight: '446px'}}>
								<div className="boxed animated">
									<div className="inner">
										<div className="login-title text-center">
											<h4>Tạo cửa hiệu mới</h4>
										</div>
										<Registration/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
});

module.exports = Template;