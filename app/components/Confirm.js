var React = require('react');

var Alert = React.createClass({
	propTypes: {
		onOk: React.PropTypes.func
	},
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
					<a className="modal-action waves-effect waves-green btn-flat" onClick={this.close}>Không</a>
					<a className="modal-action waves-effect waves-green btn-flat" onClick={this.props.onOk}>Có</a>
				</div>
			</div>
		);
	}
});

module.exports = Alert;