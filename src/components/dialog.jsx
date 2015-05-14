/* INCLUDE MODULE */
var React = require('react');
var $ = require('jquery-browserify');
/* END INCLUDE MODULE */

/* MAIN MODULE */
var Dialog = React.createClass({
	propTypes: {
		type: React.PropTypes.string,
		header: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			type: 'confirm',
			header: 'Xác nhận trước khi thực hiện'
		}
	},
	componentDidMount: function(){
		switch(this.props.type){
			case 'confirm':
				$(this.getDOMNode()).find('.modal-dialog').addClass('modal-sm');
				break;
		}
	},
	open: function(){
		$('body').addClass('modal-open');
		$('body').append('<div class="modal-backdrop fade in"></div>');
		$(this.getDOMNode()).css({display: 'block', paddingRight: '17px'});
	},
	close: function(){
		$('body').removeClass('modal-open');
		$('body').find('.modal-backdrop').remove();
		$(this.getDOMNode()).css({display: 'none'});
	},
	render: function(){
		return (
			<div className="modal fade in">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" onClick={this.close}>x</button>
							<h4 className="modal-title">{this.props.header}</h4>
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