var IntlMixin = ReactIntl.IntlMixin;

var Form = React.createClass({
	$root: null,
	refs: null,
	serializeObject: null,
	mixins: [IntlMixin],
	propTypes: {
		customClass: React.PropTypes.string,
		onSubmit: React.PropTypes.func.isRequired
	},
	getDefaultProps: function(){
		return {
			customClass: ''
		}
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	clearAll: function(){
		for(var key_input_refs in this.input_refs){
			if(is.function(this.input_refs[key_input_refs].clear)){
				this.input_refs[key_input_refs].clear();
			}
		}	
	},
	clearErrors: function(){
		this.$root.removeClass('error');

		for(var key_input_refs in this.input_refs){
			if(is.function(this.input_refs[key_input_refs].clearError))
				this.input_refs[key_input_refs].clearError();
		}
	},
	openErrors: function(err){
		for(var key_refs in this.refs){
			for(var key_err in err){
				if(key_err.toString() === key_refs.toString()){
					error = this.getIntlMessage(err[key_err][0]);
					this.refs[key_refs].addError(error);
				}
			}
		}
	},
	setRefs: function(refs){
		this.refs = extend({}, refs);
	},
	getSerializeObject: function(){
		return this.serializeObject;
	},
	onHandleSubmit: function(event){
		event.preventDefault();

		this.serializeObject = this.$root.serializeObject();
		this.props.onSubmit(event);
	},
	render: function(){
		return (
			<form className={this.props.customClass} onSubmit={this.onHandleSubmit} noValidate>
				{this.props.children}
			</form>
		)
	}
});

module.exports = Form;