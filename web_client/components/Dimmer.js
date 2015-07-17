var Dimmer = React.createClass({
	propTypes: {
		message: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			message: 'Đang tải'
		}
	},
	getInitialState: function(){
		return {display: ''}
	},
	open: function(){
		this.setState({display: 'active'});
	},
	hide: function(){
		this.setState({display: ''});
	},
	render: function(){
		return (
			<div className={"ui "+this.state.display+" dimmer"}>
    			<div className="ui text loader">{this.props.message}</div>
  			</div>
  		)
	}
});

module.exports = Dimmer;