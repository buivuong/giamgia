/* INCLUDE MODULE */
var React = require('react');
var $ = require('jquery-browserify');
/* END INCLUDE MODULE */

/* MAIN MODULE */
var Confirm = React.createClass({
	propTypes: {
		type: React.PropTypes.string,
		header: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			type: 'error',
			header: 'Xác nhận trước khi thực hiện'
		}
	},
	componentDidMount: function(){
		switch(this.props.type){
			case 'error':
				$(this.getDOMNode()).find('.notification').addClass('notification-error');
				break;
			case 'success':
				$(this.getDOMNode()).find('.notification').addClass('notification-success');
				break;
		}
	},
	open: function(){
		$('body').addClass('modal-open');
		$('body').append('<div class="modal-backdrop fade in"></div>');
		$(this.getDOMNode()).addClass('animated fadeIn');
		$(this.getDOMNode()).css({display: 'block', paddingRight: '17px'});
	},
	close: function(){
		$('body').removeClass('modal-open');
		$('body').find('.modal-backdrop').remove();
		$(this.getDOMNode()).removeClass('animated fadeIn');
		$(this.getDOMNode()).addClass('animated fadeOut');

		setTimeout(function(){
			$(this.getDOMNode()).removeClass('animated fadeOut');
			$(this.getDOMNode()).css({display: 'none', paddingRight: '0'});
		}.bind(this), 300)
	},
	render: function(){
		return (
			<div className="modal fade in">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" onClick={this.close}>x</button>
							<h4 className="modal-title">{this.props.header}</h4>
						</div>
						<div className="modal-body">
							<div className="notification">
								{this.props.children}
							</div>
						</div>
						<div className="modal-footer">
							<button className="btn btn-default" onClick={this.close}>Đóng</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
/* END MAIN MODULE */

module.exports = Confirm;