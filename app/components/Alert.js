var React = require('react');

var Alert = React.createClass({
	open: function(){
		$(this.getDOMNode()).openModal();
	},
	close: function(){
		$(this.getDOMNode()).closeModal();
	},
	render: function(){
		return (
			<div className="modal">
				<div className="modal-content">
					{this.props.children}
				</div>
				<div className="modal-footer">
					<a className="modal-action modal-close waves-effect waves-green btn-flat">Đóng</a>
				</div>
			</div>
		);
	}
});
/* END MAIN MODULE */

module.exports = Alert;