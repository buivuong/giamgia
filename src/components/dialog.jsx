/* INCLUDE MODULE */
var React = require('react');
var $ = require('jquery-browserify');
/* END INCLUDE MODULE */

/* MAIN MODULE */
var Dialog = React.createClass({
	open: function(){
		$('body').addClass('modal-open');
		$('body').append('<div class="modal-backdrop fade in"></div>');
		$(React.findDOMNode(this.refs.modal)).css({display: 'block', paddingRight: '17px'});
	},
	close: function(){
		$('body').removeClass('modal-open');
		$('body').find('.modal-backdrop').remove();
		$(React.findDOMNode(this.refs.modal)).css({display: 'none'});
	},
	render: function(){
		return (
			<div className="modal fade in" ref="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close">x</button>
							<h4 className="modal-title">Test Title</h4>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
/* END MAIN MODULE */

module.exports = Dialog;