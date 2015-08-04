var Loader = React.createClass({
	$root: null,
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	componentWillUnmount: function(){
		this.$root = null;
	},
	show: function(){
		this.$root.css({display: 'block'});
	},
	hide: function(){
		this.$root.css({display: 'none'});
	},
	render: function(){
		return (
			<div className="dimmer" style={{display: 'none'}}>
				<div className="spinner-loader"/>
			</div>
		)
	}
});

module.exports = Loader;