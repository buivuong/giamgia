var Dialog = React.createClass({
	$root: null,
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	open: function(){
		this.$root.modal('show');
	},
	hide: function(){
		this.$root.modal('hide');
	},
	render: function(){
		return (
			<div className="modal fade">
    			<div className="modal-dialog doctorgroup-detail-wrap modal-wrap">
      				<div className="modal-content no-border-radius">
      					{this.props.children}
      				</div>
      			</div>
      		</div>
		)
	}
});

module.exports = Dialog;