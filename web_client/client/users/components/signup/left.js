var Left = React.createClass({
	render: function(){
		return (
			<div className="signup-info">
                <div className="logopanel">
                	<img src="images/logo.png" height="33" width="185"/> 
                </div>
                <div className="mb20"/>
                
                <h5><strong>Bootstrap 3 Admin Template!</strong></h5>
                <p>Bracket is a theme that is perfect if you want to create your own content management, monitoring or any other system for your project.</p>
                <p>Below are some of the benefits you can have when purchasing this template.</p>
                <div className="mb20"/>
                    
                <div className="feat-list">
                    <i className="fa fa-wrench"></i>
                    <h4 className="text-primary">Easy to Customize</h4>
                    <p>Bracket is made using Bootstrap 3 so you can easily customize any element of this template following the structure of Bootstrap 3.</p>
                </div>
                    
                <div className="feat-list">
                    <i className="fa fa-compress"></i>
                    <h4 className="text-primary">Fully Responsive Layout</h4>
                    <p>Bracket is design to fit on all browser widths and all resolutions on all mobile devices. Try to scale your browser and see the results.</p>
                </div>
                    
                <div className="feat-list mb20">
                    <i className="fa fa-search-plus"></i>
                    <h4 className="text-primary">Retina Ready</h4>
                    <p>When a user load a page, a script checks each image on the page to see if there a high-res version of that image. If a high-res exists, the script will swap that image in place.</p>
                </div>
                    
                <h4 className="mb20">and much more...</h4>
                
            </div>
		)
	}
});

module.exports = Left;