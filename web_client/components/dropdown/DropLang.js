var DropLang = React.createClass({
	$root: null,
	propTypes: {
		onChange: React.PropTypes.func
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
		this.$root.find('.menu').find('.remove-datareact').removeAttr('data-reactid');
		this.$root.dropdown({
			onChange: function(value, text, $selectedItem){
				this.props.onChange(value);			
			}.bind(this)
		});
		this.$root.dropdown('set selected', 'vn');
	},
	render: function(){
		return (
			<div className="ui selection dropdown" style={{position: 'fixed', right: 0, bottom: 0}}>
                <input type="hidden"/>
                <i className="dropdown icon"></i>
                <div className="default text">
                	Change Language
                </div>
                <div className="menu">
                    <div className="item" data-value="gb">
                        <i className="gb flag"/><span className="remove-datareact">English</span>
                    </div>
                    <div className="item" data-value="vn">
                        <i className="vn flag"/><span className="remove-datareact">Vietnamese</span>
                    </div>
                </div>
            </div>
		)
	}
});

module.exports = DropLang;