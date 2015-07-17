var Login = React.createClass({
	render: function(){
		return (
			<section>
				<div className="signinpanel">
					<div className="row">
						
						<div className="col-md-7">
							<div className="signin-info">
								<div className="logopanel"> <img src="images/logo.png" height="33" width="185"/> </div>
                
                				<div className="mb20"></div>
            
                				<h5><strong>Welcome to Bracket Bootstrap 3 Template!</strong></h5>
			                    <ul>
			                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> Fully Responsive Layout</li>
			                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> HTML5/CSS3 Valid</li>
			                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> Retina Ready</li>
			                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> WYSIWYG CKEditor</li>
			                        <li><i className="fa fa-arrow-circle-o-right mr5"></i> and much more...</li>
			                    </ul>
			                    <div className="mb20"/>
			                    <strong>Not a member? <a href="signup.html">Sign Up</a></strong>
				                
							</div>
						</div>

						<div className="col-md-5">
                			<form method="post">
	                    		<h4 className="nomargin">Sign In</h4>
	                    		<p className="mt5 mb20">Login to access your account.</p>
	                
	                    		<input type="text" className="form-control uname" placeholder="Username" />
	                    		<input type="password" className="form-control pword" placeholder="Password" />
	                    		<a href=""><small>Forgot Your Password?</small></a>
	                    		<button className="btn btn-primary btn-block">Sign In</button>
                    
                			</form>
            			</div>

					</div>
					<div className="signup-footer">
            			<div className="pull-left">
                			&copy; 2015. All Rights Reserved. Bracket Bootstrap 3 Admin Template
            			</div>
            			<div className="pull-right">
                			Created By: <a href="http://themepixels.com/" target="_blank">3star-design.com</a>
            			</div>
        			</div>

				</div>
			</section>
		)
	}
});

module.exports = Login;