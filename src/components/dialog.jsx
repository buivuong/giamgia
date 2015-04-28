/* INCLUDE MODULE */
var React = require('react');
var ReactAddons = require('react-addons');
var jquery = require('jquery-browserify');
/* END INCLUDE MODULE */

/* MAIN MODULE */
var Dialog = React.createClass({
	getInitialState: function(){
		return {dialogClassName: ''};
	},
	componentWillMount: function(){
		this.setState({dialogClassName: "ui "+this.props.size+" modal"});
	},
	show: function(){
		jquery(this.getDOMNode()).modal('show', {
			detachable: false,
			allowMutiple: true,
			closable: false
		});
	},
	hide: function(){
		jquery(this.getDOMNode()).modal('hide');
	},
	render: function(){
		return (
			<div className={this.state.dialogClassName}>
				{this.props.children}
			</div>
		);
	}
});
/* END MAIN MODULE */

module.exports = Dialog;