var React = require('react');
var Breadcrumps = require('Breadcrumps');
var Auth_Mixin = require('admin_auth');
var Tooltip = require('Tooltip');

var Template = React.createClass({
	mixins: [Auth_Mixin],
	contextTypes: {
		router: React.PropTypes.func
	},
	componentDidMount: function(){
        Tooltip.open({dom: React.findDOMNode(this.refs.button_add), content: 'Thêm cửa hàng mới'});
    },
    goToFormAdd: function(){
    	Tooltip.hide({dom: React.findDOMNode(this.refs.button_add)});
    	this.context.router.transitionTo('admin_shop_add');
    },
	render: function(){
		var links = [
			{text: 'Các cửa hàng'}
		];

		return (
			<section id="content">
				<div className="fixed-action-btn" style={{top: '65px', right: '24px'}}>
					<a className="btn-floating btn-large red" ref="button_add" onClick={this.goToFormAdd}>
						<i className="large mdi-editor-mode-edit"></i>
					</a>
				</div>
				<Breadcrumps title="Các cửa hàng" links={links}/>
				<div className="container">
					<div className="section">
						<p className="caption">
							Cửa hàng có thể là nơi bán quần áo, vé du lịch, máy bay, bán sỉ lẻ, đồ gia dụng ...
						</p>
						<div className="divider"></div>
						<div className="divider"></div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Template;