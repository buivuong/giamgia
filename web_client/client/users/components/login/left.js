var Left = React.createClass({
	render: function(){
		return (
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
		)
	}
});

module.exports = Left;