var React = require('react');

var Loader = React.createClass({
	propTypes: {
		size: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			size: '40px'
		}
	},
	stop: function(){
		$(this.getDOMNode()).css({display: 'none'});
	},
	play: function(){
		$(this.getDOMNode()).css({display: 'block'});	
	},
	render: function(){
		return (
			<div className="spinner-wrapper" style={{display: 'none'}}>
				<div className="spinner" style={{width: this.props.size, height: this.props.size}}>
  					<div className="double-bounce1"></div>
  					<div className="double-bounce2"></div>
				</div>
	  		</div>
		);
	}
});

module.exports = Loader;