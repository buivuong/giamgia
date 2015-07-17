var Form = React.createClass({
	$root: null,
	input_refs: null,
	serializeObject: null,
	propTypes: {
		onSubmit: React.PropTypes.func.isRequired
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
		this.$root.addClass('error');

		for(var key_input_refs in this.input_refs){
			for(var key_err in err){
				if(key_err.toString() === key_input_refs.toString()){
					this.input_refs[key_input_refs].addError(err[key_err]);
				}
			}
		}
	},
	setInputRefs: function(refs){
		this.input_refs = extend({}, refs);
	},
	getSerializeObject: function(){
		return this.serializeObject;
	},
	onHandleSubmit: function(event){
		event.preventDefault();
		for(var key_input_refs in this.input_refs){
			if(is.function(this.input_refs[key_input_refs].clickForm)){
				this.input_refs[key_input_refs].clickForm();
			}
		}
		this.serializeObject = this.$root.serializeObject();
		this.props.onSubmit(event);
	},
	render: function(){
		return (
			<form className="ui form" onSubmit={this.onHandleSubmit}>
				{this.props.children}
			</form>
		)
	}
});

module.exports = Form;