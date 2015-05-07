var React = require('react');

var Icon = React.createClass({
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.string,
		color: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			size: 24,
			color: "white"
		};
	},
	renderGraphic: function(){
		switch(this.props.icon){
			case 'email':
				return (
			    	<g><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"></path></g>
			  	);
			case 'shop':
			  	return (
			    	<g><path d="M16 6v-2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2h-6v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-13h-6zm-6-2h4v2h-4v-2zm-1 14v-9l7.5 4-7.5 5z"></path></g>
			  	);
			case 'lock':
				return (
					<g><path d="M18 8h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9h-6.2v-2c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
				);
		}
	},
	render: function(){
		var styles = {
			fill: "currentcolor",
			verticalAlign: "middle",
			width: this.props.size,
			height: this.props.size,
			color: this.props.color
		};

		return (
			<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
				style={styles}>
				{this.renderGraphic()}
			</svg>
		);
	}
});

module.exports = Icon;