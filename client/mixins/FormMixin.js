var React = require('react');

var Form = {
	contextTypes: {
		router: React.PropTypes.func
	},
	componentWillMount: function(){
		KeyboardJS.on('enter', function(){
			this.onClickSubmit();
		}.bind(this));
	}
}

module.exports = Form;