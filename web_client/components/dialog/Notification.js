var IntlMixin = ReactIntl.IntlMixin;

var Notification = React.createClass({
	$root: null,
	mixins: [IntlMixin],
	propTypes: {
		header: React.PropTypes.string,
		message: React.PropTypes.string
	},
	componentDidMount: function(){
		this.$root = $(React.findDOMNode(this));
	},
	open: function(){
		this.$root.modal('show');
	},
	hide: function(){
		this.$root.modal('hide');
	},
	onClose: function(){
		this.hide();
	},
	render: function(){
		return (
			<div className="modal fade">
    			<div className="modal-dialog modal-sm">
      				<div className="modal-content">
      					{this.props.children}
      					<div className="modal-footer">
      						<button type="button" className="btn btn-primary" onClick={this.onClose}>{this.getIntlMessage('APP_BTN_CLOSE')}</button>
      					</div>
      				</div>
      			</div>
      		</div>
		)
	}
});

module.exports = Notification;