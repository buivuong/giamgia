var React = require('react');

var Icon = React.createClass({
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.number,
		style: React.PropTypes.object
	},
	getDefaultProps: function(){
		return {
			size: 24
		};
	},
	_mergeStyles: function(args){
		return Object.assign({}, args);
	},
	renderGraphic: function(){
		switch(this.props.icon){
			case 'email':
				return (
			    	<g><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"></path></g>
			  	);
		}
	},
	render: function(){
		var styles = {
			fill: "currentcolor",
			verticalAlign: "middle",
			width: this.props.size,
			height: this.props.size
		};

		return (
			<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
				style={this._mergeStyles(
					styles,
					this.props.style
				)}>
				{this.renderGraphic()}
			</svg>
		);
	}
});

module.exports = Icon;