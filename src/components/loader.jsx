var React = require('react');
var $ = require('jquery-browserify');

var Loader = React.createClass({
	propTypes: {
		within: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			within: 'page'
		}
	},
	stop: function(){
		$(this.getDOMNode()).addClass('finished');
	},
	play: function(){
		$(this.getDOMNode()).removeClass('finished');
	},
	render: function(){
		var position = (this.props.within === 'page')?'fixed':'absolute';

		return (
			<div className="loader-overlay finished" style={{position: position}}>
				<div className="loader-spinner">
			    	<div className="circle"></div>
			    	<div className="circle"></div>
			    	<div className="circle"></div>
			  	</div>
			</div>
		);
	}
});

module.exports = Loader;