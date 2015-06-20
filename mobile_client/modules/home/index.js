var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div>
					<header className="bar bar-nav">
	      				<h1 className="title">Ratchet</h1>
	    			</header>
				</div>
				<div className="content">
	      			<p className="content-padded">Thanks for downloading Ratchet. This is an example HTML page thatd up to compiled Ratchet CSS and JS, has the proper meta tags and the HTML structure. Need some more help before you start filling this with your own content? Check out some Ratchet resources:</p>
	 				<div className="card">
	        			<ul className="table-view">
				          <li className="table-view-cell">
				            <a className="push-right" href="http://goratchet.com">
				              <strong>Ratchet documentation</strong>
				            </a>
				          </li>
				          <li className="table-view-cell">
				            <a className="push-right" href="https://github.com/twbs/ratchet/">
				              <strong>Ratchet on Github</strong>
				            </a>
				          </li>
	          
	       				 </ul>
	  				</div>
				</div>
			</div>
		);
	}
});

module.exports = Home;